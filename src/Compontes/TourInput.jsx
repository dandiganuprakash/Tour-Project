import React from 'react'
import '../Compontes/Navbar-style.css'


const TourInput = () => {
    return (
        <div>
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
        </div>
    )
}

export default TourInput
