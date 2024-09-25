import React from 'react';
import { Link } from 'react-router-dom';
import './ShgWidget.scss';

const SHGWidget = ({ shg }) => {
  return (
    <div className="shg-widget">
      <h3>{shg.groupNo}</h3>
      <p>Number of People: {shg.numPeople}</p>
      <p>Location: {shg.location}</p>
      <p>Trainer: {shg.trainer}</p>
      <Link to={`/shg/${shg.id}`}>View Details</Link>
    </div>
  );
};

export default SHGWidget;
