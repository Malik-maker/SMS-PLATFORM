// src/pages/HomePage.js
import jumboImage from '../../assets/images/jumbo-right-image.svg';
import happy from '../../assets/images/Happy.png';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import './OTP.css';

// Images

// import OurServiceImage from './images/sms-messages-icon.png'
import ourServiceImage from '../../assets/images/sms-messages-icon.png'
import ourServicePasscode from '../../assets/images/passcode-icon.png'
import ourServiceEmail from '../../assets/images/email-address-icon.png'
// import integrateImage from './images/Mask-group.png'
// import integrateImage from '../../assets/images/Mask-group.png'


const LayOut = () => {


    return (
        <div id="page-top">
        <div id="wrapper">
          {/* Sidebar */}
          <Sidebar />
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <Topbar />
            </div>
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2024</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
        {/* Scroll to Top Button */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
        {/* Logout Modal */}
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LayOut;
