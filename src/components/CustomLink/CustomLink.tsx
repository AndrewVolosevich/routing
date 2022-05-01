import React from 'react';
import {Link, useMatch} from "react-router-dom";

const CustomLink = ({children, to, ...props}: any) => {
    const match = useMatch(to);
    return (
        <Link
            to={to}
            style={{
                color: match ? 'tomato' : 'black'
            }}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;