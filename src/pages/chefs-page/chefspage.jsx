import React from 'react';
import ChefCard from '../../components/ChefCard/ChefCard';
import './chefspage.css';

const chefsData = [
  {
    id: 1,
    name: 'Chef Gulzar Hussain',
    role: 'EXECUTIVE CHEF',
    experience: '25 years - Traditional Pakistani & Mughlai',
    bio: 'Master of spices, Gulzar Hussain brings decades of experience in creating authentic, rich Mughlai flavors and traditional handi.',
    img: '/images/chef 1.jpg',
  },
  {
    id: 2,
    name: 'Chef Zakir Qureshi',
    role: 'MASTER CHEF',
    experience: '30 years - Desi Cuisine & Fusion',
    bio: 'A household name in Pakistan, Chef Zakir is known for his mastery of traditional BBQ, seekh kababs, and spicy karahi.',
    img: '/images/chef 2.jpg',
  },
  {
    id: 3,
    name: 'Chef Saadat Siddiqi',
    role: 'CELEBRITY CHEF',
    experience: '20 years - Modern Pakistani & Fusion',
    bio: 'Known for giving a modern twist to classic Pakistani dishes, Chef Saadat creates unique, high-end desi dining experiences.',
    img: '/images/chef 3.jpg',
  },
  {
    id: 4,
    name: 'Chef Rahat Ali',
    role: 'CHEF DE CUISINE',
    experience: '18 years - Homestyle Cooking & Regional Specialties',
    bio: 'Rahat Ali specializes in bringing the true taste of home-cooked food and aromatic biryani from various regions of Pakistan.',
    img: '/images/chef 4.jpg',
  },
  {
    id: 5,
    name: 'Chef Shireen Anwar',
    role: 'CULINARY AMBASSADOR',
    experience: '28 years - Baking & Traditional Pakistani',
    bio: 'A respected name in every Pakistani kitchen, Shireen Anwar is celebrated for her expertise in desi sweets, baking, and rich meals.',
    img: '/images/chef 5.jpg',
  },
  {
    id: 6,
    name: 'Chef Mehboob Khan',
    role: 'HEAD CHEF',
    experience: '22 years - BBQ, Tandoor & International Fusion',
    bio: 'Chef Mehboob is famous for his exceptional command over live tandoori naan, grills, and traditional platter presentations.',
    img: '/images/chef 6.jpg',
  }
];

export default function Chefspage() {
  return (
    <div className="chef-page-container">
      {/* Hero Section */}
      <section className="chef-hero-section">
        <div className="chef-hero-overlay"></div>
        <div className="chef-hero-content">
          <span className="chef-breadcrumb">The Experts Behind The Flavors</span>
          <h1 className="chef-hero-title">Meet Our Culinary Masters</h1>
        </div>
      </section>

      {/* Chefs Grid Section (Using ChefCard Component) */}
      <section className="chef-grid-section">
        <div className="chef-cards-grid">
          {chefsData.map((chef) => (
            <ChefCard key={chef.id} chef={chef} />
          ))}
        </div>
      </section>
    </div>
  );
}