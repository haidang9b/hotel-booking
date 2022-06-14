import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HttpClient from '../services/HttpClient';
export const authSlice = createSlice({
    name : 'auth',
    initialState : {
        isLoggedIn : false,
        user : null,
        isLoading : false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            if(action.payload.success) {
                state.isLoggedIn = true;
                state.user = action.payload.user;
            }
            state.isLoading = false;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
        })
        .addCase(logoutUser.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
            state.isLoading = false;
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.isLoading = false;
        })
        .addCase(getUser.pending, (state, action) =>   {
            state.isLoading = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
           
            if(action.payload.success) {
                state.isLoggedIn = true;
                state.user = action.payload.user;
            }
            state.isLoading = false;
        })
        .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false;
        })
    }
})



export const handleSuccess = (state, action) => {
    state.isLoggedIn = true;
    state.user = action.payload.user;
    state.token = action.payload.token;
}

export const handleFailure = (state, action) => {
    state.isLoggedIn = false;
    state.user = null;
    state.token = null;
}

export const loginUser = createAsyncThunk( 'auth/login', async (user) => {
    console.log(user);
    const response = await HttpClient.post('/auth/login', user);
    if(response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
    }
    return response.data;
})

export const logoutUser = createAsyncThunk( 'auth/logout', async () => {
    const response = await HttpClient.post('/auth/logout');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return response.data;
})

export const getUser = createAsyncThunk( 'auth/getUser', async () => {
    const response = await HttpClient.post('/auth/user');
    console.log("get user: ",response.data);
    return response.data;
})