import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector, authSelector } from "../redux/selector";
import { ADMIN_ROLE } from "../core/constants";
const AdminRoute = ({ children }) => {
    const user = useSelector(userSelector);
    const isAdmin = user && user.role === ADMIN_ROLE;
    if (!isAdmin) {
        return <Navigate to="/" />;
    }
    return <>{ children }</>;
};

export default AdminRoute;
