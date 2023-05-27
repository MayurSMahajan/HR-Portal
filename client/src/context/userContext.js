import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../components/utils/util";

export const UserContext = createContext(null)

export const UserDataProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [Token, setToken] = useState(0);

    useEffect(() => {
        async function userToken(params) {
            const token = localStorage.getItem('token')
            setToken(token)
            const confg = {
                headers: { "x-access-token": token }
            }
            axios.get(`${BASE_URL}/auth/verifyuser`, confg)
                .then((res) => {
                    setUser(res.data.user)
                })
                .catch((err) => console.log(err))
        }
        userToken()
    }, [])


    return (
        <UserContext.Provider value={{
            user, setUser,
            Token, setToken
        }}>
            {children}
        </UserContext.Provider>
    )
}

