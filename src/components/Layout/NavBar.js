import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (<div className='NavBar'>
<h1>Ici mon Titre</h1>
<nav>
 <ul>
   <li><Link to="/">Accueil</Link></li>
   <li><Link to="/a-propos">A Propos</Link></li>
 </ul>
</nav>
</div>)}

export default NavBar