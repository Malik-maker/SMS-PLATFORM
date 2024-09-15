// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import MalzookLogo from '../../assets/images/Malzook.png';





const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Left Section: Copyright */}
            <div className="col-md-4 text-start">
              <p>&copy; {new Date().getFullYear()} Pretium Hub</p>
            </div>
  
            {/* Center Section: Social Media Icons */}
            <div className="col-md-4 text-center social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
  
            {/* Right Section: Privacy & Terms Links */}
            <div className="col-md-4 text-end">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;