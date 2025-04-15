import React, { useEffect } from 'react';
import web from '../assets/programming.png'
import skill from '../assets/skill.png'
import bc from '../assets/bussiness.png'
import ecom from '../assets/ecom.png'
import soft from '../assets/soft.png'
import train from '../assets/training.png'
import { FaArrowRight } from 'react-icons/fa';
import './service.css'
import 'animate.css';
import WOW from 'wow.js';


  
 export const Services = () => {

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

    const servicedata = [
        {
            img: web,
            title: "WEB DEVELOPMENT",
            desc: 'We create responsive, scalable websites using modern technologies like HTML, CSS, JavaScript, and React. Our solutions ensure intuitive design, seamless performance.'
        },
        {
            img: bc,
            title: "BUSSINESS CONSULTING",
            desc: 'We provide strategic guidance to optimize operations, scale businesses, improve efficiency, and maximize profitability through tailored solutions, expert analysis, and innovative growth strategies.'
        },
        {
            img: ecom,
            title: "E-COMMERCE SOLUTION",
            desc: 'We help businesses succeed on Amazon (ATES & SPN), Flipkart, and Meesho with account setup, product optimization, advertising, fulfillment, and compliance management.'
        },
        {
            img: soft,
            title: "SOFTWARE & ERP SOLUTIONS",
            desc: 'Our tools streamline operations with inventory management, HR & payroll systems, business analytics, and custom ERP development, enhancing efficiency and decision-making.'
        },
        {
            img: train,
            title: "ORKSHOP & TRAINING",
            desc: 'We offer hands-on training for entrepreneurs, students, and professionals, focusing on business skills, digital marketing, e-commerce strategies, and technological advancements.'
        },
        {
            img: skill,
            title: "INTERNSHIPS & SKILL DEVOLOPMENT",
            desc: 'Our programs provide industry-relevant training, mentorship, real-world projects, and certifications, helping individuals develop essential skills for professional growth and employability.'
        },
    
    ]
   
    return (
        <>
        <div className='py-5 serv '>
            <h1 className='title text-white text-center py-5'>SERVICES</h1>
        </div>
        <div className='text-center container '>
            <div className='text-center animate__animated animate__fadeInDown wow '>
            <p className='line m-auto d-block my-2 pt-4'></p>
            <h2 className='py-3 title'>OUR<span className='zoom px-2 '>SERVICES</span> </h2>
            <h6 className='fw-bolder pb-4 px-md-0 px-3'>EMPOWERING GROWTH, SIMPLIFYING SUCCESS</h6>
        </div>
                <div className="row g-3 ">
                    {servicedata.map ((service, index) =>(<div key={index} className="col-lg-4 col-md-6  p-md-2 p-3">
                        <div  className='p-3 content rounded h-100  shadow'>
                        <div className="arrow ">
                                    <div className="arowlogo"><FaArrowRight /></div>
                                    <button className=' arow-btn rounded-0 border-1 btn btn-outline-warning'>view more</button>
                                </div>
                            <h1 className='p-0 px-md-4 animate__animated animate__fadeInBottomLeft wow'><img className='w-25' src={service.img} alt="image" /></h1>
                            <h5 className='pb-2  fw-bold animate__animated animate__fadeInUp wow'>{service.title}</h5>
                            <p  className='px-3 animate__animated animate__fadeInUp wow sdesc'>{service.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div></>
    )
}




