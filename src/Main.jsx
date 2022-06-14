import React from 'react'
import './main.css'
export default function Main() {
  return (
    <div >
    
        <div className='main-page'>
        <h1 className='main-txt'>Enter your Email to get started</h1>
        <input className='main-password' placeholder='  Enter your Email '/> 
        <button className='main-btn'> Get Started</button>
        <div className='rectangle'>
            <h1 className='rectangle-txt'>what we do?</h1>
            <img src="../Screenshot\ \(1113\).png"  />
        </div>
</div>
<div className='benifitsdiv'>       
   <h1 className='benifits'>Benifits</h1>
   <h1 className='osu'> Of signing Up</h1>

    <div className='divpapa'>
      <div className='divs'>
        <h1 className='point'>Point 1</h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      <div className='divs' >      
        <h1 className='point'>Point 1</h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p></div>
      <div className='divs'>    
          <h1 className='point'>Point 1</h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p></div>
    </div>

</div>

  <div >        
    <h1 className='Who'>Who</h1>
    <h1 className='wr'> We are?</h1>
    {/* <p className='p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> */}

</div>

  <div className='divwho'>

      <div className='divs'>
        <h1 className='point'>Esther Howard</h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      <div className='divp' >      
        <h1 className='point'>Leslie Alexander</h1>

        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p></div>
      <div className='divp'>    
          <h1 className='point'>Jenny Wilson</h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p></div>
    </div>
    



{/* Contact Page */}
<div className='contact-page'>
<div className='backg'>
    <div className='reg-table'>
        <h2 className='heading_register'>Contact Us</h2>
        {/* <h2 className='X'>X</h2> */}
        <input className='firstname' placeholder='Enter Your First Name'/> 
        <input className='lastname' placeholder='Enter Your last Name'/> 
        <input className='phone' placeholder='Enter Your phone Name'/> <br />
<select name="" id=""placeholder='Select state' className='selectsts'>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
<textarea name="" id="" cols="30" rows="10" placeholder='Enter your message' className='message'></textarea>
        <button className='btnsend'> Send</button>

</div>
</div>
</div>
        
    </div>


  )
}
