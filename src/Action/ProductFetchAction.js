import axios from "axios"
import { ADD_TO_CART, GET_PRODUCT, REMOVE_TO_CART } from "../Store/Events"

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
    dispatch({
        type: REMOVE_TO_CART,
        payload:id
    })
}