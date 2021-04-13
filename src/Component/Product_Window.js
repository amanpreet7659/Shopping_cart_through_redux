import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getProducts } from '../Action/ProductFetchAction'
import Hedder from './Hedder';
import LoginPage from './LoginPage';
const Product_Window = () => {
    const dispatch = useDispatch();
    const API_DATA = useSelector(state => state.API.API_Data.data)

    const token = JSON.parse(localStorage.getItem("Token"))

    const [getData, setGetData] = useState([]);
    const login = JSON.parse(localStorage.getItem("Token"))
    // const [login, setlogin] = useState(true)
    const [cartData, setcartData] = useState(0);
    const c = JSON.parse(localStorage.getItem('cart'))
    // console.log(c.length);
    const [qty, setqty] = useState(1);
    useEffect(() => {
        dispatch(getProducts());
    }, [])
    // console.log("API_DATA", getData);
    useEffect(() => {
        if (API_DATA) {
            let a = API_DATA.map((o) => {
                return {
                    quantity: 1,
                    data: o
                }
            })
            setGetData(a)
        }
        else {
            setGetData([])
        }
    }, [API_DATA])
    // console.log('getData', getData)

    const searchfunction = (e) => {
        let search = getData.filter((i) => { return (i.data.title.toLowerCase().includes(e.target.value)) })
        if (e.target.value === "") {
            let a = API_DATA.map((o) => {
                return {
                    quantity: 1,
                    data: o
                }
            })
            setGetData(a)
        }
        else {
            setGetData(search)
        }
    }

    const handleQty = (e) => {
        setqty(e.target.value);
    }

    console.log(login);
    return (
        <div className="real" >
            {/* {!login && <LoginPage />} */}
            {<><Hedder cart={c?c.length:null} searchfunction={searchfunction} />
                {/* <h1>Product Window</h1> */}
                <div className="display">
                    {getData.map((i, j) => {
                        return (<div >
                            <div className="product">
                                <br></br>
                                <img src={i.data.image} />
                                <br></br>
                                <label>Price is : {i.data.price}</label><br></br>
                                <br></br>
                                <lable>{i.data.title}</lable>
                                <br></br>
                                <lable>qty  </lable><input min="1" onChange={handleQty} className="cartNumber" placeholder={i.quantity} type="number" />
                                <button className="cartBtn" onClick={() => {
                                    setcartData(cartData + 1)
                                    dispatch(addToCart(i, qty))

                                }}> Add to Cart</button>
                            </div>
                        </div>)
                    })
                    }
                </div>
            </>}
        </div>
    )
}

export default Product_Window


