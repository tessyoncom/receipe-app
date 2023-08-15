import React from 'react';
import { Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div>Nav bar goes here</div>
            <Outlet/>
        </div>
    );
}; 
export default Layout;