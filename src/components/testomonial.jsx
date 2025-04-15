import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cLogo from '../assets/jjjjj.png'
import { useEffect } from 'react';
import 'animate.css';
import WOW from 'wow.js';
import '../pages/home.css'

const feeds = [
    { msg: "The website is visually appealing and easy to navigate.Impressive design with a modern touch! The animations and transitions are smooth. However, a better contrast between text and background would improve readability The color scheme is professional, and the layout is intuitive. Great work on user-friendliness!", person: "Schwarzkopf" },
    { msg: "I love the responsiveness of the website. It looks great on both mobile and desktop. However, some pages take longer to load. Can we optimize performance Impressive design with a modern touch! The animations and transitions are smooth. However, a better contrast between text and background would improve readability", person: "Canon" },
    { msg: "kThe design aligns well with our brand identity. The typography and imagery are excellent. Impressive design with a modern touch! The animations and transitions are smooth. However, a better contrast between text and background would improve readability Can we add more interactive elements to enhance engagement?", person: "Tommy Hilfiger" },
    { msg: "The UI/UX is well thought out, making navigation seamless. Impressive design with a modern touch! The animations and transitions are smooth. However, a better contrast between text and background would improve readability The call-to-action buttons are prominent. A few minor tweaks in spacing would make it even better.", person: "Bosch" },
    { msg: "Impressive design with a modern touch! Impressive design with a modern touch! The animations and transitions are smooth. However, a better contrast between text and background would improve readability The animations and transitions are smooth. However, a better contrast between text and background would improve readability", person: "Omron" },
];
export const Testomonial = () => {
    useEffect(() => {
        // Ensure WOW runs on the client side
        if (typeof window !== 'undefined') {
          const wow = new WOW({
            boxClass: 'wow', // default class name for wow elements
            animateClass: 'animate__animated', // default animate.css class
            offset: 0, // distance to start the animation
            mobile: true, // trigger animations on mobile
            live: true, // check for new elements on the page
          });
          wow.init();
        }
      }, []);  

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,

    };

    return (
        <><div className='testi  p-4 py- p-md-5'><div className='  d-flex justify-content-center'>
            <div className='d-flex testi_cont align-items-center'><span className='lines'></span>
                <div><img className='testo w-75 mx-auto d-flex ' src={cLogo} alt="" /></div>
                <span className='lines'></span></div>
        </div>
            <div className=" mx-auto   p-md-5 testi-cont">
                <Slider {...settings} >
                    {feeds.map((feed, index) => (
                        <div key={index} className="p-md-4  text-dark">
                            <div className=" text-center text-white animate__animated animate__fadeInUp wow py-5  py-md-0  px-md-5">
                                <p className='fw-bolder'>{feed.msg}</p>
                                <p className='text-end fw-bolder'> -{feed.person}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div></>
    )
}
