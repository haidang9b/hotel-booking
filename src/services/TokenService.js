export const GetAccessToken = () => {
    return localStorage.getItem('accessToken');
}

export const GetRefreshToken = () => {
    return localStorage.getItem('refreshToken');
}

export const SetAccessToken = (token) => {
    localStorage.setItem('accessToken', token);
}

export const SetRefreshToken = (token) => {
    localStorage.setItem('refreshToken', token);
}
