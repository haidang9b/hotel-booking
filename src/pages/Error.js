import React, { useEffect } from "react";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
const Error = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Page not found";
    }, []);
    const handleClick = () => {
        navigate("/");
    }
    return (
        <div>
            <h1>Page not found</h1>
            <p>Your link access not correct</p>
            <Button label="Back home" onClick={handleClick} icon="pi pi-home" className="p-button-info" />
        </div>
    )
}

export default Error;