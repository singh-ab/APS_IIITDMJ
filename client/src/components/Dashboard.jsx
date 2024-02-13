import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            try {
                console.log(`fetching...`)
                const res = await fetch("http://localhost:5000/email", { credentials: 'include' });
                console.log(res);
                if (res.ok) {
                    console.log(`user logged in `)
                    setLogged(true);
                    
                } else if (res.status === 401) {
                    // Handle unauthorized access here, for example, redirecting to login page
                    window.location.href = 'http://localhost:5173/login';
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        getUser();
    }, []);







    return (
        <div>
            Dashboard
            <br />
            {logged}
            <br />
            <a href='http://localhost:5000/logout'>Logout</a>
            <br />
        </div>
    );
};

export default Dashboard;
