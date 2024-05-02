import React from 'react'
import Navbar from './Navbar'
import HomeInput from './HomeInput'
import world from '../Assets/world.png'
import hero from '../Assets/hero-img01.jpg'
import herovideo from '../Assets/hero-video.mp4'
import hero2 from '../Assets/hero-img02.jpg'
import capimg from '../Assets/experience.png'
import gallery1 from '../Assets/gallery-01.jpg'
import gallery2 from '../Assets/gallery-02.jpg'
import gallery3 from '../Assets/gallery-03.jpg'
import gallery4 from '../Assets/gallery-04.jpg'
import gallery5 from '../Assets/gallery-05.jpg'
import gallery6 from '../Assets/gallery-06.jpg'
import gallery7 from '../Assets/gallery-07.jpg'
import gallery8 from '../Assets/gallery-08.jpg'
import ava1 from '../Assets/ava-1.jpg'
import tour from '../Assets/male-tourist.png'

import Slider from './Slider'

import Footer from './Footer'


const Home = () => {

  return (
    <div >
      <div className='container'>
        <div className='row '>
          <div className="col-md-6">
            <span className='know'>Know before you go</span>
            <img src={world} alt="" width={"50px"} />
            <p className='Travelling'>Travelling opens the doors <br></br>to creating <span className='mom'>memories</span></p>
            <p>Lorem ipsum dolor sit, amet consecteturbr
              adipisicing elit. Eos modi, eaque ipsa
              quisquam velit voluptatum fuga, deserunt blanditiisbr
              iure quasi omnis hic rationebr
              qui suscipit  culpabr
              nobis quia odio consectetur Lorem ipsum dolorkhadar absjkd dve
              sit amet consectetur adipisicing elit. Totam culpa
              nihil modi, eligendi similique,<br />
            </p>
          </div>
          <div className='Demo-img col-md-6'>
            <img src={hero} alt="" className='img1' id='pb' />
            <video controls autoPlay><source src={herovideo} className='video' /></video>
            <img src={hero2} alt="" className='water' id='water1' />
          </div>
        </div>
{/* Home input */}

        < div className="container-2 border-none border-2 ">
          <div className="location  ">
            <i className='style' class="fa-solid fa-location-dot"> <span className='loc m-2'>Location</span></i>
            <div>
              <input className='border-0' type='text' placeholder='Where are you ?' />
            </div>
          </div>
          <div className="location border-end border-2 ">
            <i class="fa-regular fa-compass"> <span className='loc m-2'>Distance</span></i>
            <div>
              <input className='border-0' type='number' placeholder='Distance k/m' />
            </div>
          </div>
          <div className="location ">
            <i class="fa-solid fa-user-group"><span className='loc m-2'>Max People</span></i>
            <div>
              <input className='border-0 ' type='number' placeholder='0' />
            </div>
          </div>
          <div className='m-4'>
            <i id='container-3' class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>


{/* Calculate weather */}


        <div className="section3 ">
          <div className="">
            <h6>What we serve</h6>
            <h4>We offer our<br></br> best services</h4>
          </div>
          <div className="container3">
            <i id='sunrise' class="fa-solid fa-cloud-sun"></i>
            <h4>Calculate weather</h4>
            <p>Lorem ipsum dolor<br></br>
              sit amet consectetur<br>
              </br> adipisicing elit. Exercitationem<br>
              </br> nisi voluptatum blanditiis <br></br>expedita,<br>
              </br>.</p>
          </div>
          <div className="container3">
            <i id='sunrise' class="fa-solid fa-route"></i>
            <h4>Best tour guide</h4>
            <p>Lorem ipsum dolor<br></br>
              sit amet consectetur<br>
              </br> adipisicing elit. Exercitationem<br>
              </br> nisi voluptatum blanditiis <br></br> expedita,<br>
              </br>.</p>
          </div>
          <div className="container3">
            <i id='sunrise' class="fa-solid fa-gears"></i>
            <h4>Customization</h4>
            <p>Lorem ipsum dolor<br></br>
              sit amet consectetur<br>
              </br> adipisicing elit. Exercitationem<br>
              </br> nisi voluptatum blanditiis<br></br> expedita,<br>
              </br>.</p>
          </div>
        </div>

        {/* bangok part-3 */}
        <div className="tours-bali">
          <p id='child-bali'>Explore</p>
          <h2>Our Featured Tours</h2>
        </div>




        {/* Experience - part-4 */}


        <div className="container1 d-flex">
          <div className="">
            <h4 className='expernice-1'>Experience</h4>
            <h3>With our all experience we will serve  you</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br></br>
              Perspiciatis sapiente quia rerum deserunt modi sint.</p>
            <div className='container-6 d-flex'>
              <div className="color-box1">
                <p id='number-12'>12k+</p>
                <h4 className='trips'>Successfull Trips</h4>
              </div>
              <div className="color-box1">
                <p id='number-13'>2k+</p>
                <h4 id='clients'>Regular clients</h4>
              </div>
              <div className="color-box1">
                <p id='number-14'>15</p>
                <h4 id='years'>Years experience</h4>
              </div>
            </div>

          </div>
          <div className="img-cap">
            <img src={capimg} alt="" />
          </div>
        </div>

        {/* visit tour gallery part-4 */}

        <div className="container7">
          <div className="gallery-img">
            <p id='gallery-ora'>gallery</p>
            <h4 id='visit'>visit our customers tour gallery</h4>
          </div>
          <div className="visit-img-2">
            <img className='img-3' src={gallery1} alt="" />
            <img className='img-3' src={gallery2} alt="" />
            <img className='img-3' src={gallery3} alt="" />
            <img className='img-3' src={gallery4} alt="" />
          </div>
          <div className="visit-img-3" >
            <img className='img-4' src={gallery5} alt="" />
            <img className='img-4' src={gallery6} alt="" />
            <img className='img-4' src={gallery7} alt="" />
            <img className='img-4' src={gallery8} alt="" />
          </div>
        </div>


        {/* Clients love  */}

        <div className="container8">
          <div className="clients">
            <p id='love'>Clients Love</p>
            <h4>What our Clients sya about us</h4>
          </div>
        </div>

        <Slider />
      </div>
      
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

      <Footer/>

    
  
    </div>


  )
}

export default Home
