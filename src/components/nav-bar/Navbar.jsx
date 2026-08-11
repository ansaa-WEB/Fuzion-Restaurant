import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">Fuzion</Link>
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
        <Link to="/menu" onClick={() => setIsOpen(false)}>MENU</Link>
        <Link to="/chefs" onClick={() => setIsOpen(false)}>CHEFS</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>GALLERY</Link>
        <Link to="/testimonials" onClick={() => setIsOpen(false)}>TESTIMONIALS</Link>
        <Link to="/blog" onClick={() => setIsOpen(false)}>BLOG</Link>
        <Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
      </div>

      <div className="navbar-actions">
        {/* Cart Icon Link */}
        <Link to="/cart" className="cart-icon-link" onClick={() => setIsOpen(false)}>
          <div className="cart-icon-wrapper">
            <FaShoppingCart />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </div>
        </Link>

        <Link to="/reservation" className="reserve-btn">Reserve table</Link>
        
        <Link to="/auth" className="user-icon-link" onClick={() => setIsOpen(false)}>
          <div className="user-icon">
            <FaUser />
          </div>
        </Link>
        
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}