import React from 'react';

const ContactInfoCard = ({ icon, title, content }) => {
  return (
    <div className="contact-info-card">
      <div className="contact-icon-box">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;