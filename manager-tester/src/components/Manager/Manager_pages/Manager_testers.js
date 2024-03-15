import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBFooter } from 'mdb-react-ui-kit';
import ManagerLayout from '../manager_layout/Manager_Layout';
import './Manager_testers.css';

const Manager_testers = () => {
    // Sample data for testers
    const testersData = [
        { id: 1, name: 'John Doe', email: 'john@example.com', available: true, assignedCustomer: null },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', available: false, assignedCustomer: 'Customer B' },
        { id: 3, name: 'Alice Smith', email: 'alice@example.com', available: true, assignedCustomer: null },
        // Add more testers as needed
    ];

    // Check if any tester is available and not assigned to a customer
    const isAvailableNotAssigned = testersData.some(tester => tester.available && !tester.assignedCustomer);

    return (
        <ManagerLayout>
            <h2>Manage Testers</h2>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {testersData.map((tester) => (
                    <MDBCol key={tester.id}>
                        <MDBCard className='h-100 tester-card'>
                            <MDBCardBody>
                                <MDBCardTitle>{tester.name}</MDBCardTitle>
                                <MDBCardText>Email: {tester.email}</MDBCardText>
                                <MDBCardText>Status: {tester.available ? <span className='status-green'>Available</span> : <span className='status-red'>Not Available</span>}</MDBCardText>
                                {tester.assignedCustomer && <MDBCardText>Assigned Customer: {tester.assignedCustomer}</MDBCardText>}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>
            {/* <MDBFooter className="text-center">
                {isAvailableNotAssigned ? (
                    <strong className="text-success">Available</strong>
                ) : (
                    <strong className="text-danger">Not Available</strong>
                )}
            </MDBFooter> */}
        </ManagerLayout>
    );
};

export default Manager_testers;
