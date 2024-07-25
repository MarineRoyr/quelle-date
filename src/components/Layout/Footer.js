import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footer.scss'



const Footer = () => {
    return (
 <footer>
  <div className='FooterContainer'>
  <nav>
 <ul>
   <li><Link to="/quelle-date/">Accueil</Link></li>
   <li><Link to="/apropos">A Propos</Link></li>
   <li><Link to="/mentionslegales">Mentions légales</Link></li>
 </ul>
</nav>
      </div>
 </footer>
    );
  }

export default Footer 