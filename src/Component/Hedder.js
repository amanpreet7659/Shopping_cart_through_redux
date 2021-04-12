import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../assets/image/smiling-shopping-cart-logo-design-vector-15122007.jpg'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { login_user } from '../Action/ProductFetchAction';

const Hedder = ({ cart,searchfunction }) => {
    const data = useSelector(state => state.API.login_user)
    console.log("dddddddddddddddddddd ", data);
    const dispatch = useDispatch();
    // const handleLogout = () => {
    //     dispatch(login_user(false))
    // }

    // const searchfunction = (e) => {
    //     let search=API_Data.filter((i)=>{return (i.category.includes(e.target.value))})

    // }
    return (
        <div className="Hedding">
            <Link to="/Product_Window"><img className="logo" src={logo} /></Link>
            <input className="search" type="search" placeholder="Enter here to search products by Category" onChange={searchfunction} />
            <label className="Name">{data.UName}</label>
            <label className="More">More</label>
            <label className="Cart"><Link to="/CartItems" className="Cart">Cart</Link><sup className="sup">{cart}</sup></label>
            {/* <button className="logout" onClick={handleLogout}><Link to="/LoginPage">{<ExitToAppIcon/>}</Link></button> */}
        </div>
    )
}

export default Hedder
