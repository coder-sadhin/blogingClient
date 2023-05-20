import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const writerInfo = JSON.parse(localStorage.getItem('writer'));
    const location = useLocation();

    if (writerInfo?.writer_email) {
        return children;
    }
    return <Navigate to={'/writer/login'} state={{ from: location }} replace></Navigate>

};

export default PrivateRoutes;