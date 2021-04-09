// import React from 'react'
import { ADD_TO_CART, GET_PRODUCT, REMOVE_TO_CART } from '../Store/Events'

const initialstate = {
    API_Data: "",
    cartData: [],
    updateData:[]
}
const Funtions = (state = initialstate, action) => {
    switch (action.type) {
        case GET_PRODUCT: {
            return ({
                ...state,
                API_Data: action.payload
            })
        }

        case ADD_TO_CART: {
            let arr = state.cartData
            arr.push(action.payload)
            return ({
                ...state,
                cartData: arr
            })
        }
        case REMOVE_TO_CART:
            {
                console.log(" REMOVE_TO_CART ",action.payload);
                let removedata=state.cartData;
                removedata.splice(action.payload,1)
                return({
                    ...state,
                    updateData:removedata
                })
            }
        default:
            {
                return state
            }
    }
}

export default Funtions
