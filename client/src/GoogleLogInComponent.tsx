import React from "react";
import { GoogleLogin } from '@react-oauth/google'

export default function GoogleLogInComponent() {
    return <div>
        
        <GoogleLogin
        onSuccess={res => console.log(res)}
        onError={() => {
            console.log('Login failed')
        }}
        />
    </div>
}