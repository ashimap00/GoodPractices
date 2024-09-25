import React, { useState } from 'react';
import './learningModule.css';

const LearningModule = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleModuleClick = (index) => {
    setActiveModule(index);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setActiveModule(null);
  };

  const getVideoUrl = (index) => {
    const videoUrls = [
      'https://www.youtube.com/embed/VIDEO_ID_1', // Module 1
      'https://www.youtube.com/embed/VIDEO_ID_2', // Module 2
      'https://www.youtube.com/embed/VIDEO_ID_3', // Module 3
    ];
    return videoUrls[index];
  };

  return (
    <div className="learning-module-container">
      <h1 className="page-heading">Learning Modules</h1>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup}>
              &times;
            </button>
            {activeModule < 3 ? (
              <iframe
                width="100%"
                height="100%"
                src={getVideoUrl(activeModule)}
                title={`Module ${activeModule + 1} Video`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : activeModule === 3 ? (
              <div className="module-content">
                <h2>Self-Help Groups (SHGs): Overview</h2>
                <p>
                  Self-Help Groups (SHGs) are community-based organizations typically consisting of 10-20 members.
                  They are formed with the aim of providing financial services and mutual support to their members.
                  SHGs often focus on improving the socio-economic conditions of their members through savings,
                  micro-loans, and income-generating activities.
                </p>
                <p>
                  Key Features:
                  <ul>
                    <li><b>Group Savings:</b> Members contribute to a common fund which is used to provide loans.</li>
                    <li><b>Micro-Loans:</b> SHGs provide small loans to members to support income-generating activities.</li>
                    <li><b>Skill Development:</b> Training and workshops are often organized to enhance skills.</li>
                    <li><b>Community Support:</b> SHGs foster a sense of community and mutual support among members.</li>
                  </ul>
                </p>
              </div>
            ) : activeModule === 4 ? (
              <div className="module-content">
                <h2>Case Studies of Successful Self-Help Groups</h2>
                <p>
                  <b>1. SHG in Rural India:</b> In a rural village in India, a group of women formed an SHG to improve their
                  economic conditions. Through collective savings and loans, they started a small garment business that
                  significantly improved their household incomes.
                </p>
                <p>
                  <b>2. SHG for Health and Education:</b> An SHG in Bangladesh focused on improving health and education
                  by pooling resources. They built a community clinic and established a local school, benefiting many
                  families in the area.
                </p>
                <p>
                  <b>3. SHG for Agricultural Development:</b> An SHG in Kenya worked together to adopt modern farming
                  techniques. They shared knowledge, tools, and resources, leading to increased crop yields and better
                  food security for the community.
                </p>
              </div>
            ) : activeModule === 5 ? (
              <div className="quiz">
                <h2>Quiz: (Module 6)</h2>
                <div className="question">
                  <p><b>Question 1: What is the primary purpose of an NGO?</b></p>
                  <label><input type="radio" name="q1" /> a) To generate profit</label><br />
                  <label><input type="radio" name="q1" /> b) To provide social services and support to various causes</label><br />
                  <label><input type="radio" name="q1" /> c) To operate as a governmental body</label><br />
                  <label><input type="radio" name="q1" /> d) To run a business</label>
                </div>
                <div className="question">
                  <p><b>Question 2: Which of the following is a common area of focus for many NGOs?</b></p>
                  <label><input type="radio" name="q2" /> a) Space exploration</label><br />
                  <label><input type="radio" name="q2" /> b) Environmental conservation</label><br />
                  <label><input type="radio" name="q2" /> c) Corporate mergers</label><br />
                  <label><input type="radio" name="q2" /> d) Stock market trading</label>
                </div>
                <div className="question">
                  <p><b>Question 3: How are most NGOs funded?</b></p>
                  <label><input type="radio" name="q3" /> a) Through stock market investments</label><br />
                  <label><input type="radio" name="q3" /> b) By charging fees for services</label><br />
                  <label><input type="radio" name="q3" /> c) Through donations, grants, and fundraising</label><br />
                  <label><input type="radio" name="q3" /> d) By selling products</label>
                </div>
              </div>
            ) : (
              <p>Module {activeModule + 1} content paragraph.</p>
            )}
          </div>
        </div>
      )}
      {[...Array(6)].map((_, index) => (
        <div key={index} className="module-card">
          <h3 onClick={() => handleModuleClick(index)} className="module-title">
            Module {index + 1}
          </h3>
          <button className="language-button">
            Choose Language
          </button>
        </div>
      ))}
    </div>
  );
};

export default LearningModule;