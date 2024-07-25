import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';
import SearchBar from '../Layout/SearchBar'
import Footer from '../Layout/Footer'



const Layout = () => {
  return (
    <div>
        <main className='mainContent'> 
            <Header/>
            <SearchBar/>
      <Outlet/>
    </main>
    <div>
      <Footer/>
      </div>
   </div>
  );
}



export default Layout;