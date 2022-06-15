import { createSelector } from "@reduxjs/toolkit"

export const userSelector = state => state.auth.user;
export const isLoggedInSelector = state => state.auth.isLoggedIn;
export const isLoadingAuthSelector = state => state.auth.isLoading; 
export const authSelector = createSelector(userSelector, isLoggedInSelector, (user, isLoggedIn) => {
    if(isLoggedIn === false || user === null) {
        return false;
    }
    return true;
});

export const isLoadingSelector = createSelector(isLoadingAuthSelector, (loadingAuth) => {
    return loadingAuth;
})