import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';
import Header from '../Component/Header';

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className='max-w-[1440px] mx-auto'>
                <div className='w-11/12 mx-auto'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;