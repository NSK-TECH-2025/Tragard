import React, { useEffect } from 'react'
import './home.css'
import c1 from '../assets/1.png'
import c2 from '../assets/2.png'
import c3 from '../assets/3.png'
import c4 from '../assets/4.png'
import { Testomonial } from '../components/testomonial'
import 'animate.css';
import WOW from 'wow.js';
import Slide from '../components/h_slide'



 const Home = () => {

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

  const cards = [
    {
      img: c1,
      title: 'INNOVATIVE',
      content: 'Our dynamic professionals always stay motivated to help clients with the best strategies and innovative and unique ideas to ace business growth.'
    },
    {
      img: c2,
      title: "CREATIVE",
      content: "We work on the policy to INNOVATE. Our team is constantly working on creating new strategies to help clients' businesses grow and stand out."
    },
    {
      img: c3,
      title: "PRODUCTIVE",
      content: "We have a big team of qualified and skilled professionals whose expertise and knowledge will bring prominent and positive results to your business."
    },
    {
      img: c4,
      title: "RESPONSIVE",
      content: "Our team is dedicatedly working to resolving issues and queries. We work on the policy to get a solution to our client's problems within 2 working days."
    }
  ]
  return (
    <>
    <section className='m-0'>
      <Slide />
    </section>
    <section className='why text-black'>
      <div className='container p-0'>
        <div className="animate__animated animate__fadeInDown wow text-center  px-md-5 p-4">
          <p className='line m-auto d-block my-2'></p>
          <h2 className='py-3 title'>WHY<span className='px-2 zoom '>TRAGARD</span> </h2>
          <h6 className='fw-bolder pb-4'>EMPOWERING GROWTH, SIMPLIFYING SUCCESS</h6>
          <p>We offer <a href="#"><strong>e-commerce, digital marketing,</strong></a> and website design and development services. We are
            the one-stop solution for all your business needs. We help your business flourish and tackle the fierce market
            competition with our years of expertise and a team of highly qualified professionals. We specialize in Amazon
            and Flipkart account management (All services), Digital Marketing (Social Media Marketing, PPC, <a href="#"><strong>SEO</strong></a>, Content
            Marketing, Video Marketing, Display ads), and <a href="#"><strong>website development</strong></a> (Shopify, UX/UI, WordPress).</p>
          <p className='fst-italic fw-bold'>“ We have solutions for all your online business requirements”</p>
        </div>
      </div>

      <div className='mx-md-4 px-md-4'>
        <div className="row ">
          {cards.map((card, index) => (
            <div className="col-lg-3 col-md-6 ">
              <div key={index} className="text-center p-md-4 px-md-0 px-4">
                <h1 className='p-md-3  animate__animated animate__fadeInBottomLeft wow'><img className='cimg img-fluid ' src={card.img} alt="" /></h1>
                <div className=' animate__animated animate__fadeInUp wow'>
                  <h5 className='fw-bold text-orange py-md-2'>{card.title}</h5>
                  <p className='text-justify px-2'>{card.content}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
      <section className='bg-black text-white'>
        <div className='text-center p-md-5  py-5 p-4'>
          <p className='line m-auto d-block my-2'></p>
          <h2 className='py-3 title  animate__animated animate__fadeInDown wow'>OUR LEVEL OF<span className='zoom px-2'>BRILLIANCE</span> </h2>
          <div className='px-md-5 '>
            <p className='px-md-5 p-4 animate__animated animate__fadeInDown wow'>Professional & Outstanding ideas of our passionate team makes us unique in every sense. Our Services. Our services are delivered by our team with years of experience are passionate about developing business.</p>
          </div>
          <div className="row py-4 gap-4 gap-md-0">
            <div className="col-lg-3 col-md-6 text-warning"><h5 className='resp-text'>BUSSINESS CONSULTING</h5></div>
            <div className="col-lg-3 col-md-6 text-primary"><h5 className='resp-text'>SOFTWARE SOLUTIONS</h5></div>
            <div className="col-lg-3 col-md-6  mt-0 text-info"><h5 className='resp-text '>ECOMMERCE SOLUTIONS</h5></div>
            <div className="col-lg-3 col-md-6  mt-0 text-danger"><h5 className='resp-text'>WORKSHOP & TRAINING</h5></div>
          </div>
        </div>
      </section>
      <section className='container animate_ animated animate__jello wow animate__slideInRight my-5'>
        <Testomonial />
      </section>
    </>
  )
}
export default Home
