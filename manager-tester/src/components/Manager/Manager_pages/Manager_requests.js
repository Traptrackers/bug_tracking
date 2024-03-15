import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Manager_requests.css';
import Manager_Layout from '../manager_layout/Manager_Layout';

const Manager_requests = () => {
  // Dummy data for demonstration
  const [requests, setRequests] = useState([
    { id: 1, customer: 'Customer 1', status: 'Under Review', assignedTester: '', accepted: 0 },
    { id: 2, customer: 'Customer 2', status: 'Under Review', assignedTester: '', accepted: 0 },
    { id: 3, customer: 'Customer 3', status: 'Under Review', assignedTester: '', accepted: 0 },
    // Add more dummy data if needed
  ]);

  const [testers, setTesters] = useState([
    { id: 1, name: 'Tester 1', availability: 'Available' },
    { id: 2, name: 'Tester 2', availability: 'Busy' },
    { id: 3, name: 'Tester 3', availability: 'Available' },
    // Add more dummy data if needed
  ]);

  const handleAcceptRequest = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to accept this request?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accept',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedRequests = requests.map((request) =>
          request.id === id ? { ...request, accepted: 1 } : request
        );
        setRequests(updatedRequests);
        Swal.fire('Accepted', 'The request has been accepted', 'success');
      }
    });
  };

  const handleRejectRequest = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to reject this request?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Reject',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedRequests = requests.filter((request) => request.id !== id);
        setRequests(updatedRequests);
        Swal.fire('Rejected', 'The request has been rejected', 'error');
      }
    });
  };

  const handleAssignTester = (id, testerId) => {
    const selectedTester = testers.find((tester) => tester.id === testerId);
    if (!selectedTester) {
      Swal.fire('Error', 'Please select a valid tester', 'error');
      return;
    }
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to assign ${selectedTester.name} to this request?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Assign',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedRequests = requests.map((request) =>
          request.id === id
            ? { ...request, status: 'Testing In Progress', assignedTester: selectedTester.name }
            : request
        );
        setRequests(updatedRequests);

        const updatedTesters = testers.map((tester) =>
          tester.id === testerId ? { ...tester, availability: 'Busy' } : tester
        );
        setTesters(updatedTesters);

        Swal.fire('Assigned', `${selectedTester.name} has been assigned to the request`, 'success');
      }
    });
  };

  return (
    <Manager_Layout>
      <div className="manager-page">
        <h2>Testing Requests</h2>
        <div className="cards-container">
          {requests.map((request) => (
            (request.accepted === 0) ? (
              <div className="card" key={request.id}>
                <h3>{request.customer}</h3>
                <p>Status: {request.status}</p>
                {request.assignedTester && <p>Assigned Tester: {request.assignedTester}</p>}
                <div className="buttons">
                  <button className="accept" onClick={() => handleAcceptRequest(request.id)}>
                    Accept
                  </button>
                  <button className="reject" onClick={() => handleRejectRequest(request.id)}>
                    Reject
                  </button>
                </div>
              </div>
            ) : null
          ))}
        </div>
      </div>
    </Manager_Layout>
  );
};

export default Manager_requests;
