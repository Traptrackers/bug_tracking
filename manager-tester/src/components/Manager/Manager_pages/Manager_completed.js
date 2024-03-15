import React from 'react';
import Swal from 'sweetalert2';
import './Manager_customers.css';
import Manager_Layout from '../manager_layout/Manager_Layout';

const Manager_customers = () => {
  // Dummy data for demonstration
  const customers = [
    { 
      id: 1, 
      testName: 'Test 1', 
      url: 'http://example.com/test1', 
      testerEmail: 'tester1@example.com', 
      testerName: 'Tester A', 
      customerName: 'Customer 1', 
      createdAt: '2024-03-15 10:00:00', 
      completedAt: '2024-03-16 15:00:00', 
      bugReports: [
        { id: 1, bugName: 'Bug 1', description: 'Description of Bug 1', createdAt: '2024-03-15 11:00:00', completedAt: '2024-03-15 12:00:00', status: 'Resolved' },
        // Add more bug reports if needed
      ]
    },
    { 
      id: 2, 
      testName: 'Test 2', 
      url: 'http://example.com/test2', 
      testerEmail: 'tester2@example.com', 
      testerName: 'Tester B', 
      customerName: 'Customer 2', 
      createdAt: '2024-03-14 09:00:00', 
      completedAt: '2024-03-15 14:00:00', 
      bugReports: [
        { id: 2, bugName: 'Bug 2', description: 'Description of Bug 2', createdAt: '2024-03-14 10:00:00', completedAt: '2024-03-14 11:00:00', status: 'Resolved' },
        // Add more bug reports if needed
      ]
    },
    // Add more customers if needed
  ];

  const handleBugReportClick = (bugReport) => {
    // Display bug report details using SweetAlert
    Swal.fire({
      title: 'Bug Report Details',
      html: `
        <table>
          <tr>
            <td><strong>Bug Name:</strong></td>
            <td>${bugReport.bugName}</td>
          </tr>
          <tr>
            <td><strong>Description:</strong></td>
            <td>${bugReport.description}</td>
          </tr>
          <tr>
            <td><strong>Created At:</strong></td>
            <td>${bugReport.createdAt}</td>
          </tr>
          <tr>
            <td><strong>Completed At:</strong></td>
            <td>${bugReport.completedAt}</td>
          </tr>
          <tr>
            <td><strong>Status:</strong></td>
            <td>${bugReport.status}</td>
          </tr>
        </table>
      `,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
    });
  };

  return (
    <Manager_Layout>
        <div>
      <h2>Customer Details</h2>
      <div className="cards-container">
        {customers.map(customer => (
          <div className="card" key={customer.id}>
            <div className="card-content">
              <h3>{customer.customerName}</h3>
              <table>
                <tbody>
                  <tr>
                    <td><strong>Test Name:</strong></td>
                    <td>{customer.testName}</td>
                  </tr>
                  <tr>
                    <td><strong>URL:</strong></td>
                    <td>{customer.url}</td>
                  </tr>
                  <tr>
                    <td><strong>Tester Name:</strong></td>
                    <td>{customer.testerName}</td>
                  </tr>
                  <tr>
                    <td><strong>Tester Email:</strong></td>
                    <td>{customer.testerEmail}</td>
                  </tr>
                  <tr>
                    <td><strong>Test Accepted At:</strong></td>
                    <td>{customer.createdAt}</td>
                  </tr>
                  <tr>
                    <td><strong>Test Completed At:</strong></td>
                    <td>{customer.completedAt}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <h4>Bug Reports</h4>
                <ul>
                  {customer.bugReports.map(bugReport => (
                    <li key={bugReport.id}>
                      <button onClick={() => handleBugReportClick(bugReport)}>View Bug Report</button>
                      <span>{bugReport.bugName} - {bugReport.status}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Manager_Layout>
  );
};

export default Manager_customers;
