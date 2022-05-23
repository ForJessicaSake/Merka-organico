import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
        return (
            <nav className='navigation'>
                <Link to='/'><h1 className='Navbar-logo' id='Home'> <span>Me</span>rka</h1></Link>  
                <Link to="/Cart/:id"><i class="fa-solid fa-cart-shopping"></i></Link>
            </nav>

        )
    }

export default Navbar;