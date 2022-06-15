import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../redux/selector";
const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(authSelector);
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default PrivateRoute;
