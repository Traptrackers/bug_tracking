import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Card, CardContent, Button } from '@material-ui/core';
import Swal from 'sweetalert2'; // Import SweetAlert2
import Navbar from './Tester_navbar'; // Import the reusable Navbar component
import './Tester_home.css';

const Tester_home = () => {
  const [confirmDialog, setConfirmDialog] = useState(false); // State for confirmation dialog

  // Sample test data
  const testData = {
    testName: "Sample Test",
    customerName: "Example Corp",
    projectStatus: "Testing in Process"
  };

  // Function to handle confirmation dialog and status update
  const handleStartTesting = () => {
    if (testData.projectStatus === "Testing Completed") {
      Swal.fire({
        icon: 'info',
        title: 'Project Status',
        text: 'Testing Completed!',
        confirmButtonText: 'OK'
      });
    } else {
      testData.projectStatus = "Testing in Process";
      // Add functionality to handle starting testing process here
      // For now, just updating the project status in the testData
    }
  };

  const renderTestRequest = () => {
    if (testData) {
      return (
        <Card className="test-request">
          <CardContent>
            <h3>Test Request 1</h3>
            <table>
              <tbody>
                <tr>
                  <td><strong>Test Name:</strong></td>
                  <td>{testData.testName}</td>
                </tr>
                <tr>
                  <td><strong>Customer Name:</strong></td>
                  <td>{testData.customerName}</td>
                </tr>
                <tr>
                  <td><strong>Project Status:</strong></td>
                  <td>{testData.projectStatus}</td>
                </tr>
              </tbody>
            </table>
            {testData.projectStatus === "Testing Completed" ? (
                            <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'green' }}>Testing Completed</p>
            ) : (
              <Link to='/Tester_details'>
                <Button variant="contained" color="primary" onClick={handleStartTesting}> Start Testing </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      );
    } else {
      return (
        <div className="no-test">
          <p>No test assigned. Please come back later.</p>
        </div>
      );
    }
  };

  return (
    <div>
      {/* Reusable Navbar component with black background color */}
      <Navbar color="black" />

      {/* Add a margin to push content below the Navbar */}
      <div className="content-container">
        <Container className="dashboard-container">
          {renderTestRequest()}
        </Container>
      </div>
    </div>
  );
}

export default Tester_home;
