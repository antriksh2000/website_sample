import React from 'react'
import './register.css'
export default function Register() {
  return (
    <div>
<div className='backg'>
    <div className='reg-table'>
        <h2 className='heading_register'>Look's Like you are Coming<br></br> First Time?</h2>
        {/* <h2 className='X'>X</h2> */}
        <input className='username' placeholder='Enter Your Name'/> 
     <input className='register-password' placeholder='  Enter your Password '/> 
        <input className='re-register-password' placeholder='  Re-Enter your Password '/>  
        <button className='reg-btn'> Register</button>

<div className='loginhere'>
            <h3 className='dhar'>Already Have an Account? </h3>
        <button className='login'>Login Here</button>

</div>
    </div>
</div>

        
    </div>
  )
}
