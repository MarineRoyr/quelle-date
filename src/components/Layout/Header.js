import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../designComponent/logo'
import '../../styles/header.scss'


const Header = () => {
    return (<div className='Header'>
        <Link to="/quelle-date/"><h1><Logo/></h1></Link>

</div>)}

export default Header