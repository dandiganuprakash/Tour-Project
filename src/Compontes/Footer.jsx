
import React from 'react';
import '../Compontes/Navbar-style.css'
import { Link } from 'react-router-dom'

import logo from '../Assets/images-logo.jpeg'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className=" login f-img d-flex mt-3 p-4 ">
          <div className="img1">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor, sit amet <br></br> consectetur adipisicing elit. <br /> ipusum,natus!</p>

            <div className="icons ">
              <Link className="link-without p-2" to='/' ><i class="fa-solid fa-user"></i></Link>
              <Link className="link-without p-2" to='https://github.com/dandiganuprakash/' ><i class="fa-brands fa-github"></i></Link>
              <Link className="link-without p-2" to='https://www.instagram.com/' ><i class="fa-brands fa-instagram"></i></Link>
              <Link className="link-without p-2" to='https://www.linkedin.com/in/dandiganu-prakash-24230a280/' ><i class="fa-brands fa-linkedin"></i></Link>
            </div>
          </div>
          <div className="discover">
            <h4>Discover</h4>
            <ul>
              <li> <Link to='/' className="link-without-decoration" >Home</Link></li>
              <li><Link to='/Home' className="link-without-decoration">About</Link></li>
              <li> <Link to='/Tour' className="link-without-decoration">Tours</Link></li>
            </ul>

          </div>
          <div className="quicklink">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to='/' className="link-without-decoration">Gallery</Link></li>
              <li> <Link to='/Register' className="link-without-decoration">Register</Link></li>
              <li>  <Link to='/Login' className="link-without-decoration">Login</Link></li>
            </ul>
          </div>
          <div className="contact ">
            <h4>Contant</h4>

            <p><i class="fa-solid fa-location-dot"></i> <b>Address :</b> Bangalore ,Karanataka  </p>
            <p><i class="fa-regular fa-envelope"></i> <b>Email :</b>  prakash dandiganu@gmail.com</p>
            <p><i class="fa-solid fa-phone"></i>  <b>Phone :</b> +91 9573551675</p>

          </div>

        </div>
      </div>

      {/* Copy Right */}

      <div>
        <hr />
        <p className='text-center'>Created By <span className='orange'>Mr.Prakash Dandiagnu </span> | All Rights Reserved</p>
      </div>
    </div>

    
  )
}

export default Footer

