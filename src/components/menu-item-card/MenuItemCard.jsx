import React from 'react';

const MenuItemCard = ({ item }) => {
  return (
    <div className="menu-item-card">
      {item.tag && <span className="menu-tag">{item.tag}</span>}
      <div className="menu-img-wrapper">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="menu-item-details">
        <div className="menu-item-info">
          <h3>{item.title}</h3>
          <span className="menu-category-sub">{item.category} - {item.calories}</span>
        </div>
        <div className="menu-item-price">Rs. {item.price}</div>
      </div>
    </div>
  );
};

export default MenuItemCard;