import React from 'react';

const HomeCard = ({ image, title, price, description, onReadMore }) => {
  return (
    <div className="menu-card-light">
      <img src={image} alt={title} className="card-img" />
      <div className="card-info">
        <h3>{title}</h3>
        <span className="card-price">{price}</span>
      </div>
      <p className="card-desc">{description}</p>
      <button 
        onClick={onReadMore} 
        className="card-read-more" 
        style={{background: 'none', border: 'none', borderTop: '1px solid var(--border-light)', width: '100%', cursor: 'pointer'}}
      >
        READ MORE
      </button>
    </div>
  );
};

export default HomeCard;