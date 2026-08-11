import React, { useState } from 'react';
import MenuItemCard from '../../components/menu-item-card/MenuItemCard';
import './menupage.css';

const menuItemsData = [
  // Starters
  { id: 1, title: 'Hot Honey Chicken Wings', category: 'Starters', price: '650', calories: '350 cal', tag: 'CHEF\'S PICK', img: '/images/Chicken Wings.jpg' },
  { id: 2, title: 'Jalapeño Cheese Poppers', category: 'Starters', price: '550', calories: '310 cal', tag: '', img: '/images/Jalapeno Cheese Poppers.jpg' },
  { id: 3, title: 'Chicken Seekh Kebabs', category: 'Starters', price: '750', calories: '290 cal', tag: 'CHEF\'S PICK', img: '/images/Chicken Seekh Kebabs.jpg' },
  { id: 4, title: 'Crispy Fish Fingers', category: 'Starters', price: '700', calories: '310 cal', tag: '', img: '/images/Crispy Fish Fingers.jpg' },
  { id: 5, title: 'Fresh House Salad', category: 'Starters', price: '500', calories: '180 cal', tag: '', img: '/images/Fresh House Salad.jpg' },
  { id: 6, title: 'Masala Fries', category: 'Starters', price: '450', calories: '350 cal', tag: '', img: '/images/Masala Fries.jpg' },

  // Main Course 
  { id: 7, title: 'Special Chicken Biryani', category: 'Main Course', price: '850', calories: '550 cal', tag: 'CHEF\'S PICK', img: '/images/Special Chicken Biryan.jpg' },
  { id: 8, title: 'Chicken Shinwari Karahi', category: 'Main Course', price: '1350', calories: '620 cal', tag: 'CHEF\'S PICK', img: '/images/Chicken Shinwari Karahi.jpg' },
  { id: 9, title: 'Zinger Burger with Fries', category: 'Main Course', price: '800', calories: '650 cal', tag: '', img: '/images/Zinger Burger with Fries.jpg' },
  { id: 10, title: 'Smokey BBQ Chicken Burger', category: 'Main Course', price: '700', calories: '540 cal', tag: '', img: '/images/Smokey BBQ Chicken Burger.jpg' },
  { id: 11, title: 'Crispy Chicken Roll Paratha', category: 'Main Course', price: '450', calories: '480 cal', tag: 'CHEF\'S PICK', img: '/images/Crispy Chicken Roll Paratha.jpg' },
  { id: 12, title: 'Chicken Cheese Naan', category: 'Main Course', price: '650', calories: '590 cal', tag: '', img: '/images/Chicken Cheese Naan.jpg' },
  { id: 13, title: 'Special Chicken White Karahi', category: 'Main Course', price: '1450', calories: '700 cal', tag: 'CHEF\'S PICK', img: '/images/Special Chicken White Karahi.jpg' },

  // Desserts
  { id: 14, title: 'Classic Caramel Custard', category: 'Desserts', price: '400', calories: '310 cal', tag: '', img: '/images/Classic Caramel Custard.jpg' },
  { id: 15, title: 'Chocolate Fudge Brownie', category: 'Desserts', price: '550', calories: '480 cal', tag: '', img: '/images/Chocolate Fudge Brownie.jpg' },
  { id: 16, title: 'Chocolate Lava Cake', category: 'Desserts', price: '900', calories: '450 cal', tag: '', img: '/images/Chocolate Lava Cake.jpg' },
  { id: 17, title: 'Special Custard Trifle', category: 'Desserts', price: '400', calories: '360 cal', tag: '', img: '/images/Special Custard Trifle.jpg' },

  // Beverages
  { id: 18, title: 'Cold Chocolate Frappe', category: 'Beverages', price: '550', calories: '320 cal', tag: 'CHEF\'S PICK', img: '/images/Cold Chocolate Frappe.jpg' },
  { id: 19, title: 'Creamy Oreo Shake', category: 'Beverages', price: '550', calories: '410 cal', tag: 'CHEF\'S PICK', img: '/images/Creamy Oreo Shake.jpg' },
  { id: 20, title: 'Fresh Mint Mojito', category: 'Beverages', price: '550', calories: '140 cal', tag: '', img: '/images/Fresh Mint Mojito.jpg' },
  { id: 21, title: 'Classic Cappuccino Coffee', category: 'Beverages', price: '450', calories: '140 cal', tag: '', img: '/images/Classic Cappuccino coffee.jpg' }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

  const filteredItems = activeCategory === 'All' 
    ? menuItemsData 
    : menuItemsData.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page-container">
      {/* Hero Section */}
      <section className="menu-hero-section">
        <div className="menu-hero-overlay"></div>
        <div className="menu-hero-content">
          <span className="menu-breadcrumb">Explore Our Delicious Selection</span>
          <h1 className="menu-hero-title">Our Menu</h1>
        </div>
      </section>

      {/* Category Filter Buttons */}
      <section className="menu-filter-section">
        <div className="filter-buttons-wrapper">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Grid Items */}
      <section className="menu-grid-section">
        <div className="menu-cards-grid">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}