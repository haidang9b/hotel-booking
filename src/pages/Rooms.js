import React, { useEffect } from "react";

const Rooms = () => {
    useEffect(() => {
        document.title = "Rooms";
    }, []);
    return (
        <div>
            <h1>Rooms</h1>
            <p>This is the rooms page</p>
        </div>
    )
}

export default Rooms;