import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import '../../styles/indexLayout.scss';


const Layout = () => {
  return (
    <div className="layoutContainer">
      <Header />
           <main className="mainContent">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;