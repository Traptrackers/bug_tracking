import React, { useState } from 'react';
import Manager_Layout from '../manager_layout/Manager_Layout';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './manager_work.css';

const Manager_work = () => {
  const [workData, setWorkData] = useState([
    { id: 1, tester: 'Tester 1', client: 'Client 1', status: 'Under Review', reason: '', testLog: '', instructions: '' },
    { id: 2, tester: 'Tester 2', client: 'Client 2', status: 'Under Review', reason: '', testLog: '', instructions: '' },
    { id: 3, tester: 'Tester 3', client: 'Client 3', status: 'Under Review', reason: '', testLog: '', instructions: '' },
    // Add more sample data as needed
  ]);

  const [testers, setTesters] = useState([
    { id: 1, name: 'Tester 1', availability: 'Available' },
    { id: 2, name: 'Tester 2', availability: 'Busy' },
    { id: 3, name: 'Tester 3', availability: 'Available' },
    // Add more dummy data if needed
  ]);

  const handleBlockTesting = (id) => {
    Swal.fire({
      title: 'Block Testing',
      html:
        `<label for="reason" class="swal2-label">Reason<span class="swal2-required">*</span></label>` +
        `<input id="reason" class="swal2-input" placeholder="Enter reason..." required>` +
        `<label for="testLog" class="swal2-label">Test Log</label>` +
        `<textarea id="testLog" class="swal2-textarea" placeholder="Enter test log..."></textarea>` +
        `<label for="instructions" class="swal2-label">Instructions</label>` +
        `<textarea id="instructions" class="swal2-textarea" placeholder="Enter instructions..."></textarea>`,
      focusConfirm: false,
      preConfirm: () => {
        const reason = Swal.getPopup().querySelector('#reason').value;
        const testLog = Swal.getPopup().querySelector('#testLog').value;
        const instructions = Swal.getPopup().querySelector('#instructions').value;
        return { reason, testLog, instructions };
      },
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Block',
      customClass: {
        title: 'swal2-title-custom',
        content: 'swal2-content-custom',
        confirmButton: 'swal2-confirm-button-custom',
        cancelButton: 'swal2-cancel-button-custom'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const { reason, testLog, instructions } = result.value;
        if (!reason) {
          Swal.showValidationMessage('Reason is required');
          return;
        }
        const updatedWorkData = workData.map((work) =>
          work.id === id ? { ...work, status: 'Testing Blocked', reason, testLog, instructions } : work
        );
        setWorkData(updatedWorkData);
      }
    });
  };

  const handleResumeTesting = (id) => {
    Swal.fire({
      title: 'Testing Resumed',
      text: 'Do you want to resume testing?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Resume',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedWorkData = workData.map((work) =>
          work.id === id ? { ...work, status: 'Testing in Process', reason: '', testLog: '', instructions: '' } : work
        );
        setWorkData(updatedWorkData);
      }
    });
  };

  const handleCompleteTesting = (id) => {
    Swal.fire({
      title: 'Testing Completed',
      text: 'Do you want to mark testing as completed?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Mark as Completed',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedWorkData = workData.filter((work) => work.id !== id);
        setWorkData(updatedWorkData);
      }
    });
  };

  const handleAssignTester = (id) => {
    Swal.fire({
      title: 'Assign Tester',
      text: 'Select an available tester:',
      input: 'select',
      inputOptions: testers.reduce((options, tester) => {
        if (tester.availability === 'Available') {
          options[tester.name] = tester.name;
        }
        return options;
      }, {}),
      inputPlaceholder: 'Select a tester',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Assign',
      customClass: {
        title: 'swal2-title-custom',
        content: 'swal2-content-custom',
        confirmButton: 'swal2-confirm-button-custom',
        cancelButton: 'swal2-cancel-button-custom'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const tester = result.value;
        const updatedWorkData = workData.map((work) =>
          work.id === id ? { ...work, status: 'Testing in Process', tester } : work
        );
        setWorkData(updatedWorkData);
      }
    });
  };
  

  return (
    <Manager_Layout>
      <div className='box'>
        <h2>Work In Process</h2>
        {workData.map((work) => (
          <span className='display' key={work.id}>
            <div className='maininside'>
              <div className='inside'>
                <h6>Tester</h6>
                <h4>{work.tester}</h4>
              </div>
              <div className='inside'>
                <h6>Client</h6>
                <h4>{work.client}</h4>
              </div>
              <div className='inside'>
                <h6>Work status</h6>
                <h4 style={{ width: '120%' }}>{work.status}</h4>
                {(work.status !== 'Testing Blocked' && work.reason) && <p>Reason: {work.reason}</p>}
                {work.testLog && <p>Test Log: {work.testLog}</p>}
                {work.instructions && <p>Instructions: {work.instructions}</p>}
              </div>
              <div className='inside'>
                {(work.status === 'Under Review') && (
                  <button className='assign' onClick={() => handleAssignTester(work.id)}>Assign Tester</button>
                )}
                {(work.status === 'Testing in Process') && (
                  <button className='block' onClick={() => handleBlockTesting(work.id)}>Block Testing</button>
                )}
                {(work.status === 'Testing in Process' || work.status === 'Testing Blocked') && (
                  <button className='complete' onClick={() => handleCompleteTesting(work.id)}>Testing Completed</button>
                )}
                {(work.status === 'Testing Blocked') && (
                  <button className='resume' onClick={() => handleResumeTesting(work.id)}>Resume Testing</button>
                )}
              </div>
            </div>
          </span>
        ))}
      </div>
    </Manager_Layout>
  );
};

export default Manager_work;
