import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Layout/NavBar';
import SearchBar from '../Layout/SearchBar'
import Footer from '../Layout/Footer'



const Layout = () => {
  return (
    <div>
        <main className='mainContent'> 
            <NavBar/>
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