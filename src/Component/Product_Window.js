import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getProducts } from '../Action/ProductFetchAction'
import Hedder from './Hedder';
import LoginPage from './LoginPage';
const Product_Window = () => {
    const dispatch = useDispatch();
    const API_DATA = useSelector(state => state.API.API_Data.data)
    const [getData, setGetData] = useState([]);
    const login = useSelector(state => state.API.login);
    const [cartData, setcartData] = useState(0);
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
        // let search = getData.filter((i) => { return (i.title.includes(e.target.value)) })

        // let search = getData.map((i)=>{
        //     return (i.filter((i)=>{return(i.data.cetagory.includes(e.target.value))}))
        // })

        // console.log("Search ", search);
        // setGetData(search)
        // console.log(getData);
    }

    const handleQty = (e) => {
        setqty(e.target.value);
    }
    return (
        <div className="real" >
            {!login && <LoginPage />}
            {login && <><Hedder searchfunction={searchfunction} />
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


