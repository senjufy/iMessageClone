import { Button } from '@material-ui/core';
import React from 'react'
import {auth, provider} from "./firebase"
import "./Login.css";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://www.pngitem.com/pimgs/m/139-1397202_imessage-iphone-text-messaging-transparent-background-bubble-message.png" alt=""/>
            <h1>iMessage</h1>
            </div>
            
            <Button onClick={signIn}>Sign In</Button>
        </div>

    

    )
}

export default Login
