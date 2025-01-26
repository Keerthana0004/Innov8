import React from 'react'
import './CSS/Signup.css'
const Signup = () => {
  return (
    <div className='signup'> 
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className='signup-fields'>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="Signup-login">Already have an account?</p>
        <div className="signup-agree">
          <input type="checkbox" name=''id=''/>
        </div>
      </div>
    </div>
  )
}

export default Signup;