import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer';
import NavBar from '../Layout/NavBar';

const Error = () => {
  return (
    <div>
       <main className='mainContent'>
      <NavBar/>
    <div className='Error'>
      <h2 className='Error404'>404</h2>
      <p className='ErrorTxt'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/'>Retourner sur la page d’accueil</Link>
      
   
    </div>  </main> <Footer/>
   
    </div>
  );
};

export default Error;