import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import "./AdminDashboard.css"; // Import the CSS file

const ManageSenderNames = () => {
  const [senderIds, setSenderIds] = useState([
    { id: 1, name: "Sender1" },
    { id: 2, name: "Sender2" },
    { id: 3, name: "Sender3" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [description, setDescription] = useState("");

  const handleDelete = (id) => {
    // Handle deleting a sender ID
    setSenderIds(senderIds.filter((sender) => sender.id !== id));
  };

  const handleAddSender = () => {
    // Handle adding a new sender ID
    if (senderName && description) {
      setSenderIds([...senderIds, { id: Date.now(), name: senderName }]);
      setSenderName("");
      setDescription("");
      setShowModal(false);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">Manage Sender Names/IDs</h3>

      {/* Add Sender ID Button */}
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          <FaPlus className="me-2" /> Add Sender ID/Name
        </button>
      </div>

      {/* Table for Sender IDs */}
      <div className="table-responsive">
        <table className="table table-bordered shadow">
          <thead className="thead-light">
            <tr>
              <th scope="col">Sender ID/Name</th>
              <th scope="col" className="text-end">Action</th> {/* Align to right */}
            </tr>
          </thead>
          <tbody>
            {senderIds.length > 0 ? (
              senderIds.map((sender) => (
                <tr key={sender.id}>
                  <td>{sender.name}</td>
                  <td className="text-end"> {/* Align buttons to right */}
                    <button className="btn btn-sm btn-warning me-2">
                      <FaEdit /> Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(sender.id)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center">
                  No Sender IDs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
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
                    <label htmlFor="senderName" className="form-label">
                      Sender ID/Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="senderName"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
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

export default ManageSenderNames;
