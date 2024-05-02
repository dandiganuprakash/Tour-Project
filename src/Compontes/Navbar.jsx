import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/images-logo.jpeg'
import '../Compontes/Navbar-style.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img id="goa-logo" src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Tour">Tour</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
        </li>
        <li className="nav-reg">
          <Link className="nav-link active" aria-current="page" to="/Register">Register</Link>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
