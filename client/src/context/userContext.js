import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../components/utils/util";

export const UserContext = createContext(null)

export const UserDataProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [Token, setToken] = useState(0);
    const [VerifyLoading, setVerifyLoading] = useState(false);
    const [VerifiedHR, setVerifiedHR] = useState(true);

    const navigate = useNavigate();


    useEffect(() => {
        async function userToken(params) {
            const token = localStorage.getItem('token')
            if (token) {
                setVerifyLoading(true)
                setToken(token)
                const confg = {
                    headers: { "x-access-token": token }
                }
                axios.get(`${BASE_URL}/api/hr/verifyhr`, confg)
                    .then((res) => {
                        console.log(res.data)
                        setUser(res.data.user)
                        setVerifyLoading(false)
                        setVerifiedHR(true)
                    })
                    .catch((err) => {
                        console.log(err)
                        setVerifyLoading(false)
                        setVerifiedHR(false)
                    })
            } else {
                setVerifiedHR(false)
                navigate('/login')
            }
        }
        userToken()
    }, [])


    return (
        <UserContext.Provider value={{
            user, setUser,
            Token, setToken,
            VerifyLoading, setVerifyLoading,
            VerifiedHR, setVerifiedHR
        }}>
            {children}
        </UserContext.Provider>
    )
}

