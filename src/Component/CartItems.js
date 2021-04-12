import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, checkOut, checkoutData, removeCartData } from '../Action/ProductFetchAction'
import Hedder from './Hedder'
import Placed from './Placed'

const CartItems = () => {
    const cartdata = useSelector(state => state.API.cartData);
    const [data, setdata] = useState(cartdata)
    // const remdata = useSelector(state => state.API.updateData)
    const [id, setId] = useState();
    const dispatch = useDispatch()
    const [incre, setincre] = useState(data)

    console.log("cartdata ", cartdata);

    const handleRemove = (id) => {
        // dispatch(removeCartData(id))
        setdata(data.splice(id, 1));
    }
    const handleBuyNow = (id) => {
        dispatch(checkoutData(id))
        // alert(cartdata[id].data.data.price)
        // window.confirm(cartdata[id].data.data.price)
        if (window.confirm("Are You Sure to buy Prodict " + cartdata[id].data.data.title + " Price is : " + cartdata[id].data.data.price + "Quantity is : " + cartdata[id].quantity)) {
            alert("Order Placed")
            setdata(data.splice(id, 1))
        }
    }

    const handleCheckout=()=>{
        dispatch(checkOut())
        let sum=0;
        data.map((i)=>{
            sum=sum+parseFloat(i.data.data.price)
        })
        if(window.confirm("Are You Sure to Buy all products price is : "+sum))
        {
            alert("Order placed successfully")
            setdata([])
            return<Placed show={true}/>
        }
    }
    console.log("Data fffff v ",data);
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



