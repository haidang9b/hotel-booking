import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Rooms = () => {
    useEffect(() => {
        document.title = "Rooms";
    }, []);
    return (
        <div>
            <Navbar />
            <h1>Rooms</h1>
            <p>This is the rooms page</p>
        </div>
    )
}

export default Rooms;