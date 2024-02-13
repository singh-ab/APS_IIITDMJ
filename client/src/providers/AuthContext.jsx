import { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {


    const [logged, setLogged] = useState(false);
    const [email, setemail] = useState(null);
    const navigate = useNavigate();



    const getUser = async () => {
        try {
            const res = await fetch("http://localhost:5000/log", { credentials: 'include' });
            console.log(res);
            if (res.ok) {
                const data = await res.json();

                setLogged(true);
                setemail(data.logged);
                console.log("email : ", data.logged);
                setLogged(true)
                console.log("logged : ", logged);
                navigate('/dashboard');
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };



    let contextData = {
        email: email,
        logged: logged,
        getUser: getUser,
        setLogged: setLogged,
        setemail: setemail

    }

    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )

}