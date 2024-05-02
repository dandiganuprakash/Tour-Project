import React from 'react'
import '../Compontes/Navbar-style.css'

import Tourimg from '../Assets/tour.jpg'
import TourInput from './TourInput'
import tour from '../Assets/male-tourist.png'
import Footer from './Footer'


const Tour = () => {
  return (

    <>
      <div class="image-container">

        <img src={Tourimg} alt="Tour Image" />
        <div class="color-overlay"></div>
        <div className="text-container">
          <h2>ALL TOURS</h2>
        </div>
      </div>

      <div>
        <TourInput />
      </div>

      {/* Bangok Images api */}
      <div className="bangok">
        <div className="child-bangok">
          <h4>Bangok</h4>
        </div>
      </div>

{/* Subscibe now for usefull */}

      <div className="banner  d-flex  mt-5">
        <div className="banner1">
          <h3 id='for'>Subscribe now for usefull <br></br> travelling information</h3>
          <div className='bg-light one'>
            <input type="text" placeholder='Enter your email' className='input' />
            <button>Subscribe</button>
          </div><br></br>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quas quia sapiente ipsam eum, deserunt obcaecat. </p>
        </div>
        <div className="banner2">
          <img src={tour} alt="" />
        </div>
      </div>

      <div>
        <Footer/>
      </div>

    </>

  )
}

export default Tour
