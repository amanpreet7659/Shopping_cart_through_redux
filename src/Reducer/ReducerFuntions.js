// import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import { ADD_TO_CART, BUY_NOW, CHECK_OUT, GET_PRODUCT, LOGIN_USER, LOGOUT, REGISTER_DATA, REMOVE_TO_CART } from '../Store/Events'

const initialstate = {
    API_Data: "",
    cartData: [],
    updateData: [],
    login: false,
    alert: "",
    login_user: "",
    buyData: ""
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
            // debugger
            let local = JSON.parse(localStorage.getItem('cart'))
            let arr = []
            if(local)
            {
                local.push(action.payload)
                console.log(local);
                localStorage.setItem("cart", JSON.stringify(local))
            }
            else
            {
                arr.push(action.payload)
                localStorage.setItem("cart", JSON.stringify(arr))                
            }
            // debugger
            return ({
                ...state,
                cartData: arr
            })
        }
        case REMOVE_TO_CART:
            {
                console.log(" REMOVE_TO_CART ", action.payload);
                let removedata = state.cartData;
                // console.log("cartData ", state.c);
                removedata.splice(action.payload, 1)
                return ({
                    ...state,
                    cartData: removedata
                })
            }
        case BUY_NOW:
            {
                let data = state.cartData;
                console.log("dataaaaaa ", data[action.payload]);

                return ({
                    ...state,
                    buyData: data[action.payload]
                })
            }
        case REGISTER_DATA: {
            // debugger
            let data = action.payload;
            let arr1 = []
            let arr = JSON.parse(localStorage.getItem("Register_Data"));
            if (arr) {
                // debugger
                arr.push(data)
                localStorage.setItem("Register_Data", JSON.stringify(arr))
                // state.login = false
            }
            else {
                // debugger
                arr1.push(data)
                localStorage.setItem("Register_Data", JSON.stringify(arr1))
                // state.login = false
            }
        }
        case LOGIN_USER:
            {
                let data = action.payload.data
                // debugger
                console.log("data ", data);
                localStorage.setItem("user", JSON.stringify(data))
                let local = JSON.parse(localStorage.getItem("Register_Data"))
                let token = JSON.parse(localStorage.getItem("Token"))
                // {
                //     local && local.map((i) => {
                //         if (i.UName === data.UName && i.Pass === data.Pass) {
                //             debugger
                //             localStorage.setItem("Token", JSON.stringify(true));
                //             // if (token === true) {
                //                 state.login = true
                //                 state.login_user = i
                //             // }
                //         }
                //         else {
                //             state.alert = true
                //         }
                //     })
                // }
                console.log((local));
                local.map((i) => {
                    if (i.UName === data.UName && i.Pass === data.Pass) {
                        debugger
                        localStorage.setItem("Token", JSON.stringify(true));
                        state.login = true
                        state.login_user = i
                        window.location.href = "/"
                        // window.open('/ProductPage')
                        debugger
                    }
                })
            }
        case CHECK_OUT:
            {

                return ({ ...state, cartData: [] })
            }
        case LOGOUT:
            {
                localStorage.setItem("Token", false)
                return ({
                    type: LOGOUT,
                    ...state,
                })
            }
        default:
            {
                return state
            }
    }
}

export default Funtions
