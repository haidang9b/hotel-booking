import React, { useEffect } from 'react'

const Login = () => {
    useEffect(() => {
        document.title = "Login";
    }, []);
    return (
        <div>
            <h1>Login</h1>
            <p>This is the login page</p>
        </div>
    )
}

export default Login;