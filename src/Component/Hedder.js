import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../assets/image/smiling-shopping-cart-logo-design-vector-15122007.jpg'

const Hedder = ({ cart }) => {
    return (
        <div className="Hedding">
            <Link to="/Product_Window"><img className="logo" src={logo} /></Link>
            <input className="search" type="search" placeholder="Enter here to search products " />
            <label className="Name">Name</label>
            <label className="More">More</label>
            <label className="Cart"><Link to="/CartItems" className="Cart">Cart</Link><sup className="sup">{cart}</sup></label>
        </div>
    )
}

export default Hedder
