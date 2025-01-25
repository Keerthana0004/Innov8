// for navigation bar

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cart from '../Assets/cart.png';
const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    return (
        <div className='navbar'>

            <div className="nav-logo">
                <img src={logo} alt="" 
                style={{ width: '75px',height: 'auto'}}/>
                <p>STYLENOOK</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}> <Link to='/' style={{ textDecoration: 'none'}}>Shop </Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{ textDecoration: 'none'}} >Men </Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link to='/women' style={{ textDecoration: 'none'}}>Women </Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{ textDecoration: 'none'}}>Kids </Link> {menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">        
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart} alt="" style={{ width: '70px', height: 'auto'}}/></Link>
                <div className="nav-cart-count">
                0
                </div>
            </div>
        </div>

    )
}

export default Navbar