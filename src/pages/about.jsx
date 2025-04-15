import React from 'react';
import { useEffect } from 'react';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wow.js';
import image1 from "../assets/abt3.jpg"
import "./about.css"

const About = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animate__animated',
                offset: 0,
                mobile: true,
                live: true,
            });
            wow.init();
        }
    }, []);

    return (
        <><section className="container about_section text-justify">
            <div className="row text-md-start text-center  align-items-center">
                {/* Left Column - Heading */}
                <div className="col-md-6 px-4 px-md-0 wow animate_animated animate__slideInLeft">
                    <h2 className=" fw-bolder">
                        ABOUT <span className=" blu">TRAGARD SOLUTIONS</span>
                    </h2>
                    <h5 className='mb-4'>Your Growth Partner in Business & E-commerce </h5>
                    <div className="about-content ">
                        <p className="mb-4 fw-normal">
                            Tragard, an E-commerce, digital marketing, and website design and
                            development service provider based in Indore. We have set a benchmark
                            and mastered our skills. We are diligently assisting with website design
                            and development, e-commerce marketing, social media marketing, SEO, PPC,
                            SEM, content marketing, video advertising, branding solutions, and more.
                        </p>

                        <p className=" text-muted fw-normal mb-4">
                            Founded under TRAGARD PRIVATE LIMITED, TRAGARD SOLUTIONS is a business consulting and e-commerce solutions
                            provider based in Coimbatore, India. Our mission is to empower startups, SMEs, and enterprises
                            with cutting-edge solutions,   enabling them to navigate the evolving digital landscape efficiently.

                        </p>


                    </div>
                </div>

                {/* Right Column - Corrected Classes */}
                <div className="col-md-6 wow animate__slideInDown">
                    <div className="about-content">
                        <img className='w-100 m-auto d-flex about_img' src={image1} alt="" />
                    </div>
                </div>
            </div>
        </section><section className='abtsec2 py-3 text-white'>
                <div className="container wow animate__fadeInRight">
                    <div className="row text-center mt-5 ">
                        <h2 className='fw-bold'> EMPOWERING GROWTH AND SIMPLIFYING  <span className="zoom D-BLOCK">SUCCESS</span></h2>
                    </div>
                    <div className="row text-center py-3 ">
                        <p>We also provide all services related to e-commerce marketing, digital marketing and web development to boost your brand's online presence.</p>
                    </div>
                </div>
                {/* Corrected Animation Classes */}
                <div className="container  text-justify wow animate__fadeInDown">
                    <div className="row pt-4">
                        <div className="col-md-6 px-4 px-md-4 col-lg-6">
                            <div className="row"><h5 className='success_about'>Our Vision</h5></div>
                            <div className="row">
                                <ul className='abt_ul'>
                                    <li>To leverage our deep expertise and understanding of the business domain and creating solutions for our clients' business needs.</li>
                                    <li>To help clients with brand building and creating a positive and a strong relationship with their audience.</li>
                                    <li>To be the go-to business solutions and e-commerce consulting firm that helps entrepreneurs and businesses thrive through innovation, technology, and strategic expertise.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 px-4 px-md-4 ps-4 col-lg-6">
                            <div className="row"><h5 className='success_about'>Our Mision</h5></div>
                            <div className="row">
                                <ul className='abt_ul'>
                                    <li>To provide expert consulting and customized business strategies. </li>
                                    <li>To help businesses succeed in the e-commerce ecosystem with platforms like Amazon, Flipkart, and Meesho.</li>
                                    <li>To offer digital transformation solutions, including ERP, inventory, HR, and payroll software</li>
                                    <li>To create a learning ecosystem with workshops, training programs, and internship opportunities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-6 px-4 px-md-4 col-lg-6">
                            <div className="row"><h5 className='success_about'>Our Values</h5></div>
                            <div className="row">
                                <ul className='abt_ul'>
                                    <li>Deliver excellent services to our clients.</li>
                                    <li>Transparency and commitment towards work and getting the job done in the best possible way.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 px-4 px-md-4 col-lg-6">
                            <div className="row"><h5 className='success_about'>Our Expertise</h5></div>
                            <div className="row">
                                <ul className='abt_ul'>
                                    <li>With a team of experienced professionals and strategic partnerships with industry leaders,</li>
                                    <li>we offer a holistic approach to business success. From startup mentoring to software integration,</li>
                                    <li>our goal is to make your business operations smoother, smarter, and more profitable.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    );
};

export default About;