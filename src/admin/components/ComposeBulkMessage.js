import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "./AdminDashboard.css"; // Import the CSS file

const ComposeBulkMessage = () => {
  const [messageTitle, setMessageTitle] = useState("");
  const [senderId, setSenderId] = useState("");
  const [file, setFile] = useState(null);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newSenderName, setNewSenderName] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", {
      messageTitle,
      senderId,
      file,
      date,
      message,
    });
  };

  const handleAddSender = () => {
    // Handle adding a new sender ID
    if (newSenderName && description) {
      // Example logic: could send the new sender data to the server
      console.log("New Sender Added:", { newSenderName, description });
      setNewSenderName("");
      setDescription("");
      setShowModal(false);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="d-flex justify-content-center py-3">
      <div className="card shadow-lg p-4 w-100 mt-5" style={{ maxWidth: "600px" }}>
        <h3 className="text-center mb-4">Compose Bulk Message</h3>
        <form onSubmit={handleSubmit}>
          {/* Message Title / Campaign Name */}
          <div className="mb-3">
            <label htmlFor="messageTitle" className="form-label">
              Message Title / Campaign Name
            </label>
            <input
              type="text"
              className="form-control"
              id="messageTitle"
              value={messageTitle}
              onChange={(e) => setMessageTitle(e.target.value)}
              placeholder="Enter message title or campaign name"
            />
          </div>

          {/* Sender ID and Create New Sender ID (same row) */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="senderId" className="form-label">
                Sender ID
              </label>
              <select
                id="senderId"
                className="form-select"
                value={senderId}
                onChange={(e) => setSenderId(e.target.value)}
              >
                <option value="">Select Sender ID</option>
                <option value="ID1">Sender ID 1</option>
                <option value="ID2">Sender ID 2</option>
                <option value="ID3">Sender ID 3</option>
              </select>
            </div>
            <div className="col-md-6 d-flex align-items-end">
              <button
                type="button"
                className="btn btn-outline-success w-100"
                onClick={() => setShowModal(true)}
              >
                <FaPlus className="me-2" /> Create New Sender ID
              </button>
            </div>
          </div>

          {/* Upload Contact List (.csv) */}
          <div className="mb-3">
            <label htmlFor="contactList" className="form-label">
              Upload Contact List (.csv)
            </label>
            <div className="border p-4 text-center" style={{ borderStyle: "dashed" }}>
              <input
                type="file"
                id="contactList"
                accept=".csv"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              {file ? (
                <p>{file.name}</p>
              ) : (
                <p>
                  Attach a file by dropping it here, or{" "}
                  <label htmlFor="contactList" className="text-primary" style={{ cursor: "pointer" }}>
                    click here to browse your files
                  </label>
                  .
                </p>
              )}
            </div>
          </div>

          {/* Message Content */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message Content
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here"
            ></textarea>
          </div>

          {/* Send Button */}
          <button type="submit" className="btn btn-success w-100">
            Send Message
          </button>
        </form>
      </div>

      {/* Modal for Adding Sender ID */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Sender ID/Name</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="newSenderName" className="form-label">
                      Sender ID/Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="newSenderName"
                      value={newSenderName}
                      onChange={(e) => setNewSenderName(e.target.value)}
                      placeholder="Enter Sender ID/Name"
                      maxLength="11"
                    />
                    <small className="text-danger">
                      Sender ID should not exceed 11 characters. Sender ID should not be numeric. Avoid using keywords or abbreviations that identify other institutions.
                    </small>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      rows="3"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddSender}
                >
                  Add Sender ID/Name
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComposeBulkMessage;
