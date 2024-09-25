import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddShg.scss'; // Import the stylesheet

const AddShg = () => {
  const [groupNo, setGroupNo] = useState('');
  const [location, setLocation] = useState('');
  const [trainer, setTrainer] = useState('');
  const [members, setMembers] = useState([{ name: '', income: '', loans: '', skills: '', region: '' }]);
  const navigate = useNavigate();

  const handleAddMember = () => {
    setMembers([...members, { name: '', income: '', loans: '', skills: '', region: '' }]);
  };

  const handleMemberChange = (index, event) => {
    const newMembers = members.slice();
    newMembers[index][event.target.name] = event.target.value;
    setMembers(newMembers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newShg = {
      id: Date.now(), // Unique ID
      groupNo,
      location,
      trainer,
      numPeople: members.length,
      members,
    };
    // Replace with actual API call to save the new SHG
    console.log(newShg);

    // Redirect to SHG listing page
    navigate('/shg-listing');
  };

  return (
    <div className="add-shg">
      <h2>Add New SHG</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Group Name:</label>
          <input type="text" value={groupNo} onChange={(e) => setGroupNo(e.target.value)} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Trainer:</label>
          <input type="text" value={trainer} onChange={(e) => setTrainer(e.target.value)} />
        </div>
        <div className="members">
          <label>Members:</label>
          {members.map((member, index) => (
            <div key={index} className="member-form">
              <input
                type="text"
                name="name"
                value={member.name}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Name"
                required
              />
              <input
                type="number"
                name="income"
                value={member.income}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Income"
                required
              />
              <input
                type="number"
                name="loans"
                value={member.loans}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Loans"
                required
              />
              <input
                type="number"
                name="skills"
                value={member.skills}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Skills"
                min="0"
                max="100"
                required
              />
              <input
                type="text"
                name="region"
                value={member.region}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Region"
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddMember}>+ Add Member</button>
        </div>
        <button type="submit">Save SHG</button>
      </form>
    </div>
  );
};

export default AddShg;
