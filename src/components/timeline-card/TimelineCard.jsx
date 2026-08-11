import React from 'react';

const TimelineCard = ({ year, description }) => {
  return (
    <div className="timeline-card">
      <div className="timeline-dot"></div>
      <h3>{year}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TimelineCard;