import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand / About Column */}
        <div className="footer-col brand-col">
          <h2 className="footer-logo">FUZION</h2>
          <p className="footer-desc">
            Experience the perfect blend of rich flavors, smoky grills, and a warm ambiance crafted for unforgettable dining moments.
          </p>
        </div>

        {/* Explore Links */}
        <div className="footer-col">
          <h3 className="footer-heading">EXPLORE</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/chefs">Chefs</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* More Links */}
        <div className="footer-col">
          <h3 className="footer-heading">MORE</h3>
          <ul className="footer-links">
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h3 className="footer-heading">CONTACT</h3>
          <p className="footer-text">F-7 Markaz, Islamabad, Pakistan</p>
          <p className="footer-text">+92 300 1234567</p>
          <p className="footer-text">hello@fuzion.com</p>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Fuzion. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;