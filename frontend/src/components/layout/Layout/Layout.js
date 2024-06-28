import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <main className="min-vh-100 ">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
