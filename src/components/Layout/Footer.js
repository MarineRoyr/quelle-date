import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footer.scss'



const Footer = () => {
    return (
 <footer>
  <div className='footerContainer'>
  <nav>
 <ul>
   <li><Link to="/quelle-date/">Accueil</Link></li>
   <li><Link to="/quelle-date/apropos">A Propos</Link></li>
   <li><Link to="/quelle-date/mentionslegales">Mentions légales</Link></li>
 </ul>
</nav>
      </div>
 </footer>
    );
  }

export default Footer 