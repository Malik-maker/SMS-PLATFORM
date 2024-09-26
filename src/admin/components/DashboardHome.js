import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaCheckCircle, FaTimesCircle, FaMoneyBillAlt } from "react-icons/fa"; // Import icons
import "./AdminDashboard.css"; // Import the CSS file

const DashboardHome = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Fetch the stored user name from localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <div className="container-fluid py-4">
      {/* Welcome Message */}
      <div className="row mb-4">
        <div className="col">
          <h5 className="text-success">Welcome, {userName}!</h5> {/* Display welcome message */}
        </div>
      </div>

      <div className="row">
        {/* Total Sent Card */}
        <div className="col-md-3">
          <div className="card shadow-lg mb-4 d-flex flex-column h-100">
            <div className="card-body text-center flex-grow-1 d-flex flex-column">
              <FaEnvelope size={40} className="mb-3" />
              <h5 className="card-title">Total Sent</h5>
              <p className="card-text flex-gros w-1 ">1000 messages sent</p>
              <Link to="/admin-dashboard/sendquickmessage" className="btn btn-success mt-auto">
                Click to send message
              </Link>
            </div>
          </div>
        </div>

        {/* Delivered Messages Card */}
        <div className="col-md-3">
          <div className="card shadow-lg mb-4 d-flex flex-column h-100">
            <div className="card-body text-center flex-grow-1 d-flex flex-column">
              <FaCheckCircle size={40} className="mb-3 text-success" />
              <h5 className="card-title">Delivered Messages</h5>
              <p className="card-text flex-grow-1">800 messages delivered</p>
            </div>
          </div>
        </div>

        {/* Total Failed Card */}
        <div className="col-md-3">
          <div className="card shadow-lg mb-4 d-flex flex-column h-100">
            <div className="card-body text-center flex-grow-1 d-flex flex-column">
              <FaTimesCircle size={40} className="mb-3 text-danger" />
              <h5 className="card-title">Total Failed</h5>
              <p className="card-text flex-grow-1">200 messages failed</p>
            </div>
          </div>
        </div>

        {/* Available Credit Card */}
        <div className="col-md-3">
          <div className="card shadow-lg mb-4 d-flex flex-column h-100">
            <div className="card-body text-center flex-grow-1 d-flex flex-column">
              <FaMoneyBillAlt size={40} className="mb-3 text-warning" />
              <h5 className="card-title">Available Credit</h5>
              <p className="card-text flex-grow-1">500 credits remaining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
