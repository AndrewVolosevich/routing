import React from 'react';
import useAuthContext from "../../hooks/useAuthContext";

const SecuredPage = () => {
    const {signOut} = useAuthContext()

    return (
        <div>
            SECRET

            <button onClick={() => {
                signOut(() => {})
            }}>Logout</button>
        </div>
    );
};

export default SecuredPage;