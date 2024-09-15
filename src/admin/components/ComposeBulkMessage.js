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
              <Link to="/create-sender-id" className="btn btn-outline-primary w-100">
                <FaPlus className="me-2" /> Create New Sender ID
              </Link>
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

          {/* Date */}
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
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
    </div>
  );
};

export default ComposeBulkMessage;









