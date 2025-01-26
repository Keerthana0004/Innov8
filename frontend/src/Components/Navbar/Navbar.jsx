// for navigation bar

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cart from '../Assets/cart.png';
import search from '../Assets/search.png';
const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
    
            // Make POST request to the backend
            fetch('http://localhost:5000/search-image', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };
    
      
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
           
                
                <div className="file-upload">
                <img src={search} alt="" style={{ width: '70px', height: 'auto'}}/>
                <label htmlFor="file-upload" className="upload-btn">
                        Search by Image
                    </label>
                    <input
                        type="file"
                        id="file-upload"
                        style={{ display: 'none' }}
                        onChange={handleImageUpload}
                    />
                </div>
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