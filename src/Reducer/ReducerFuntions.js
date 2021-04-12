// import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import { ADD_TO_CART, CHECK_OUT, GET_PRODUCT, LOGIN_USER, REGISTER_DATA, REMOVE_TO_CART } from '../Store/Events'

const initialstate = {
    API_Data: "",
    cartData: [],
    updateData: [],
    login: false,
    alert:"",
    login_user:"",
    buyData:""
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
                console.log(" REMOVE_TO_CART ", action.payload);
                let removedata = state.cartData;
                // console.log("cartData ", state.c);
                removedata.splice(action.payload, 1)
                return ({
                    ...state,
                    cartData: removedata
                })
            }
        case CHECK_OUT:
            {
                let data = state.cartData;
                console.log("dataaaaaa ", data[action.payload]);

                return ({
                    ...state,
                    buyData:data[action.payload]
                })
            }
        case REGISTER_DATA: {
            let data = action.payload;
            let arr1 = []
            let arr = JSON.parse(localStorage.getItem("Register_Data"));
            if (arr) {
                arr.push(data)
                localStorage.setItem("Register_Data", JSON.stringify(arr))
                state.login = false
            }
            else {
                arr1.push(data)
                localStorage.setItem("Register_Data", JSON.stringify(arr1))
                state.login = false
            }
        }
        case LOGIN_USER:
            {
                let data = action.payload
                let local = JSON.parse(localStorage.getItem("Register_Data"))
                {
                    local && local.map((i) => {
                        if (i.UName === data.UName && i.Pass === data.Pass) {
                            console.log("Exist");
                            state.login = true
                            state.login_user=i
                        }
                        else {
                            state.alert=true
                        }
                    })
                }
            }
        default:
            {
                return state
            }
    }
}

export default Funtions
