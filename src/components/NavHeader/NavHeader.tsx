import React from 'react';
import './NavHeader.scss'
import {NavLink, useNavigate} from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import useAuthContext from "../../hooks/useAuthContext";

const NavHeader = () => {
    const {user, signOut} = useAuthContext()
    const navigate = useNavigate()

    return (
        <div className={'container'}>
            <div className={'links-container'}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink
                    to={'/posts'}
                    // className={({isActive}) => isActive ? 'active' : ''}
                    // style={({isActive}) => ({color: isActive ? 'tomato' : 'black'})}
                >
                    Posts
                </NavLink>
                <CustomLink to={'/users'}>Users</CustomLink>
                <CustomLink to={'/secret'}>Secret</CustomLink>
            </div>
            <button onClick={() => {
                if (user) {
                    signOut(() => {})
                } else {
                    navigate('/login')
                }
            }} >{user ? 'Logout' : 'Login'}</button>
        </div>
    );
};

export default NavHeader;