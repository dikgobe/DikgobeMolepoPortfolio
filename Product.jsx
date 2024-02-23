import React from "react";
import "./Product.css";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Product = () => {
  return (
    <>
      <div className="contact-container">
        <div className="outline">
          <h1
            style={{ color: "white", marginTop: "50px" }}
            className="contact-heading"
          >
            Contact Me
          </h1>

          <ul className="icons-list">
            <li>
              <FaEnvelope size={48} style={{ marginLeft: "100px" }} />
              <p style={{ marginRight: "1" }}>
                dikgobe.Molepo@younglings.africa
              </p>
            </li>
            <li>
              <FaLocationDot size={48} style={{ marginLeft: "100px" }} />
              <p>147,Rochester Road,Observatory 7925</p>
            </li>
            <li>
              <FaPhone size={48} />
              <p >0607482878</p>
            </li>
          </ul>

          <form className="contact-form">
            <div className="fullName-group">
              <label htmlFor="fullname" style={{ color: "white" }}>
                Full Name :
              </label>
              <input type="text" id="fullname" name="fullname" required></input>
            </div>

            <div className="Email-group">
              <label htmlFor="email" style={{ color: "white" }}>
                Email
              </label>
              <input type="email" id="email" name="email" required></input>
            </div>

            <div className="Message-group">
              <label htmlFor="message" style={{ color: "white" }}>
                Message
              </label>
              <input
                type="message"
                id="message"
                name="message"
                aria-rowspan={5}
                required
              ></input>
            </div>

            <div className="button-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
