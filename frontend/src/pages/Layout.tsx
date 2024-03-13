import React, { Children } from 'react';
import Header from '@/components/Common/Header/Header';
import Sidebar from '@/components/Common/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div className='min-h-screen h-full '>
            <Header />
            <div className="flex h-screen overflow-hidden z-4">
                <Sidebar />
                <main className="w-full pt-16 bg-pri">
                    <Outlet />
                </main>
            </div>
        </div>

    );
};

export default Layout;