import React, { useState } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap"; // Added Spinner
import { FaFileCsv } from "react-icons/fa";
import Papa from "papaparse"; // CSV parsing library
import axios from "axios"; // For API calls
import "./AdminDashboard.css"; // Import the CSS file

const Contact = () => {
  const [showAddContactModal, setShowAddContactModal] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState(""); 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [group, setGroup] = useState("");
  const [csvData, setCsvData] = useState(null); 
  const [loading, setLoading] = useState(false); // Added loading state
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [groupTitle, setGroupTitle] = useState("");
  const [groupDescription, setGroupDescription] = useState("");


  const handleAddContact = () => setShowAddContactModal(true);
  const handleCloseAddContactModal = () => setShowAddContactModal(false);

  const handleCsvUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setCsvData(result.data); 
      },
    });
  };

  const handleSaveContact = async () => {
    const contact = { name, phoneNumber, group };
  
    try {
      const token = localStorage.getItem("token");
      
      if (!token) {
        console.error("No token found");
        alert('No token found, please log in again.'); // Alert when token is missing
        return;
      }
  
      setLoading(true); // Start loading spinner
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await axios.post("https://flare-message.onrender.com/api/user/add-contacts", contact, config);
      
      // Check for any 2xx status code
      if (response.status >= 200 && response.status < 300) {
        setContacts([...contacts, contact]);
        setName("");
        setPhoneNumber("");
        setGroup("");
        handleCloseAddContactModal();
        alert('Contact saved successfully!'); // Show success message
      } else {
        console.error('Unexpected response status:', response.status);
        alert('Failed to save contact. Please try again.');
      }
    } catch (error) {
      console.error("Error saving contact:", error.response || error.message);
      alert('An error occurred while saving the contact. Please try again.'); // Handle any errors
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };
  
  
  const handleSaveCsvContacts = async () => {
    if (!csvData) return;

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No token found, please log in again.');
      }

      setLoading(true); // Start loading spinner

      const promises = csvData.map(async (row) => {
        const contact = { name: row.Name, phoneNumber: row.PhoneNumber, group };

        return axios.post(
          "https://flare-message.onrender.com/api/user/add-contacts", 
          contact, 
          {
            headers: {
              'Authorization': `Bearer ${token}`,  
              'Content-Type': 'application/json'
            }
          }
        );
      });

      await Promise.all(promises);

      setContacts([...contacts, ...csvData.map(row => ({ name: row.Name, phoneNumber: row.PhoneNumber, group }))]);
      handleCloseAddContactModal();
      alert('Contacts saved successfully!');

    } catch (error) {
      console.error("Error saving CSV contacts:", error);
      alert('Error saving contacts. Please try again.');
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const handleCreateGroup = () => setShowCreateGroupModal(true);
  const handleCloseCreateGroupModal = () => setShowCreateGroupModal(false);

    // Handle form submission for creating a group
    const handleCreateGroupSubmit = async () => {
      if (!groupTitle || !groupDescription) {
        alert("Please fill in both title and description.");
        return;
      }
  
      const groupData = {
        title: groupTitle,
        description: groupDescription,
      };
  
      try {
        const token = localStorage.getItem("token");
  
        if (!token) {
          alert('No token found, please log in again.');
          return;
        }
  
        setLoading(true);
  
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
  
        const response = await axios.post("https://flare-message.onrender.com/api/user/add-contacts", groupData, config);
        
        if (response.status >= 200 && response.status < 300) {
          alert("Group created successfully!");
          setGroupTitle("");
          setGroupDescription("");
          handleCloseCreateGroupModal();
        } else {
          alert("Failed to create group. Please try again.");
        }
      } catch (error) {
        console.error("Error creating group:", error);
        alert("An error occurred while creating the group. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
  return (
    <div className="container mt-5">
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

      <Modal show={showAddContactModal} onHide={handleCloseAddContactModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formFile">
              <Form.Label>Upload Contacts File (.CSV)</Form.Label>
              <Form.Control type="file" accept=".csv" onChange={handleCsvUpload} />
            </Form.Group>
            <p>
              <FaFileCsv className="me-2" />
              <a href="#">Download Sample CSV Template</a>.
            </p>
            <hr />
            <h6 className="mt-4">Enter Contact Information Manually</h6>
            <Form.Group className="mb-3">
              <Form.Label>Name / Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name or title"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Groups</Form.Label>
              <Form.Select value={group} onChange={(e) => setGroup(e.target.value)}>
                <option value="">Select group</option>
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
          {/* Show spinner if loading */}
          {loading ? (
            <Button variant="success" disabled>
              <Spinner animation="border" size="sm" className="me-2" />
              Saving...
            </Button>
          ) : (
            <Button variant="success" onClick={csvData ? handleSaveCsvContacts : handleSaveContact}>
              Save Contact
            </Button>
          )}
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
              <Form.Control
                type="text"
                placeholder="Enter group title"
                value={groupTitle}
                onChange={(e) => setGroupTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Group description"
                value={groupDescription}
                onChange={(e) => setGroupDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreateGroupModal}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={handleCreateGroupSubmit}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Group"}
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
};

export default Contact;
