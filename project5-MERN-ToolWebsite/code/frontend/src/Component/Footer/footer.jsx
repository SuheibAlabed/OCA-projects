import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Container-footer">
      {" "}
      <div className="footerTop">
        <div className="Container-footerTop">
          <h1>Logo</h1>
        </div>
      </div>
      <div className="footermiddle">
        <div className="Container-footermiddle">
          <div className="footermiddle-item">
            <h5>Information</h5>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Menu</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footermiddle-item">
            <h5>Top Items</h5>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Menu</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footermiddle-item">
            <h5>Others</h5>
            <ul>
              <li>Checkout</li>
              <li>Cart</li>
              <li>Product</li>
              <li>Locations</li>
              <li>legal</li>
            </ul>
          </div>
          <div className="footermiddle-item">
            <h5>Social Media</h5>
            <ul>
              <li>Home</li>
              <ul className="Social-Icon">
                <li>
                  <FaFacebookSquare size={35} />
                </li>
                <li>
                  <AiFillInstagram size={35} />
                </li>
                <li>
                  <FaTwitterSquare size={35} />
                </li>
                <li>
                  <FaLinkedin size={35} />
                </li>
              </ul>

              <li>About Us</li>
              <li>Menu</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerbottom">
        <div className="Container-footerbottom">
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Cookie Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          <p className="copyRight">
            Copyright © 2020 .... All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
