import React from 'react';
import { useParams } from 'react-router-dom';
import './QueryDetails.scss';

// Mock data (In a real application, fetch this data from an API)
const queryDetailsData = [
  {
    id: 1,
    beneficiaryName: 'John Doe',
    raisedBy: 'John Doe',
    shgGroupNo: 'SHG001',
    trainerNo: 'T001',
    query: 'Request for financial aid',
    details: 'Details about the financial aid request...',
    answered: false,
  },
  {
    id: 2,
    beneficiaryName: 'Jane Smith',
    raisedBy: 'Jane Smith',
    shgGroupNo: 'SHG002',
    trainerNo: 'T002',
    query: 'Clarification on training schedule',
    details: 'Details about the training schedule...',
    answered: true,
  },
  // Add more mock queries as needed
];

const QueryDetails = () => {
  const { id } = useParams();
  const query = queryDetailsData.find((q) => q.id === parseInt(id, 10));

  if (!query) {
    return <div>Query not found</div>;
  }

  return (
    <div className="query-details">
      <h2>Query Details</h2>
      <p><strong>Name of Beneficiary:</strong> {query.beneficiaryName}</p>
      <p><strong>Raised By:</strong> {query.raisedBy}</p>
      <p><strong>SHG Group No:</strong> {query.shgGroupNo}</p>
      <p><strong>Trainer No:</strong> {query.trainerNo}</p>
      <p><strong>Query:</strong> {query.query}</p>
      <p><strong>Details:</strong> {query.details}</p>
      <p><strong>Answered:</strong> {query.answered ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default QueryDetails;
