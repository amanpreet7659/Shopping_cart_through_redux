import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeCartData } from '../Action/ProductFetchAction'
import Hedder from './Hedder'

const CartItems = () => {
    const data = useSelector(state => state.API.cartData);
    const remdata=useSelector(state=>state.API.updateData)
    const [id, setId] = useState();
    const dispatch=useDispatch()
    const [incre, setincre] = useState(data)

    console.log("cartdata ", data, id);

    const handleRemove=(id)=>{
        dispatch(removeCartData(id))
    }
    useEffect(()=>{
        dispatch(removeCartData(id))
    },[data])

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
                            incre[j].quantity=e.target.value
                            setId([j].quantity=e.target.value)
                        }} placeholder={i.quantity} value={incre[j].quantity} />
                        <button onClick={()=>{handleRemove(j)}}>Remove</button>
                    </div>
                </div>)
            })
            }
        </div>

    </div>
    )
}


export default CartItems



