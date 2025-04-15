// src/Form.js
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import '../App.css'
import img1 from "../assets/b_img.png"
import 'animate.css';
import WOW from 'wow.js';

 const Bussiness = () => {

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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    contactNumber: "",
    address: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    emailjs
      .send(
        "service_clyx76j", // Replace with your service ID
        "template_wyyyh7e", // Replace with your template ID
        formData,
        "2PukEvdloEsESL-0z" // Replace with your public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          console.error("Failed to send email. Error:", err);
        }
      );
  };

  return (

    <div className=" p-5 bform">
      <div className="row">
      <h2 className="fw-bolder text-dark animate__animated animate__fadeInDown wow text-center py-3">COMPLETE THE FORM TO HELP US TAILER A CUSTOM QUOTE FOR YOU</h2>
      <h2 className="fw-bolder d-lg-none d-block text-center">BOOK YOUR <span className="zoom">SLOT!</span></h2>
      <div className="col-lg-6 ">
    <img className="w-100 p-5 mt-4 d-none d-lg-block animate__animated animate__fadeInLeft" src={img1} alt="" />
      </div>
      <div className="col-lg-6">
        <div className="row ">
          <div className="col-md-6 w-100">
            <div className="p-md-3 py-md-5  animate__animated animate__fadeInRight wow  rounded">
              <form  onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">First Name*</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name*</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Business Email*</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Select Service*</label>
                    <select
                      name="service"
                      className="form-select"
                      required
                      onChange={handleChange}
                    >
                      <option value=""> Select</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Development">Development</option>
                      <option value="Marketing">Marketing</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Contact Number*</label>
                    <input
                      type="text"
                      name="contactNumber"
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    rows="2"
                    className="form-control"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn  btn-primary btn-lg">
                   Consult Now!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Bussiness

