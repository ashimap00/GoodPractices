import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShgDetail.scss'; // Import the stylesheet

const SHGDetail = () => {
  const { id } = useParams();
  const [shg, setShg] = useState(null);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch SHG details by ID from an API or use mock data
    const fetchShgDetails = async () => {
      // Replace with actual API call
      const mockShgDetail = {
        id: 1,
        groupNo: 'Group 1',
        numPeople: 20,
        location: 'Location A',
        trainer: 'Trainer X',
        details: 'Detailed information about this SHG...',
        members: [
          { id: 1, name: 'Member A', income: 5000, loans: 1000, skills: 75 },
          { id: 2, name: 'Member B', income: 6000, loans: 500, skills: 50 },
          { id: 3, name: 'Member C', income: 4500, loans: 800, skills: 60 },
        ],
      };
      setShg(mockShgDetail);
      setMembers(mockShgDetail.members);
    };

    fetchShgDetails();
  }, [id]);

  const handleProgressChange = (memberId, field, value) => {
    setMembers(members.map(member =>
      member.id === memberId ? { ...member, [field]: value } : member
    ));
  };

  if (!shg) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shg-detail">
      <h2>{shg.groupNo}</h2>
      <p>Number of People: {shg.numPeople}</p>
      <p>Location: {shg.location}</p>
      <p>Trainer: {shg.trainer}</p>
      <p>{shg.details}</p>

      <div className="member-details">
        <h3>Members</h3>
        {members.map(member => (
          <div key={member.id} className="member">
            <h4>{member.name}</h4>
            <p>Income: ${member.income}</p>
            <p>Loans: ${member.loans}</p>
            <div className="progress-bars">
              <div className="progress-bar">
                <label>Skills</label>
                <input
                  type="number"
                  value={member.skills}
                  min="0"
                  max="100"
                  onChange={(e) => handleProgressChange(member.id, 'skills', e.target.value)}
                />
                <div className="bar">
                  <div
                    className="fill"
                    style={{ width: `${member.skills}%`, backgroundColor: 'green' }}
                  />
                </div>
              </div>
              {/* Add more progress bars as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SHGDetail;
