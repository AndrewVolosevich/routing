import React, {useContext} from 'react';
import {AuthContext} from "../hoc/AuthProvider";

const UseAuthContext = () => {
    return useContext(AuthContext)
};

export default UseAuthContext;