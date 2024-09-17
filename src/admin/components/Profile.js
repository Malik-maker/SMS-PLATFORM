import React, { useState } from "react";
import { Tab, Nav, Form, Button, Table, Row, Col, Container } from "react-bootstrap";
import "./AdminDashboard.css"; // Import the CSS file

const Profile = () => {
  const [key, setKey] = useState("updateProfile");

  return (
    <Container className="d-flex justify-content-center mt-5">
      <div className="profile-form-container p-4 shadow bg-white rounded">
        <h3 className="text-center mb-4">Profile</h3>

        {/* Tabs for Profile Sections */}
        <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
          <Nav variant="tabs" className="mb-4 justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="updateProfile" className="text-success" >Update Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="changePassword"  className="text-success">Change Password</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="payment"  className="text-success">Payment</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            {/* Update Profile Form */}
            <Tab.Pane eventKey="updateProfile">
              <h4>Account Information</h4>
              <Form>
                <Row>
                  {/* Left Column */}
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Organisation Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Organisation Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Other Names</Form.Label>
                      <Form.Control type="text" placeholder="Enter Other Names" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Country</Form.Label>
                      <Form.Control type="text" placeholder="Enter Country" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="Enter Address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Website</Form.Label>
                      <Form.Control type="text" placeholder="Enter Website" />
                    </Form.Group>
                  </Col>

                  {/* Right Column */}
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Surname</Form.Label>
                      <Form.Control type="text" placeholder="Enter Surname" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Numbers</Form.Label>
                      <Form.Control type="text" placeholder="Enter Phone Numbers" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="Enter City" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Digital Address</Form.Label>
                      <Form.Control type="text" placeholder="Enter Digital Address" />
                    </Form.Group>
                  </Col>
                </Row>

                <h4>Identity</h4>
                <Row>
                  {/* Left Column */}
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>ID Type</Form.Label>
                      <Form.Select>
                        <option>Select ID Type</option>
                        <option>Passport</option>
                        <option>National ID</option>
                        <option>Driver's License</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>ID Card Image</Form.Label>
                      <Form.Control type="file" />
                      <Form.Text>
                        Attach a file by dropping it here. You can also <span className="text-primary">click here to browse your files.</span>
                      </Form.Text>
                    </Form.Group>
                  </Col>

                  {/* Right Column */}
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>ID Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter ID Number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Organisation Logo</Form.Label>
                      <Form.Control type="file" />
                      <Form.Text>
                        Attach a file by dropping it here. You can also <span className="text-primary">click here to browse your files.</span>
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter any additional information" />
                </Form.Group>

                <Button variant="success" type="submit">
                  Save Profile
                </Button>
              </Form>
            </Tab.Pane>

            {/* Change Password Form */}
            <Tab.Pane eventKey="changePassword">
              <h4>Change Password</h4>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Old Password" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter New Password" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm New Password" />
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="success" type="submit">
                Change Password
              </Button>
            </Tab.Pane>

            {/* Payment Table */}
            <Tab.Pane eventKey="payment">
              <h4>Payment History</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Replace with actual payment data */}
                  <tr>
                    <td>2024-09-16</td>
                    <td>$50.00</td>
                  </tr>
                  <tr>
                    <td>2024-09-15</td>
                    <td>$75.00</td>
                  </tr>
                </tbody>
              </Table>
            </Tab.Pane>
            
          </Tab.Content>
        </Tab.Container>
      </div>
    </Container>
  );
};

export default Profile;
