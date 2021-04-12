import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkoutData, removeCartData } from '../Action/ProductFetchAction'
import Hedder from './Hedder'

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
        setdata(cartdata.splice(id, 1));
    }
    const handleCheckout = (id) => {
        dispatch(checkoutData(id))
        // alert(cartdata[id].data.data.price)
        // window.confirm(cartdata[id].data.data.price)
        if (window.confirm("Are You Sure to buy Prodict " + cartdata[id].data.data.title + " Price is : " + cartdata[id].data.data.price)) {
            alert("Order Placed")
            setdata(cartdata.splice(id, 1))
        }
    }

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
                        <input className="cartNumber" min="1" type="number" onChange={(e) => {
                            incre[j].quantity = e.target.value
                            setId([j].quantity = e.target.value)
                        }} placeholder={i.quantity} value={i.quantity} />
                        <button onClick={() => { handleRemove(j) }}>Remove</button>
                        <button onClick={() => { handleCheckout(j) }}>Checkout</button>
                    </div>
                </div>)
            })
            }
        </div>

    </div>
    )
}


export default CartItems



