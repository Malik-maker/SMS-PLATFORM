import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelopeOpen, FaUsers, FaIdBadge } from "react-icons/fa"; // Import icons
import "./AdminDashboard.css"; // Import the CSS file


const Messenger = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        {/* Send Quick Message Card */}
        <div className="col-md-4">
          <div className="card shadow-sm mb-4 d-flex flex-column h-100">
            <div className="card-body text-center flex-grow-1 d-flex flex-column">
              <FaEnvelopeOpen size={40} className="mb-3 text-primary" />
              <h5 className="card-title">Send Quick Message</h5>
              <p className="card-text flex-grow-1">
                Quickly send a short message to a small number of recipients
              </p>
              <Link to="/Messenger" className="btn btn-primary mt-auto">
                Compose A Quick Message
              </Link>
            </div>
          </div>
        </div>

        {/* Send Bulk Messages Card */}
        <div className="col-md-4">
          <div className="card shadow-sm mb-4 d-flex flex-column h-100">
            <div className="card-body text-center flex-grow-1 d-flex flex-column">
              <FaUsers size={40} className="mb-3 text-success" />
              <h5 className="card-title">Send Bulk Messages</h5>
              <p className="card-text flex-grow-1">
                Import or use your existing contacts and send a mass message
              </p>
              <Link to="/compose-new-message" className="btn btn-success mt-auto">
                Compose New Message
              </Link>
            </div>
          </div>
        </div>

        {/* Manage Sender Names/IDs Card */}
        <div className="col-md-4">
          <div className="card shadow-sm mb-4 d-flex flex-column h-100">
            <div className="card-body text-center flex-grow-1 d-flex flex-column">
              <FaIdBadge size={40} className="mb-3 text-warning" />
              <h5 className="card-title">Manage Sender Names/IDs</h5>
              <p className="card-text flex-grow-1">
                Add, update or remove sender name/ID used for messages
              </p>
              <Link to="/manage-sender-names" className="btn btn-warning mt-auto">
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
