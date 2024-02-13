import { Outlet, Navigate } from "react-router-dom";
import React, { useContext , useEffect, useState } from 'react'
import AuthContext from "../providers/AuthContext";

const PublicRouting = () => {
    const { logged  , getUser} = useContext(AuthContext);

    useEffect(() => {
        getUser();
    }, [logged]);
    
    return (
        logged ?  <Navigate to='/dashboard' /> : <Outlet/>
    );
}

export default PublicRouting;
