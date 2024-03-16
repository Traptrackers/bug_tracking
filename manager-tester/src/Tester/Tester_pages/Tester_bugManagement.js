import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './Tester_bugManagement.css';

const PastBugsTable = () => {
  const [pastBugs, setPastBugs] = useState([]);

  useEffect(() => {
    // Simulated data for past bugs
    const simulatedPastBugs = [
      { id: 1, bugName: 'Bug 1', summary: 'Summary 1', createdAt: '2024-03-01', status: 'Closed' },
      { id: 2, bugName: 'Bug 2', summary: 'Summary 2', createdAt: '2024-03-05', status: 'Under Triage' },
      { id: 3, bugName: 'Bug 3', summary: 'Summary 3', createdAt: '2024-03-10', status: 'Fixed' },
      { id: 4, bugName: 'Bug 4', summary: 'Summary 4', createdAt: '2024-03-15', status: 'Need More Info' },
      { id: 5, bugName: 'Bug 5', summary: 'Summary 5', createdAt: '2024-03-20', status: 'Not Reproducible' },
      { id: 6, bugName: 'Bug 6', summary: 'Summary 6', createdAt: '2024-03-25', status: 'Invalid' },
    ];

    setPastBugs(simulatedPastBugs);
  }, []);

  const handleBugStatusChange = (bugId, currentStatus) => {
    switch (currentStatus) {
      case 'Need More Info':
        showAddMoreInfoDialog(bugId);
        break;
      case 'Fixed':
        showValidateCloseDialog(bugId);
        break;
      case 'Not Reproducible':
        showNotReproducibleDialog(bugId);
        break;
      case 'Invalid':
        showInvalidDialog(bugId);
        break;
      default:
        break;
    }
  };

  const showAddMoreInfoDialog = (bugId) => {
    Swal.fire({
      title: 'Add More Info',
      input: 'textarea',
      inputLabel: 'Additional Information',
      inputPlaceholder: 'Enter additional information...',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      preConfirm: (additionalInfo) => {
        if (!additionalInfo.trim()) {
          Swal.showValidationMessage('Additional information is required');
        }
        return additionalInfo;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        moveBugToStatus(bugId, 'Under Triage', result.value);
      }
    });
  };

  const showValidateCloseDialog = (bugId) => {
    Swal.fire({
      title: 'Validate and Close',
      text: 'Do you want to validate and close this bug?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Validate and Close',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        moveBugToStatus(bugId, 'Closed');
      }
    });
  };

  const showNotReproducibleDialog = (bugId) => {
    Swal.fire({
      title: 'Not Reproducible',
      text: 'Please provide comments:',
      input: 'textarea',
      inputLabel: 'Comments',
      inputPlaceholder: 'Enter your comments here...',
      showCancelButton: false, // Remove the cancel button
      confirmButtonText: 'Send to Customer', // Change the button name
      showDenyButton: true,
      denyButtonText: 'Close Bug', // Add a new function button
      preConfirm: (comment) => {
        if (!comment.trim()) {
          Swal.showValidationMessage('Comments are required');
        }
        return comment;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        moveBugToStatus(bugId, 'Under Triage', result.value);
      } else if (result.isDenied && !result.isConfirmed) { // Check if the "Close Bug" button was clicked
        moveBugToStatus(bugId, 'Closed');
      }
    });
  };


  const showInvalidDialog = (bugId) => {
    Swal.fire({
      title: 'Invalid',
      text: 'Please provide comments:',
      input: 'textarea',
      inputLabel: 'Comments',
      inputPlaceholder: 'Enter your comments here...',
      showCancelButton: false, // Remove the cancel button
      confirmButtonText: 'Send to Customer', // Change the button name
      showDenyButton: true,
      denyButtonText: 'Close Bug', // Add a new function button
      preConfirm: (comment) => {
        if (!comment.trim()) {
          Swal.showValidationMessage('Comments are required');
        }
        return comment;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        moveBugToStatus(bugId, 'Under Triage', result.value);
      } else if (result.isDenied && !result.isConfirmed) { // Check if the "Close Bug" button was clicked
        moveBugToStatus(bugId, 'Closed');
      }
    });
  };


  const moveBugToStatus = (bugId, newStatus, comment = '') => {
    // Update bug status in the state
    const updatedBugs = pastBugs.map((bug) => {
      if (bug.id === bugId) {
        return { ...bug, status: newStatus };
      }
      return bug;
    });

    setPastBugs(updatedBugs);

    Swal.fire({
      icon: 'success',
      title: 'Bug Updated',
      text: `Bug ${bugId} status updated to ${newStatus}.`,
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Closed':
      case 'Validated and Closed':
        return 'green';
      case 'Invalid':
      case 'Not Reproducible':
      case 'Need More Info':
        return 'red';
      case 'Under Triage':
        return 'orange';
      default:
        return 'black';
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Past Bugs</h2>
      <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
        <table class="w-full table-fixed">
          <thead>
            <tr class="bg-gray-100">
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Bug Name</th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Summary</th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Created At</th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            {pastBugs.map((bug) => (
              <tr key={bug.id} class="border-b border-gray-200">
                <td class="py-4 px-6">{bug.bugName}</td>
                <td class="py-4 px-6">{bug.summary}</td>
                <td class="py-4 px-6">{bug.createdAt}</td>
                <td class="py-4 px-6" style={{ color: getStatusColor(bug.status) }}>{bug.status}</td>
                <td class="py-4 px-6">
                  {['Closed', 'Under Triage', 'Validated and Closed'].includes(bug.status) ? (
                    <span>No Action Available</span>
                  ) : (
                    <button
                      onClick={() => handleBugStatusChange(bug.id, bug.status)}
                      disabled={bug.status === 'Testing Completed'}
                      class="py-2 px-4 bg-blue-500 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                    >
                      {bug.status === 'Need More Info' ? 'Add More Info' : 'Update Status'}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PastBugsTable;
