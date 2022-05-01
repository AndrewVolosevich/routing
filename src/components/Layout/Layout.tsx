import React from 'react';
import NavHeader from "../NavHeader/NavHeader";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <NavHeader />

            <Outlet />

            <footer>2022</footer>
        </div>
    );
};

export default Layout;