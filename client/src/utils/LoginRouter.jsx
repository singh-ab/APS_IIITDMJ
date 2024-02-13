import { Outlet, Navigate } from "react-router-dom";
import React, { useContext , useEffect, useState } from 'react'
import AuthContext from "../providers/AuthContext";

const LoginRouting = () => {
    const { logged  , getUser} = useContext(AuthContext);

    useEffect(() => {
        getUser();
    }, [logged]);
    
    return (
        logged ? <Outlet /> : <Navigate to='/login' />
    );
}

export default LoginRouting;
