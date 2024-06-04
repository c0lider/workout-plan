import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
