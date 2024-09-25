import React from 'react';
import './ProgressBar.scss'; 

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div key={index} className="progress-step">
          <div className={`circle ${index < currentStep ? 'active' : ''}`}>
            {index + 1}
          </div>
          {index < steps.length - 1 && <div className="line"></div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;