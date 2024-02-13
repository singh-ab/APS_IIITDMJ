import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../providers/AuthContext';

const Dashboard = () => {
    const { email } = useContext(AuthContext);
    return (
        <>
            <div>
                Dashboard
                <br />
                {email}
                <br />
                <a href='http://localhost:5000/logout'>Logout</a>
                <br />
            </div>
        </>
    )
};

export default Dashboard;
