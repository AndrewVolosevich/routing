import React from 'react';
import {useLocation, Navigate} from "react-router-dom";

const RequiredAuth = ({children}: {children: React.ReactNode}): JSX.Element => {
    const location = useLocation();
    const auth = false;

    if (!auth) {
        return <Navigate to={'/login'} state={{from: location}} />
    }

    return <div>{children}</div>;
};

export default RequiredAuth;