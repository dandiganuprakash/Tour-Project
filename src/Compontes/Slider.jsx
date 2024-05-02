import React from 'react';
import Slider from 'react-slick';
import ava from '../Assets/ava-1.jpg'
import ava2 from '../Assets/ava-2.jpg'
import ava3 from '../Assets/ava-3.jpg'



const CarouselSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>

                <div className='d-flex'>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={ava3} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={ava} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={ava2} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className='d-flex'>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={ava3} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={ava} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={ava2} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='d-flex'>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={ava3} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={ava} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={ava2} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default CarouselSlider;




// import React from 'react';
// import Slider from 'react-slick';
// import ava from '../Assets/ava-1.jpg';
// import ava2 from '../Assets/ava-2.jpg';
// import ava3 from '../Assets/ava-3.jpg';

// const slidesData = [
//   {
//     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.",
//     image: ava,
//     name: "John Doe",
//     role: "Customer"
//   },
//   {
//     content: "Another slide content here.",
//     image: ava2,
//     name: "Jane Doe",
//     role: "Customer"
//   },
//   {
//     content: "Yet another slide content here.",
//     image: ava3,
//     name: "Jack Smith",
//     role: "Customer"
//   }
// ];

// const CarouselSlider = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 1500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };

//     return (
//         <Slider {...settings}>
//             {slidesData.map((slide, index) => (
//                 <div key={index}>
//                     <div className='d-flex'>
//                         <div className='m-4'>
//                             <p>{slide.content}</p>
//                             <div className='img-slider'>
//                                 <div className="sliker d-flex">
//                                     <img src={slide.image} alt={`Slide ${index}`} className='m-3' />
//                                     <div className="sliker">
//                                         <h3>{slide.name}</h3>
//                                         <p>{slide.role}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </Slider>
//     );
// };

// export default CarouselSlider;
