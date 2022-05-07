import React from 'react';
import NavHeader from "../NavHeader/NavHeader";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <NavHeader />
            <div style={{display: "flex", height: '100%', minHeight: '600px', padding: '50px 20px'}}>
                <Outlet />
            </div>

            <footer>2022</footer>
        </div>
    );
};

export default Layout;