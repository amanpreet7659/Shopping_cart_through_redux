import axios from "axios"
import { ADD_TO_CART, CHECK_OUT, GET_PRODUCT, LOGIN_USER, REGISTER_DATA, REMOVE_TO_CART } from "../Store/Events"

export const getProducts = () => dispatch => {
    axios.get('https://fakestoreapi.com/products')
        .then(res => {
            dispatch({
                type: GET_PRODUCT,
                payload: { data: res.data }
            })
        })
        .catch(err => {
            dispatch({
                type: GET_PRODUCT,
                payload: {
                    data: false,
                    err
                }
            })
        })
}
export const addToCart = (data, qty) => dispatch => {
    console.log("ADD TO CART FUNCTION ", data);
    dispatch({
        type: ADD_TO_CART,
        payload: {
            data: data, quantity: qty
        }
    })
}

export const removeCartData = (id) => dispatch => {
    console.log("id from remove catr data is ", id);
    dispatch({
        type: REMOVE_TO_CART,
        payload: id
    })
}

export const checkoutData = (id) => dispatch => {
    console.log("checkout id ", id);
    dispatch({
        type: CHECK_OUT,
        payload: id
    })
}

export const RegisterUser = (data) => dispatch => {
    dispatch({ type: REGISTER_DATA, payload: data })
}

export const login_user = (data) => dispatch => {
    // console.log("login data ",data);
    if (data===false) {
        dispatch({ type:LOGIN_USER, payload: false })
    }
    else {
        dispatch({
            type: LOGIN_USER,
            payload: data
        })
    }
}