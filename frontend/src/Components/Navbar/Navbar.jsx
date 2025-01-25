// for navigation bar

import React from 'react' 
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart from '../Assets/cart.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" 
                style={{ width: '75px',height: 'auto'}}/>
                <p>STYLENOOK</p>
            </div>
            <ul className="nav-menu">
                <li>Shop</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart} alt="" style={{ width: '70px', height: 'auto'}}/>
            </div>
        </div>

    )
}

export default Navbar