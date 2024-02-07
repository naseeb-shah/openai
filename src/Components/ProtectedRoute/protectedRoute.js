import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        // const token = "kd";

        const user = localStorage.getItem('cred')

        if ( user === null) {
            navigate('/login');
        }
    }, [navigate]);

    return <Component />;
};

export default ProtectedRoute;
