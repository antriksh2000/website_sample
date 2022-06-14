import React from 'react'
import './Login.css'

export default function Login() {
  
    return (
    <div>

<div className='backg'>
    <div className='table'>
        <h2 className='WB'>Welcome Back!</h2>
        <h2 className='X'>X</h2>
        <h2 className='loginusername'>Rajveer Singh</h2>
        <input className='password' placeholder='  Enter your Password '/> 
        <button className='btn'> Continue</button>
        <button className='forget-password'>Forget Password </button>
        <h3 className='dha'>Dont have account? </h3>
        <button className='register'>Register Here</button>
    </div>
</div>

    </div>
  )
}
