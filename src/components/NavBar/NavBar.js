// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import MalzookLogo from '../../assets/images/Malzook.png';





const NavBar = () => {
  return (
   <>
   {/* Navbar Start */}
{/* Navbar Start */}
<header className="top-navbar sticky-top">
    <nav className="navbar navbar-expand-lg ms-auto navbar-light bg-light">
   <div className="container ">
       <a className="navbar-brand " href="/">

       {/* <img src={MalzookLogo} alt="logo" className="logo-image"  style={{ width: '200px', height: 'auto', objectFit: 'contain' }} ></img> */}
           {/* <!-- <img src="./images/coldsis-logo.png" alt="" className="logo-image"> --> */}
       </a>
       {/* <!-- <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host"
           aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
       </button> --> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
           </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav ms-auto">
               <li className="nav-item "> 
                       <Link  className="nav-link " to="/"> <span className="active-home"> Home
                       </span></Link>
                      
                       </li>             
                       
             {/* <Link to="/about"> About Us </Link> */}
               <li className="nav-item"><a className="nav-link" href="/AboutUs">Firm</a></li>
               <li className="nav-item"><a className="nav-link" href="#solutions">Solutions </a></li>
               <li className="nav-item"><a className="nav-link" href="/GetInTouch">Contact US </a></li>
               <li className="nav-item"><a className="nav-link" href="/Documentation">Documentation</a></li>

               
           </ul>
              <ul className="nav navbar-nav navbar-right" id="">
                   <li>
                            <Link className="hover-btn-new btn-sign " to="/login"> <span className="active-home"> Sign
                               In
                       </span></Link>
                       </li>
                           

               </ul>
               

               <ul className="nav navbar-nav navbar-register " id="">
                   <li><a className="hover-btn-new btn-donate text-danger " href="register" ><span>Register</span></a></li>
               </ul>
         
       </div>                                         
   </div>
</nav>

  </header>
</>
  );
};

export default NavBar;


