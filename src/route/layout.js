import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../components/NavBar';
import './layout.css';
import Sidebar from '../components/SideBar';

const Layout = () => {
    return (
        <div className='container'>
             <Navbar/>
             <div className='contentContainer'>
                <Sidebar/>
             <Outlet/>

             </div>
            
        </div>
    );
}; 
export default Layout;