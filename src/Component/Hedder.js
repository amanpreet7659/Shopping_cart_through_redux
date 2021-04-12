import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../assets/image/smiling-shopping-cart-logo-design-vector-15122007.jpg'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { login_user } from '../Action/ProductFetchAction';
import TextField from '@material-ui/core/TextField';

const Hedder = ({ cart,searchfunction }) => {
    const data = useSelector(state => state.API.login_user)
    // console.log("dddddddddddddddddddd ", data);
    const dispatch = useDispatch();
    const logout=()=>{
        // dispatch(login_user(false))
    }
    return (
        <div className="Hedding">
            <Link to="/Product_Window" title="Home"><img className="logo" src={logo} /></Link>
            {/* <TextField className="search" label="Enter here to search products by Title" onChange={searchfunction}></TextField> */}
            <input className="search" type="search" title="Search here" placeholder="Enter here to search products by Title" onChange={searchfunction} />
            <label className="Name">{data.UName}</label>
            <label className="More">More</label>
            <label className="Cart"><Link to="/CartItems" title="Cart Items" className="Cart">Cart</Link><sup className="sup">{cart}</sup></label>
            <button className="logout" title="logout" onClick={logout}>{<ExitToAppIcon/>}</button>
        </div>
    )
}

export default Hedder
