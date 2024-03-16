import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import Navbar from './Tester_navbar'; // Import the reusable Navbar component
import './Tester_details.css'; // Import CSS file for styling

const Tester_details = () => {
  // Set status to "Testing in Process" by default
  const [status, setStatus] = useState("Testing Completed");
  const [isBugCreationEnabled, setIsBugCreationEnabled] = useState(true); // Enable bug creation by default

  const testRequestData = {
    testName: "Sample Test",
    customerName: "Example Corp",
    projectStatus: status, // Set the status based on the state
    url: "http://example.com",
    username: "admin",
    password: "pass123"
  };

  // Function to handle "Create Bug" button click
  const handleCreateBug = () => {
    // Add functionality to create a bug here
    // This function will be called when the "Create Bug" button is clicked
    console.log("Bug created!");
  };

  return (
    <div>
      {/* Reusable Navbar component */}
      <Navbar color="black" />

      {/* Main content */}
      <Container className="page-container">
        <Card className="test-request-card">
          <CardContent>
            <Typography variant="h5" gutterBottom>Test Request Details</Typography>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell><strong>Test Name:</strong></TableCell>
                    <TableCell>{testRequestData.testName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Customer Name:</strong></TableCell>
                    <TableCell>{testRequestData.customerName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Project Status:</strong></TableCell>
                    <TableCell>{testRequestData.projectStatus}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>URL:</strong></TableCell>
                    <TableCell>{testRequestData.url}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Username:</strong></TableCell>
                    <TableCell>{testRequestData.username}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Password:</strong></TableCell>
                    <TableCell>{testRequestData.password}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* Render "Create Bug" button with disabled attribute */}
            <div className="button-container">
            {testRequestData.projectStatus !== "Testing Completed" && (
  <Link to='/Tester_bugCreate'>
    <Button
      id="create-bug-btn"
      variant="contained"
      color="primary"
      onClick={handleCreateBug}
    >
      Create Bug
    </Button>
  </Link>
)}

            </div>
          </CardContent>
        </Card>
        <div className="bug-button">
          <Link to='/Tester_bugManagement'><Button variant="contained" color="primary">Bugs Management</Button></Link>
        </div>
      </Container>
    </div>
  );
}

export default Tester_details;
