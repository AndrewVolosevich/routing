import React from 'react';
import {useLocation, Navigate} from "react-router-dom";
import useAuthContext from "../../../hooks/useAuthContext";

const RequiredAuth = ({children}: {children: React.ReactNode}): JSX.Element => {
    const location = useLocation();
    const {user} = useAuthContext();

    const auth = !!user;

    if (!auth) {
        return <Navigate to={'/login'} state={{from: location.pathname}} />
    }

    return <div>{children}</div>;
};

export default RequiredAuth;