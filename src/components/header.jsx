// src/header.js
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import smlogo from "../assets/bluicon.png"
import { FaBars, FaTimes } from "react-icons/fa"; // Using FaBars for a cleaner burger icon
import "./header.css"; // Optional for custom styles
import { FaFacebookSquare, FaInstagram, FaTwitter, FaSnapchatGhost, FaApple, FaPhone, FaMailBulk } from "react-icons/fa";
import 'animate.css';
import WOW from 'wow.js';


const Navbar = () => {

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


  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid px-md-5 d-flex   ">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            {/* Desktop logo - hidden on mobile */}
            <img 
              src={logo} 
              alt="Logo" 
              className="d-none d-lg-block img-fluid" 
              style={{ width: "200px" }}
            />
            {/* Mobile logo - shown only on mobile */}
            <img 
              src={smlogo} 
              alt="Mobile Logo" 
              className="d-lg-none img-fluid" 
              style={{ width: "40px" }} // Adjust mobile logo size as needed
            />
          </Link>

          {/* Menu Button for Mobile */}
          <button className="btn d-lg-none" onClick={toggleMenu}>
            <FaBars size={27} />
          </button>

          {/* Desktop Links */}
          <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
            <ul className="navbar-nav gap-3 ">
              <li className="nav-item ">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bussiness" className="nav-link">
                  Business Enquiry
                </Link>
              </li>
            </ul>
            
          </div>
          <div className="nav-icons d-lg-flex d-none gap-2 d-flex">
                              <a href="#"><FaTwitter /></a>
                              <a href="#"><FaInstagram /></a>
                              <a href="#"><FaFacebookSquare /></a>
                          </div>
        </div>
      </nav>

      {/* Mobile Menu for Small Screens */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <div className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
          <h5 className="mb-0">Menu</h5>
          <FaTimes size={20} onClick={toggleMenu} style={{ cursor: "pointer" }} />
        </div>
        <ul className="nav flex-column gap-3 p-4 animate__animated animate__fadeInUp wow animate__delay-1s">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bussiness" className="nav-link" onClick={toggleMenu}>
              Business Enquiry
            </Link>
          </li>
        </ul>
        
      </div>

      {/* Overlay to Close Menu */}
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

    </>

  );
};

export default Navbar;
