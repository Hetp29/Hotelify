import React from 'react';
import Header from '../components/Header';
import Slogan from '../components/Slogan';

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <Slogan />
        </div>
    )
}
    

export default Layout;

