// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function PublicRoute({ children }) {
    const navigate = useNavigate();
    if(localStorage.getItem("token")){
        navigate('/account');
    } else {
        return children;
    }
}