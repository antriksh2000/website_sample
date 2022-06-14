import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Register from './Register' 
export default function Login() {
  
    return (
    <div>

<div className='backg'>
    <div className='table'>
        <h2 className='WB'>Welcome Back!</h2>
        <h2 className='X'>X</h2>
        <h2 className='loginusername'>Rajveer Singh</h2>
        <input className='password' placeholder='  Enter your Password '/> 
        <Link className='btn' to="./main"> Continue</Link>
        <button className='forget-password'>Forget Password </button>
        <h3 className='dha'>Dont have account? </h3>
        <Link className='register' to="./register" >Register Here</Link>
        
    </div>
</div>

    </div>
  )
}
