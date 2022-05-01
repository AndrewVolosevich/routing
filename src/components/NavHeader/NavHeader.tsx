import React from 'react';
import './NavHeader.scss'
import {NavLink} from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const NavHeader = () => {
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
            <button>Button</button>
        </div>
    );
};

export default NavHeader;