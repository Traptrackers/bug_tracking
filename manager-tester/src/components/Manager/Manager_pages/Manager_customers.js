import React, { useState } from 'react';
import './Manager_customers.css';
import Manager_Layout from '../manager_layout/Manager_Layout';

const Manager_customers = () => {
  // Dummy data for demonstration
  const customersData = [
    { id: 1, name: 'Customer 1', email: 'customer1@example.com', assignedTester: 'Tester A', testStatus: 'Testing Blocked' },
    { id: 2, name: 'Customer 2', email: 'customer2@example.com', assignedTester: 'Tester B', testStatus: 'Testing Completed' },
    { id: 3, name: 'Customer 3', email: 'customer3@example.com', assignedTester: 'Tester C', testStatus: 'Testing In Progress' },
    // Add more dummy data if needed
  ];

  const [customers, setCustomers] = useState(customersData);
  const [filterStatus, setFilterStatus] = useState('');

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
    if (event.target.value === '') {
      setCustomers(customersData);
    } else {
      const filteredCustomers = customersData.filter(customer => customer.testStatus === event.target.value);
      setCustomers(filteredCustomers);
    }
  };

  const handleCall = (phone) => {
    // Logic to handle calling the customer
    console.log('Calling', phone);
  };

  const handleEmail = (email) => {
    // Logic to handle emailing the customer
    console.log('Emailing', email);
  };

  const getStatusColor = (testStatus) => {
    switch (testStatus) {
      case 'Testing Completed':
        return 'darkgreen';
      case 'Testing In Progress':
        return 'darkgoldenrod';
      case 'Testing Blocked':
        return 'darkred';
      default:
        return 'black';
    }
  };

  return (
    <Manager_Layout>
      <div>
        <h2>Customers</h2>
        <div className="filter-container">
          <label htmlFor="filter" className='header'>Filter by Test Status : </label>
          <select id="filter" value={filterStatus} onChange={handleFilterChange} style={{ width: '250px', marginLeft: '30px' }}>
            <option value="">All</option>
            <option value="Testing Completed">Testing Completed</option>
            <option value="Testing In Progress">Testing In Progress</option>
            <option value="Testing Blocked">Testing Blocked</option>
          </select>
        </div>

        <div className="cards-container">
          {customers.map(customer => (
            <div className="card" key={customer.id}>
              <div className="card-content">
                <h3>{customer.name}</h3>
                <table>
                  <tbody>
                    <tr>
                      <td><b>Email:</b></td>
                      <td>{customer.email}</td>
                    </tr>
                    <tr>
                      <td><b>Assigned Tester:</b></td>
                      <td>{customer.assignedTester}</td>
                    </tr>
                    <tr>
                      <td><b>Test Status:</b></td>
                      <td style={{ color: getStatusColor(customer.testStatus) }}>{customer.testStatus}</td>
                    </tr>
                    {/* Add more rows if needed */}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Manager_Layout>
  );
};

export default Manager_customers;
