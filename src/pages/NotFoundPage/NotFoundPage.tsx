import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            Uncorrected path
            <Link to={'/'}> go home</Link>
        </div>
    );
};

export default NotFoundPage;