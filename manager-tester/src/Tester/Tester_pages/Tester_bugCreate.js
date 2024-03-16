import React, { useState } from 'react';
import { Container, Card, CardContent, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import Navbar from './Tester_navbar'; // Import the reusable Navbar component
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import './Tester_bugCreate.css';

const Tester_bugCreate = () => {
  const [summary, setSummary] = useState('');
  const [feature, setFeature] = useState('');
  const [severity, setSeverity] = useState('');
  const [steps, setSteps] = useState('');
  const navigate = useNavigate();

  const handleCreateBug = () => {
    // Check if any field is empty
    if (!summary || !feature || !severity || !steps) {
      Swal.fire({
        title: 'All fields are required!',
        text: 'Please fill in all fields before creating the bug.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    // Confirmation dialog before creating the bug
    Swal.fire({
      title: 'Confirm Bug Creation',
      text: 'Are you sure you want to create this bug?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Logic to create bug
        // You can send an API request to create the bug with the provided data
        // For demonstration purposes, we'll simply log the bug data
        const bugData = {
          summary,
          feature,
          severity,
          steps,
        };
        console.log('Bug Data:', bugData);

        // Navigate back to the previous page after creating the bug
        navigate(-1);
      }
    });
  };

  return (
    <div>
      {/* Reusable Navbar component */}
      <Navbar color="black" />

      {/* Main content */}
      <Container className="page-container">
        <Card className="bug-creation-card">
          <CardContent>
            <h2>Create Bug</h2>
            {/* Bug creation form */}
            <form>
              <TextField
                id="summary"
                label="Summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                fullWidth
                required
              />
              <TextField
                id="feature"
                label="Feature/Workflow"
                multiline
                rows={4}
                value={feature}
                onChange={(e) => setFeature(e.target.value)}
                fullWidth
                required
              />
              {/* Dropdown for Severity */}
              <FormControl fullWidth required>
                <InputLabel id="severity-label">Severity</InputLabel>
                <Select
                  labelId="severity-label"
                  id="severity"
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="">Select Severity</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="steps"
                label="Steps to Reproduce"
                multiline
                rows={4}
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                fullWidth
                required
              />
              {/* Button to submit bug creation */}
              <Button
                variant="contained"
                color="primary"
                onClick={handleCreateBug}
                fullWidth
                style={{ marginBottom: '10px' }} // Add margin to the bottom of the button
              >
                Create Bug
              </Button>

              <Link to="/Tester_details">
              <Button
                className='backButton'
                variant="outlined"
                color="secondary"
                fullWidth
              >
                Cancel
              </Button></Link>

            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Tester_bugCreate;
