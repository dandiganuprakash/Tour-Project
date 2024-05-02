import React from 'react'
import '../Compontes/Navbar-style.css'
import register from '../Assets/register.png'
import user from '../Assets/user.png'

import Footer from './Footer'


const Register = () => {
  return (
    <>
      <div className='Register-parent  '>
        <div className="child-reg">
          <img className='frist-img' src={register} alt="" />
        </div>
        <div className="form">
          <div>
            <img id='img-user' src={user} alt="" />
          </div>
          <h4 id='tag'>Regsiter</h4>
          <input className='email-1' type="name" placeholder='User Name' />
          <input className='email-1' type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>Create Account</button>
          <p>Don't have an <br></br> account ?  <span>Register</span> </p>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default Register


