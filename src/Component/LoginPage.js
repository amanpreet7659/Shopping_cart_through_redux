import { Alert, AlertTitle } from '@material-ui/lab'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login_user, RegisterUser } from '../Action/ProductFetchAction'
import ButtonHeader from './ButtonHeader'

const LoginPage = () => {
    const [show, setshow] = useState(false)
    const [err, seterr] = useState(false);
    const [register, setregister] = useState({
        UName: "", Pass: "", conPass: ""
    })
    const login = useSelector(state => state.API.alert)
    const dispatch = useDispatch();

    const handleRegister = () => {
        setshow(pre => !pre)
        console.log("Show ", show);

    }
    const handlelogin = () => {
        setshow(pre => !pre)
    }
    const handleInput = (e) => {
        e.target.name === "UName" ? register.UName = e.target.value : e.target.name === "pass" ? register.Pass = e.target.value : register.conPass = e.target.value
        console.log(register);
        if (register.Pass != e.target.value) {
            seterr(pre => !pre)
        }
    }
    const registerUser = () => {
        setshow(pre => !pre)
        dispatch(RegisterUser(register))
    }
    const handleLogin = () => {
        dispatch(login_user(register))
    }

    return (
        <div className="form_div">
            {login && <Alert className="Alert" severity="error">
                <strong>User Not Exist</strong>
            </Alert>}
            <div className="login_div">
                <div>
                    <input className="topButtons" onClick={handlelogin} type="button" value="Login User" />
                </div>
                <div>
                    <input className="topButtons" onClick={handleRegister} type="button" value="Register User" />
                </div>
            </div>
            <label className="lable1">Enter UserName </label>
            <br></br>
            <input onChange={handleInput} name="UName" className="loginInput" type="text" placeholder="Enter UserName" />
            <br></br>
            <label className="lable1">Enter Password</label>
            <br></br>
            <input onChange={handleInput} name="pass" className="loginInput" type="password" placeholder="Enter Password" />
            <br></br>
            {show && <> <label className="lable1">Re-Enter Password</label>
                <br></br>
                <input className="loginInput" name="conPass" onChange={handleInput} type="password" placeholder="Re-Enter Password" /><br></br>
                {err && <label style={{ color: "red" }}>password not matched</label>}
            </>
            }
            <br></br>
            {!show && <><button className="Loginbutton" onClick={handleLogin}>Login</button></>}
            {show && <> <button className="Loginbutton" onClick={registerUser}>Register</button></>}
        </div>
    )
}

export default LoginPage

{/* <label className="lable1">Enter UserName </label>
<br></br>
<input className="loginInput" type="text" placeholder="Enter UserName" />
<br></br>
<label className="lable1">Enter Password</label>
<br></br>
<input className="loginInput" type="password" placeholder="Enter Password" />
<br></br>
<button>Login</button> */}