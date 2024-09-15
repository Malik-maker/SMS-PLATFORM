// src/pages/HomePage.js
import jumboImage from '../../assets/images/jumbo-right-image.svg';
import happy from '../../assets/images/Happy.png';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css';

// Images

// import OurServiceImage from './images/sms-messages-icon.png'
import ourServiceImage from '../../assets/images/sms-messages-icon.png'
import ourServicePasscode from '../../assets/images/passcode-icon.png'
import ourServiceEmail from '../../assets/images/email-address-icon.png'
// import integrateImage from './images/Mask-group.png'
// import integrateImage from '../../assets/images/Mask-group.png'


const HomePage = () => {

    const ourServiceInfoData =[
        {
          image: ourServiceImage,
          title: "Bulk SMS",
          text : "Our Bulk SMS Service is the best way to reach out to a large number of contacts anywhere in the world because our platform is simple, efficient and easy to use."
         
        },
        {
          image: ourServiceEmail,
          title: "Email Marketing",
          text : "Email marketing is not dead as our email platform helps you to send beautifully designed, structured and personalized email campaigns that get results."
        },
        {
          image: ourServicePasscode,
          title: "OTP VERIFICATION",
          text : "OTP is a simple and secure way to verify your users' identity and protect their transactions. Integrate our OTP API and easily verify user identities and offer better security to your customers."
        }
      ];
    
    return (
        <div>
            
         
{/* Hero Start */}
<div className="container-fluid pt-5  hero-header mb-0">
    <div className="container pt-5">
        <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated ">SMS TECHNOLOGY</div>
                <h1 className="display-4 text-white mb-4 animated ">Reliable Bulk SMS Solutions.</h1>
                <p className="text-white mb-4 animated ">Deliver your messages instantly to thousands of customers with our fast, secure, and cost-effective bulk SMS platform. Engage your audience, boost your business, and stay connected effortlessly.</p>
                <a href="" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated ">Start Messaging Now!</a>
                <a href="" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated ">Contact Us</a>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
                <img className="img-fluid" src={jumboImage} alt="" />
            </div>
        </div>
    </div>
</div>
{/* Hero End */}

{/* Full Screen Search Start */}
{/* <div className="modal fade" id="searchModal" tabIndex="-1">
    <div className="modal-dialog modal-fullscreen">
        <div className="modal-content" style={{ background: 'rgba(20, 24, 62, 0.7)' }}>
            <div className="modal-header border-0">
                <button type="button" className="btn btn-square bg-white btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={{ maxWidth: '600px' }}>
                    <input type="text" className="form-control bg-transparent border-light p-3"
                        placeholder="Type search keyword" />
                    <button className="btn btn-light px-4"><i className="bi bi-search"></i></button>
                </div>
            </div>
        </div>
    </div>
</div> */}
{/* Full Screen Search End */}

{/* Service Start */}
<div className="container-fluid Service-cont  py-5 "id="solutions">
    <div className="container py-5">
        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <div className="btn btn-sm   px-3 mb-3">Our Services</div>
            <h1 className="mb-4">Top-Notch Bulk SMS Solutions for Your Business</h1>
        </div>
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-12">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="row g-4">
                                <div className="col-12 wow fadeIn " data-wow-delay="0.1s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded shadow">
                                        <div className="service-icon btn-square">
                                            {/* <i className="fa fa-robot fa-2x"></i> */}
                                            <i class="fa fa-comments fa-2x" aria-hidden="true"></i>
                                        </div>
                                        <h5 className="mb-3">Bulk SMS</h5>
                                        <p>Our Bulk SMS Service is the best way to reach out to a large number of contacts anywhere in the world because our platform is simple, efficient and easy to use.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="">Start Messaging Now!!!</a>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded shadow">
                                        <div className="service-icon btn-square">
                                            {/* <i className="fa fa-power-off fa-2x"></i> */}
                                            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                        </div>
                                        <h5 className="mb-3">Email Marketing</h5>
                                        <p>Email marketing is not dead as our email platform helps you to send beautifully designed, structured and personalized email campaigns that get results.</p>
                                        <a className="btn px-3 mt-auto mx-auto " href="">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-md-4">
                            <div className="row g-4">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded shadow">
                                        <div className="service-icon btn-square">
                                            <i className="	fas fa-user-lock fa-2x"></i>
                                            
                                        </div>
                                        <h5 className="mb-3">OTP VERIFICATION</h5>
                                        <p>OTP is a simple and secure way to verify your users' identity and protect their transactions. Integrate our OTP API and easily verify user identities and offer better security to your customers.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded shadow">
                                        <div className="service-icon btn-square">           
                                            <i className="fa fa-cog fa-2x"></i>
                                        </div>
                                        <h5 className="mb-3">Seamless Integration </h5>
                                        <p>Our platform easily integrates with your existing systems, making it simple to incorporate SMS functionality into your operations.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Service End */}

{/* Feature Start */}
<div className="container-fluid bg-primary feature pt-5">
    <div className="container pt-5">
        <div className="row g-5">
            <div className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn" data-wow-delay="0.3s">
                <div className="btn btn-sm  text-white px-3 mb-3">Why Choose Us</div>
                <h1 className="text-white mb-4">Advanced and Reliable SMS Solutions.</h1>
                <p className="text-light mb-4">We offer state-of-the-art SMS services designed to deliver your messages efficiently and reliably, ensuring your communication is always on point.</p>
                <div className="d-flex align-items-center text-white mb-3">
                    <div className="btn-sm-square bg-white text-color rounded-circle me-3">
                        <i className="fa fa-check"></i>
                    </div>
                    <span>Fast and Dependable Delivery</span>
                </div>
                <div className="d-flex align-items-center text-white mb-3">
                    <div className="btn-sm-square bg-white text-color rounded-circle me-3">
                        <i className="fa fa-check"></i>
                    </div>
                    <span>Flexible and Customer-Centric</span>
                </div>
                <div className="d-flex align-items-center text-white mb-3">
                    <div className="btn-sm-square bg-white text-color rounded-circle me-3">
                        <i className="fa fa-check"></i>
                    </div>
                    <span>High Security Standards </span>
                </div>
                <div className="d-flex align-items-center text-white mb-3">
                    <div className="btn-sm-square bg-white text-color rounded-circle me-3">
                        <i className="fa fa-check"></i>
                    </div>
                    <span>Seamless Integration</span>
                </div>
                <div className="d-flex align-items-center text-white mb-3">
                    <div className="btn-sm-square bg-white text-color rounded-circle me-3">
                        <i className="fa fa-check"></i>
                    </div>
                    <span>Dedicated Customer Support</span>
                </div>
                <a href="" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated ">Start Messaging Now!</a>
                {/* <div className="row g-4 pt-3">
                    <div className="col-sm-6">
                        <div className="d-flex rounded p-3" style={{ background: 'rgba(256, 256, 256, 0.1)' }}>
                            <i className="fa fa-users fa-3x text-white"></i>
                            <div className="ms-3">
                                <h2 className="text-white mb-0" data-toggle="counter-up">9999</h2>
                                <p className="text-white mb-0">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="d-flex rounded p-3" style={{ background: 'rgba(256, 256, 256, 0.1)' }}>
                            <i className="fa fa-check fa-3x text-white"></i>
                            <div className="ms-3">
                                <h2 className="text-white mb-0" data-toggle="counter-up">9999</h2>
                                <p className="text-white mb-0">Project Complete</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="col-lg-6 align-self-end text-center text-md-end wow fadeIn" data-wow-delay="0.5s">
                <img className="img-fluid happy" src={happy} alt=""  />
            </div>
        </div>
    </div>
</div>
{/* Feature End */}

{/* FAQs Start */}
<div className="container-fluid py-5">
        <div className="container py-5">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" >
                <div className="btn btn-sm px-3 mb-3">Popular FAQs</div>
                <h1 className="mb-4">Frequently Asked Questions</h1>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="accordion" id="accordionFAQ1">
                        <div className="accordion-item wow fadeIn" data-wow-delay="0.1s">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    How to build a website?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                data-bs-parent="#accordionFAQ1">
                                <div className="accordion-body">
                                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="accordion" id="accordionFAQ2">
                        <div className="accordion-item wow fadeIn" data-wow-delay="0.5s">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Will you maintain my site for me?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                data-bs-parent="#accordionFAQ2">
                                <div className="accordion-body">
                                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* FAQs End */}

{/* Contact Start */}
<div className="container-fluid py-5">
    <div className="container py-5">
        <div className="row g-5 align-items-center">
            <div className="col-lg-5 mx-auto text-center mb-5 wow fadeIn" data-wow-delay="0.3s">
            <div className="btn btn-sm px-3 mb-3">Popular FAQs</div>
                <h1 className="mb-4">Contact Us for Any Queries</h1>
                <p className="mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
                    labore lorem sit. Sanctus clita duo justo et tempor sed ut et labore.</p>
               
            </div>
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
                <form action="">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <input type="text" className="form-control rounded-pill p-4" placeholder="Your Name"
                                required />
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control rounded-pill p-4" placeholder="Your Email"
                                required />
                        </div>
                        <div className="col-12">
                            <textarea className="form-control rounded p-4" rows="5" placeholder="Message"
                                required></textarea>
                        </div>
                        <div className="col-12 text-end">
                        <a href="" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated ">Send Message</a>
                       
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
{/* Contact End */}







        </div>
    );
}

export default HomePage;
