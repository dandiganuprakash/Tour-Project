import React from 'react'
import '../Compontes/Navbar-style.css'
import register from '../Assets/login.png'
import user from '../Assets/user.png'

import Footer from './Footer'

const Login = () => {
  return (
    <div>

      <div className='Register-parent  '>
        <div className="child-reg">
          <img className='frist-img' src={register} alt="" />
        </div>
        <div className="form">
          <div>
            <img id='img-user' src={user} alt="" />
          </div>
          <h4 id='tag'>Login</h4>
          <input className='email-1' type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>Login</button>
          <p>Already have an  <br></br> account ?  <span>Login</span> </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
