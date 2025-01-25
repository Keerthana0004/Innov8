// for navigation bar

import React, {useState} from 'react' 
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart from '../Assets/cart.png'
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
                <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}>Men  {menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}>Women {menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}>Kids {menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">        
                <button>Login</button>
                <img src={cart} alt="" style={{ width: '70px', height: 'auto'}}/>
                <div className="nav-cart-count">
                0
                </div>
            </div>
        </div>

    )
}

export default Navbar