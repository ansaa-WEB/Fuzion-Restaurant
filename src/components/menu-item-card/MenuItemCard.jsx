import React from 'react';
import { FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';

const MenuItemCard = ({ item, quantity, onAdd, onDecrease }) => {
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

      {/* Cart Controls / Add to Cart Button */}
      <div className="menu-item-cart-action" style={{ padding: '0 20px 20px 20px' }}>
        {quantity === 0 ? (
          <button onClick={onAdd} className="add-to-cart-btn" style={{
            width: '100%',
            backgroundColor: '#c5a059',
            color: '#1a1410',
            border: 'none',
            padding: '10px',
            borderRadius: '25px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontFamily: 'Playfair Display, serif',
            transition: 'all 0.3s ease'
          }}>
            <FaShoppingCart /> Add to Cart
          </button>
        ) : (
          <div className="menu-quantity-controls" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(197, 160, 89, 0.05)',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            borderRadius: '20px',
            overflow: 'hidden',
            padding: '4px'
          }}>
            <button onClick={onDecrease} className="menu-qty-btn" style={{
              backgroundColor: 'transparent',
              color: '#c5a059',
              border: 'none',
              padding: '6px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}>
              <FaMinus size={12} />
            </button>
            <span className="menu-item-qty" style={{
              padding: '0 15px',
              color: '#f5f5f5',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              {quantity}
            </span>
            <button onClick={onAdd} className="menu-qty-btn" style={{
              backgroundColor: 'transparent',
              color: '#c5a059',
              border: 'none',
              padding: '6px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}>
              <FaPlus size={12} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;