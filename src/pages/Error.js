import React, { useEffect } from "react";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
const Error = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Page not found";
    }, []);

    return (
        <div className="container">
            
            
        </div>
        
    )
}

export default Error;