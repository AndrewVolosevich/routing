import React, {useState} from 'react';
import useAuthContext from "../../hooks/useAuthContext";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {signIn} = useAuthContext()
    const navigate = useNavigate()
    const location = useLocation()

    // @ts-ignore
    const fromPath = location?.state?.from


    return (
        <div>
            <h2>Login Page</h2>

            <input value={name} onChange={(e) => {
                setName(e.target.value)
            }} placeholder={'Input your name'} />
            <input value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} placeholder={'Input your password'} />

            <button onClick={() => {
                if (name.length && password.length) {
                    signIn(name, () => navigate(fromPath,  {replace: true}))
                }
                setName('')
                setPassword('')
            }}>Login</button>
        </div>
    );
};

export default LoginPage;