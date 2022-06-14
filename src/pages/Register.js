import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Register = () => {
    useEffect(() => {
        document.title = "Register";
    }, []);
    return (
        <div>
            <Navbar />
            <h1>Register</h1>
            <p>This is the register page</p>
        </div>
    )
}

export default Register;