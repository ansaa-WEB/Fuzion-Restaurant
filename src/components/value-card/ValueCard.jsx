import React from 'react';

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="value-card">
      <div className="value-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ValueCard;