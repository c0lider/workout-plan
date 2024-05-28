import React from 'react';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <>
            {/* TODO: header */}
            <main className="min-vh-100 ">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
