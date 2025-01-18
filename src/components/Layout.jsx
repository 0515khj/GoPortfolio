import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className="main">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;