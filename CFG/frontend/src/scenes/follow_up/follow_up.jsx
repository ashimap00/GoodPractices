import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QueriesList.scss';

const queriesData = [
  {
    id: 1,
    beneficiaryName: 'John Doe',
    raisedBy: 'John Doe',
    shgGroupNo: 'SHG001',
    trainerNo: 'T001',
    query: 'Request for financial aid',
    answered: false,
  },
  {
    id: 2,
    beneficiaryName: 'Jane Smith',
    raisedBy: 'Jane Smith',
    shgGroupNo: 'SHG002',
    trainerNo: 'T002',
    query: 'Clarification on training schedule',
    answered: true,
  },
  // Add more mock queries as needed
];

const QueriesList = () => {
  const [queries, setQueries] = useState(queriesData);
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/query-details/${id}`);
  };

  return (
    <div className="queries-list">
      <h2>Queries Raised</h2>
      <table>
        <thead>
          <tr>
            <th>Name of Beneficiary</th>
            <th>Query</th>
            <th>Answered</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query) => (
            <tr
              key={query.id}
              onClick={() => handleRowClick(query.id)}
              className="query-row"
            >
              <td>{query.beneficiaryName}</td>
              <td>{query.query}</td>
              <td>
                <input
                  type="checkbox"
                  checked={query.answered}
                  readOnly
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueriesList;
