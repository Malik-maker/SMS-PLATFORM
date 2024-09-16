import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { FaFileCsv, FaEdit, FaTrashAlt } from "react-icons/fa";
import "./AdminDashboard.css"; // Import the CSS file

const Contact = () => {
  const [showAddContactModal, setShowAddContactModal] = useState(false);
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);

  // Dummy data for the table
  const [contacts, setContacts] = useState([
    { id: 1, name: "John Doe", phoneNumber: "1234567890", group: "Family" },
    { id: 2, name: "Jane Smith", phoneNumber: "0987654321", group: "Friends" },
  ]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "Groups",
      selector: (row) => row.group,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Button variant="outline-primary" className="me-2">
            <FaEdit /> Edit
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => handleDeleteClick(row.id)}
          >
            <FaTrashAlt /> Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleAddContact = () => setShowAddContactModal(true);
  const handleCreateGroup = () => setShowCreateGroupModal(true);

  const handleCloseAddContactModal = () => setShowAddContactModal(false);
  const handleCloseCreateGroupModal = () => setShowCreateGroupModal(false);

  // Function to handle Delete button click
  const handleDeleteClick = (contactId) => {
    setSelectedContactId(contactId); // Set the ID of the selected contact for deletion
    setShowDeleteConfirmModal(true); // Show the confirmation modal
  };

  // Function to confirm delete
  const handleConfirmDelete = () => {
    // Remove the contact from the list
    const updatedContacts = contacts.filter((contact) => contact.id !== selectedContactId);
    setContacts(updatedContacts);

    // Close the confirmation modal
    setShowDeleteConfirmModal(false);
    setSelectedContactId(null);
  };

  const handleCloseDeleteConfirmModal = () => {
    setShowDeleteConfirmModal(false);
    setSelectedContactId(null);
  };

  return (
    <div className="container mt-5">
      {/* Cards */}
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-lg p-3">
            <h5>Add Contacts</h5>
            <Button className="btn btn-success" onClick={handleAddContact}>
              Add Contacts
            </Button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-lg p-3">
            <h5>Create Group</h5>
            <Button className="btn btn-success" onClick={handleCreateGroup}>
              Create Group
            </Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-4">
        <DataTable
          title="Contacts"
          columns={columns}
          data={contacts}
          pagination
          highlightOnHover
          subHeader
          subHeaderComponent={
            <input
              type="text"
              className="form-control w-25"
              placeholder="Search Contacts"
            />
          }
        />
      </div>

      {/* Add Contacts Modal */}
      <Modal show={showAddContactModal} onHide={handleCloseAddContactModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formFile">
              <Form.Label>Upload Contacts File (.CSV)</Form.Label>
              <Form.Control type="file" accept=".csv" />
            </Form.Group>
            <p>
              <FaFileCsv className="me-2" />
              <a href="#">Download Sample CSV Template</a>
              . You can either fill up the document with your contacts or create
              a CSV file with headings such as Name, Email, and Phone Number.
            </p>
            <h6 className="mt-4">Enter Contact Information Below</h6>
            <Form.Group className="mb-3">
              <Form.Label>Name / Title</Form.Label>
              <Form.Control type="text" placeholder="Enter name or title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Groups</Form.Label>
              <Form.Select>
                <option>Select group</option>
                <option value="Family">Family</option>
                <option value="Friends">Friends</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddContactModal}>
            Close
          </Button>
          <Button variant="primary">Save Contact</Button>
        </Modal.Footer>
      </Modal>

      {/* Create Group Modal */}
      <Modal show={showCreateGroupModal} onHide={handleCloseCreateGroupModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter group title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Group description" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreateGroupModal}>
            Close
          </Button>
          <Button variant="primary">Create Group</Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteConfirmModal} onHide={handleCloseDeleteConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this contact?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteConfirmModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
