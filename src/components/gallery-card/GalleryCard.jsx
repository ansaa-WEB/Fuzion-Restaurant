import React from 'react';

const GalleryCard = ({ item }) => {
  return (
    <div className="gallery-card">
      <div className="gallery-img-wrapper">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="gallery-card-content">
        <span className="gallery-category-tag">{item.category}</span>
        <h3 className="gallery-card-title">{item.title}</h3>
      </div>
    </div>
  );
};

export default GalleryCard;