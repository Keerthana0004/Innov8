import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.png'
import list_product_icon from '../../assets/Product_list_icon.png'
const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <Link to={'/addprodruct'} style={{textDecoration:"none"}}>
        <div className="Sidebar-item">
            <img src={add_product_icon} alt="" />
            <P>Add Product</P>
        </div>
        </Link>
        <Link to={'/listprodruct'} style={{textDecoration:"none"}}>
        <div className="Sidebar-item">
            <img src={add_product_icon} alt="" />
            <P>Add Product</P>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar