/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user,getUser] = useState(null);
    const [ready,setReady] = useState(false);
    useEffect(() => {
        if (!user) {
            axios.get('/api/v1/user/').then(({data}) => {
                getUser(data);
                setReady(true);
            });
        }
    }, []);
    return ( 
        <UserContext.Provider value={{user,getUser,ready}}>
            {children}
        </UserContext.Provider>
    );
}