import React from 'react'
import './footer.css'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaSnapchatGhost, FaApple, FaPhone, FaMailBulk } from "react-icons/fa";
import Logo from '../assets/logo.png'

export default function Footer() {
    return (
        <>
            <div className="row total pt-md-0 pt-5 m-4">
                <div className=" col-md-4 col-lg-3  p-2 px-4">
                    <div className="logo"><h1 className=''><img className='w-50' src={Logo} alt="logo" /></h1></div>
                    <p> we help businesses and entrepreneurs grow through expert consulting, digital transformation, and innovative technology solutions. Whether you're a startup looking for guidance or an established company seeking operational efficiency, our tailored solutions can elevate your business to the next level.
                    </p>
                    <h5 className='text-orange fw-bold '>SHARE WITH US</h5>
                    <div className="icons">
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaApple /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebookSquare /></a>
                        <a href="#"><FaSnapchatGhost /></a>
                    </div>
                </div>
                <div className=" col-md-4 col-lg-2  p-3">
                    <h5 className='text-orange '>OUR SERVICES</h5>
                    <ul type="none" className='p-0 flink '>
                        <li><a href="#">E-commerce Marketing</a></li>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Graphic Designing & Videos</a></li>
                        <li><a href="#">Product Photography</a></li>
                        <li><a href="#">Nykaa</a></li>
                        <li><a href="#">Jio Mart</a></li>
                        <li><a href="#">Etsy</a></li>
                        <li><a href="#">Walmart</a></li>
                    </ul>
                </div>
                <div className=" col-md-4 col-lg-2 p-3">
                    <h5 className='text-orange'>QUICK LINKS</h5>
                    <ul type="none" className='p-0 flink '>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Site Map</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blog</a></li>

                    </ul>
                </div>
                <div className="  col-md-4 col-lg-3  flink p-3 px-4">
                    <h5 className='text-orange '>CONTACT US</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur distinctio ab laudantium veritatis commodi.</p>
                    <div className='pb-2'><a href="#"><FaPhone style={{ color:"black", marginRight :"10px", fontSize: "17px" }} /> 1234567899</a></div>
                    <div ><a href="#"><FaMailBulk style={{ color:"black", marginRight :"10px", fontSize: "17px" }} />Care@gmail.com</a></div>
                </div>
                <div className="  col-md-4 col-lg-2   p-3">
                    <h5 className='text-orange '>INFORMATION</h5>
                    <ul type="none" className='p-0 flink '>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Event</a></li>
                        <li><a href="#">client</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}