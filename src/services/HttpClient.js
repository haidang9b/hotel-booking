import axios from 'axios';
import { GetAccessToken, GetRefreshToken, SetAccessToken, SetRefreshToken } from './TokenService';
const HttpClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

const refreshToken = async () => {
    try{
        const token = GetRefreshToken();
        if (token) {
            const response = await HttpClient.post('/auth/refresh-token', { refreshToken:token });
            if (response.status === 200) {
                SetAccessToken(response.data.accessToken);
                SetRefreshToken(response.data.refreshToken);
                return true;
            }
        }
        return false
    }
    catch(error) {
        // localStorage.removeItem('accessToken');
        // localStorage.removeItem('refreshToken');
        console.log(error);
        return false;
    }
}

HttpClient.interceptors.request.use(config => {
    const token = GetAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}
, error => {
    return Promise.reject(error);
}
);

HttpClient.interceptors.response.use(response => {
    return response;
}
,async error => {
    const originalConfig = error.config;
   
    console.log(originalConfig._retry)
    if(error.response.status === 403 && !originalConfig._retry) {
        originalConfig._retry = true;
        await refreshToken();
        if(originalConfig.headers.Authorization){
            originalConfig.headers.Authorization = `Bearer ${GetAccessToken()}`;
        }
        return await HttpClient(originalConfig);

    }
    return Promise.reject(error);
});


export default HttpClient;