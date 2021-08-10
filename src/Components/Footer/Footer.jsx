import React from "react";
import * as FaIcons from "react-icons/fa";
import src from "../../Images/saint-logo.svg";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--wrapper">
        <div className="row--one">
          <FaIcons.FaFacebookF />
          <FaIcons.FaTwitter />
          <FaIcons.FaInstagram />
          <FaIcons.FaYoutube />
        </div>
        <hr className='footer--border' />
        <div className="row--two">
          <h3>Contact</h3>
          <h3>FAQ</h3>
          <h3>Terms & Conditions</h3>
          <h3>214-123-4567</h3>
          <h3>contact@saintgeorge</h3>
        </div>
        
        <div className="row--three">
          <h3>Sign Up For News & Promotions</h3>
          <div className="footer--input">
            <input type="text" placeholder="Enter Your Email" />
            <button>&#8594;</button>
          </div>
          <div className='footer--terms'>
            <p>
              By signing up, you confirm you are over 16 years of age and you
              want to receive Saint George emails. Please see our Terms &
              Conditions and Privacy Policy for more details.
            </p>
          </div>
          <div className="row--four">
            <img src={src} alt="Saint George Logo" className="logo" />
            <span>COPYRIGHT 2021 Saint George. ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
