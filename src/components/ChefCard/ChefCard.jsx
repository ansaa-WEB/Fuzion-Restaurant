import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ChefCard = ({ chef }) => {
  return (
    <div className="chef-card">
      <div className="chef-img-wrapper">
        <img src={chef.img} alt={chef.name} />
        <div className="chef-social-overlay">
          <a href="#facebook" className="social-icon"><FaFacebookF /></a>
          <a href="#instagram" className="social-icon"><FaInstagram /></a>
          <a href="#linkedin" className="social-icon"><FaLinkedinIn /></a>
        </div>
      </div>
      <div className="chef-info">
        <h3>{chef.name}</h3>
        <span className="chef-role">{chef.role}</span>
        <span className="chef-exp">{chef.experience}</span>
        <p className="chef-bio">{chef.bio}</p>
      </div>
    </div>
  );
};

export default ChefCard;