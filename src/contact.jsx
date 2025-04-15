import React from "react";
import "./contact.css";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact">
      <div className="content-all py-md-5 py-2">
        <h3 className="fw-bold text-center pt-md-5 pt-0">
          FROM A SIMPLE QUERY TO MANY COMPLEX QUESTION REGARDING YOUR NEXT
          PROJECT , WE ARE HELP TO YOU
        </h3>
        <h2 className=" fw-bold text-md-start text-center py-4">OUR COIAMBATORE <span className="zoom">LOCATION</span></h2>

        {/* Location Map */}

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.976040369004!2d76.94060194635139!3d11.040423138874397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859001b8f3695%3A0x1ff98c66fb192fe2!2sTRAGARD%20FOODS%20LLP!5e0!3m2!1sen!2sin!4v1742537890930!5m2!1sen!2sin"
            width="1200"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tragard Location"
          ></iframe>
        </div>

        {/* Contact-Details */}

        <div className="contact-details py-4">
          {/* Left-Side-Content */}

          <div className="left-content p-2">
            <h2 className="fw-bold text-md-start text-center">
              CONTACT <span className="zoom"> DETAILS</span>
            </h2>

            {/* Contact-Numbers */}

            <div className="contact-numbers">
              <div className="icon">
                <FaPhone />
                <h4>
                  Business Enquiry :{" "}
                  <a
                    href="tel:+911234567890"
                    style={{ textDecoration: "none", color: "#333333" }}
                    className="hover"
                    target="_blank"
                  >
                    +91 1234 567 890
                  </a>
                </h4>
              </div>

              <h4 className="move-left">
                Human Resource :{" "}
                <a
                  href="tel:+911234567890"
                  style={{ textDecoration: "none", color: "#333333" }}
                  className="hover"
                  target="_blank"
                >
                  +91 1234 567 890
                </a>
              </h4>
            </div>

            <span className="lineee">
              {" "}
            </span>

            {/* Email-Details */}

            <div className="emails">
              <div className="icon">
                <MdEmail />
                <h3>
                  <a
                    href="https://www.tragard.com"
                    style={{ textDecoration: "none", color: "#333333" }}
                    className="hover"
                    target="_blank"
                  >
                    tragard.in (For Seller enquiry)
                  </a>
                </h3>
              </div>

              <h3 className="move-left">
                <a
                  href="mailto:abc@gmail.com"
                  style={{ textDecoration: "none", color: "#333333" }}
                  className="hover"
                  target="_blank"
                >
                  abc@gmail.com
                </a>
              </h3>

              <h3 className="move-left">
                <a
                  href="mailto:abc@gmail.com"
                  style={{ textDecoration: "none", color: "#333333" }}
                  className="hover"
                  target="_blank"
                >
                  abc@gmail.com
                </a>
              </h3>
            </div>

            <span className="lineee">
             {" "}
            </span>

            <div className="icon">
              <FaLocationArrow />
              <h3 style={{ color: "#333333", fontSize: "17px" }}>
                22 , Pricol Colony , Kavundampalayam ,
              </h3>
            </div>
            <h3
              style={{
                margin: "8px 0px 0px 25px",
                color: "#333333",
                fontSize: "17px",
              }}
            >
              {" "}
              Coiambatore - 641030
            </h3>
          </div>

          {/* FormContent */}

          <div className="rightSide p-2 py-4">
            <form id="contact-form" method="POST">
              <h2 className="text-center fw-bold d-md-none d-block">Get In <span className="zoom">Touch</span></h2>
              <label htmlFor="name">Full Name</label>
              <input name="name" placeholder="Enter Full Name..." type="text" />
              <label htmlFor="email">Email</label>
              <input name="email" placeholder="Enter Email..." type="text" />
              <label htmlFor="phone">Phone no</label>
              <input
                name="phone"
                placeholder="Enter Phone no..."
                type="tel"
                pattern="[0-9]{10}"
              />
              <label htmlFor="message">Message</label>
              <textarea
                rows="6"
                name="message"
                placeholder="Enter Message..."
                required
              ></textarea>

              <button className="btn sub mt-3" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
