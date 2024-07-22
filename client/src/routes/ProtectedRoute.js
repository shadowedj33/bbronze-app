// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    return isAuthenticated ? children : navigate("/login");
};

export default ProtectedRoute;
