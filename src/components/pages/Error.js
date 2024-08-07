import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer';
import NavBar from '../Layout/Header';
import image from '../../images/page404.jpg'
import '../../styles/error.scss'

const Error = () => {
  return (
    <div>
       <main className='mainContent'>
      <NavBar/>
    <div className='Error'>
      <h2 className='Error404'>404</h2>
      <img src={image} alt="erreur dans la navigation"/>
      <p className='ErrorTxt'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/quelle-date/'>Retourner sur la page d’accueil</Link>
      
   
    </div>  </main> <Footer/>
   
    </div>
  );
};

export default Error;