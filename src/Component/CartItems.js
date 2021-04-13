import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, checkOut, checkoutData, removeCartData } from '../Action/ProductFetchAction'
import Hedder from './Hedder'
import Placed from './Placed'

const CartItems = () => {
    const cartdata = JSON.parse(localStorage.getItem('cart'))
    let arr = [];
    let local = JSON.parse(localStorage.getItem('placedorders'))
    const [data, setdata] = useState(cartdata)
    // const remdata = useSelector(state => state.API.updateData)
    const [id, setId] = useState();
    const dispatch = useDispatch()
    const [incre, setincre] = useState(data)

    console.log("cartdata ", cartdata);

    const handleRemove = (id) => {
        // dispatch(removeCartData(id))
        cartdata.splice(id, 1)
        localStorage.setItem('cart', JSON.stringify(cartdata))
        setdata(JSON.parse(localStorage.getItem('cart')))
    }
    const handleBuyNow = (id) => {
        dispatch(checkoutData(id))
        let token = JSON.parse(localStorage.getItem("Token"))
        if (token) {
            if (window.confirm("Are You Sure to buy Prodict " + cartdata[id].data.data.title + " Price is : " + cartdata[id].data.data.price + "Quantity is : " + cartdata[id].quantity)) {
                alert("Order Placed")
                if (local.length >= 0) {
                    local.push(cartdata[id]);
                    localStorage.setItem('placedorders', JSON.stringify(local))
                }
                else {
                    arr.push(cartdata[id])
                    localStorage.setItem('placedorders', JSON.stringify(arr))
                }
                cartdata.splice(id, 1);
                localStorage.setItem('cart', JSON.stringify(cartdata))
                setdata(JSON.parse(localStorage.getItem('cart')))
            }
        }
        else {
            alert("You need to Login First");
            window.location.href = "/LoginPage"
        }
    }

    const handleCheckout = () => {
        dispatch(checkOut())
        let sum = 0;
        data.map((i) => {
            sum = sum + parseFloat(i.data.data.price)
        })
        let token = JSON.parse(localStorage.getItem("Token"))
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart.length != 0) {
            if (token) {
                if (window.confirm("Are You Sure to Buy all products price is : " + sum)) {
                    alert("Order placed successfully")
                    if (local.length >= 0) {
                        local.push(cartdata);
                        localStorage.setItem('All', JSON.stringify(local))
                    }
                    else {
                        arr.push(cartdata)
                        localStorage.setItem('All', JSON.stringify(arr))
                    }
                    setdata([])
                    localStorage.removeItem('cart')
                    window.location.href = "/"
                }
            }
            else {
                alert("You need to Login First");
                window.location.href = "/LoginPage"
            }
        }
        else {
            alert("cart is empty")
            window.location.href = "/"

        }
    }


    console.log("Data fffff v ", data);
    return (<div>
        <Hedder />
        <div className="display">
            {data.map((i, j) => {
                return (<div >
                    <div className="product">
                        {/* <lable>{i.category}</lable>
                            <br></br> */}
                        {/* <p>{i.description}</p> */}
                        <br></br>
                        <img src={i.data.data.image} />
                        <br></br>
                        <label>Price is : {i.data.data.price}</label><br></br>
                        <br></br>
                        <lable>{i.data.data.title}</lable>
                        <br></br>
                        <br></br>
                        <input className="cartNumber" min="1" type="number" onChange={(e) => {
                            incre[j].quantity = e.target.value
                            setId([j].quantity = e.target.value)
                        }} placeholder={i.quantity} value={i.quantity} />
                        <button onClick={() => { handleRemove(j) }} className="remove">Remove</button>
                        <button onClick={() => { handleBuyNow(j) }} className="Buynow">Buy Now</button>
                    </div>


                </div>)
            })
            }
        </div>
        <button className="checkout" onClick={handleCheckout}>Checkout</button>

    </div>
    )
}


export default CartItems



