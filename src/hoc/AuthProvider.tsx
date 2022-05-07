import React, {useMemo, useState} from 'react';
import {createContext} from "react";

export interface IAuth {
    user: null | string,
    signIn: (newUser: string, cb: () => void) => void,
    signOut: (cb: () => void) => void
}
const initialValue: IAuth = {
    user: null,
    signIn: (newUser: string, cb: () => void) => {},
    signOut: (cb: () => void) => {}
}

export const AuthContext = createContext(initialValue)

const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<string | null>(null);

    const signIn = (newUser: string, cb: () => void) => {
        setUser(newUser)
        cb()
    }

    const signOut = (cb: () => void) => {
        setUser(null)
        cb()
    }

    const value = useMemo(() => {
        return {
            user, signIn, signOut
        }
    }, [user])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;