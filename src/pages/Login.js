import React, { useEffect } from 'react'
import SignIn from '../components/SignIn';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../redux/selector';
import { useSelector } from 'react-redux';
const Login = () => {

    const isAuth = useSelector(authSelector);
    useEffect(() => {
        document.title = "Login";
    }, []);
    if (isAuth) {
       return <Navigate to="/rooms" />;
    }
    return (
        <>
            <SignIn />
        </>
    )
}

export default Login;