import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className='navigation'>
                <h1 className='Navbar-logo' id='Home'> <span>Me</span>rka</h1>
                <h1><i class="fa-solid fa-cart-shopping"></i></h1>
            </nav>

        )
    }
}
export default Navbar;