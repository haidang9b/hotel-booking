import React from "react";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      return <Navigate to='/login' />;
    }
    return children;
};

export default PrivateRoute;