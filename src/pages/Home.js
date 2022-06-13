import React, { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page</p>
        </div>
    )
}


export default Home;