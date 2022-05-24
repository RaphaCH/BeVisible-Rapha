import { createContext , useEffect, useState,} from "react"
import {setCookie, parseCookies} from 'nookies';
// import Cookie from 'js-cookie';
// import {setCookies} from 'cookies-next';

import {api} from '../services/api';


import Router from 'next/router';
import { recoverUserCredentials, signInRequest } from "../services/auth";

export const AuthContext = createContext({});

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const isAuthenticated = !!user;

    useEffect(() => {
        const {'beVisible': token} = parseCookies();

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        // if(token) {
        //     recoverUserCredentials(token).then(response => setUser(response.user));
        // }
    }, [])


    async function signIn({email, password}) {
        const {token, user, message} = await signInRequest({email, password});
        // const qualquerCoisa = await signInRequest({email, password});

        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        

        if(token !== null) {
            setCookie(undefined, 'beVisible.token', token, {
                maxAge: 60 * 60 * 1, //cookies will last for 1 hour
            })
            // Cookie.set('beVisible.token', token, {
            //     expires: 1/24,
            //     maxAge: 60 * 60 * 1 //1 hour
            // })
            setUser(user);
            Router.push('/dashboard/view');
        }
        return {message}
        // //Retrieve permissions from user (Student, Coach, Company).
        // //Push a different route based on those permissions.
        // //Example: Students go to dashboard/view.
    }



    return (
        <AuthContext.Provider value={{user, isAuthenticated, signIn}} >
        {children}
        </AuthContext.Provider >
    )
}