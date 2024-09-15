// src/pages/HomePage.js
import jumboImage from '../../assets/images/jumbo-right-image.svg';
import happy from '../../assets/images/Happy.png';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './AboutUs.css';

// Images

// import OurServiceImage from './images/sms-messages-icon.png'
import ourServiceImage from '../../assets/images/sms-messages-icon.png'
import ourServicePasscode from '../../assets/images/passcode-icon.png'
import ourServiceEmail from '../../assets/images/email-address-icon.png'
// import integrateImage from './images/Mask-group.png'
// import integrateImage from '../../assets/images/Mask-group.png'


const AboutUs = () => {


    return (
<div className="about-us-container">
      {/* Header Section */}
      <div className="header-section text-center py-5 container mt-5">
        <h1>About Us</h1>

        <p className="lead container">
        At Flare Messaging, we are dedicated to delivering top-tier Bulk SMS solutions designed to elevate business communications. Our innovative services empower businesses to connect with their customers quickly and efficiently, enhancing engagement and driving success. We understand the importance of timely and reliable messaging, and our solutions are crafted to ensure seamless, secure, and impactful communication. With a focus on affordability and user-friendliness, we provide businesses with the tools they need to stay ahead in a competitive market. Partner with us to transform your communication strategy and experience the difference of exceptional service and support."
        </p>
      </div>

      {/* Vision and Mission Section */}
      <div className="content-section container my-5">
        {/* Vision Section */}
        <div className="section">
          <h2>Our Vision</h2>
          <p>
            To become the global leader in Bulk SMS services by helping businesses seamlessly connect with their customers, transforming communication into a simple and powerful tool.
          </p>
        </div>

        {/* Mission Section */}
        <div className="section mt-5">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver reliable, affordable, and secure bulk SMS services that enhance customer engagement, enabling businesses to grow and thrive in a competitive market.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer text-center py-4">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </footer>
    </div>
    );
}

export default AboutUs;
