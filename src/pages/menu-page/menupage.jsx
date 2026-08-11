import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import MenuItemCard from '../../components/menu-item-card/MenuItemCard';
import './menupage.css';

const menuItemsData = [
  // Starters
  { id: 1, title: 'Hot Honey Chicken Wings', category: 'Starters', price: '450', calories: '350 cal', tag: 'CHEF\'S PICK', img: '/images/Chicken Wings.jpg' },
  { id: 2, title: 'Jalapeño Cheese Poppers', category: 'Starters', price: '380', calories: '310 cal', tag: '', img: '/images/Jalapeno Cheese Poppers.jpg' },
  { id: 3, title: 'Chicken Seekh Kebabs', category: 'Starters', price: '490', calories: '290 cal', tag: 'CHEF\'S PICK', img: '/images/Chicken Seekh Kebabs.jpg' },
  { id: 4, title: 'Crispy Fish Fingers', category: 'Starters', price: '550', calories: '310 cal', tag: '', img: '/images/Crispy Fish Fingers.jpg' },
  { id: 5, title: 'Fresh House Salad', category: 'Starters', price: '290', calories: '180 cal', tag: '', img: '/images/Fresh House Salad.jpg' },
  { id: 6, title: 'Masala Fries', category: 'Starters', price: '250', calories: '350 cal', tag: '', img: '/images/Masala Fries.jpg' },

  // Main Course 
  { id: 7, title: 'Special Chicken Biryani', category: 'Main Course', price: '550', calories: '550 cal', tag: 'CHEF\'S PICK', img: '/images/Special Chicken Biryan.jpg' },
  { id: 8, title: 'Chicken Shinwari Karahi', category: 'Main Course', price: '950', calories: '620 cal', tag: 'CHEF\'S PICK', img: '/images/Chicken Shinwari Karahi.jpg' },
  { id: 9, title: 'Zinger Burger with Fries', category: 'Main Course', price: '580', calories: '650 cal', tag: '', img: '/images/Zinger Burger with Fries.jpg' },
  { id: 10, title: 'Smokey BBQ Chicken Burger', category: 'Main Course', price: '620', calories: '540 cal', tag: '', img: '/images/Smokey BBQ Chicken Burger.jpg' },
  { id: 11, title: 'Crispy Chicken Roll Paratha', category: 'Main Course', price: '320', calories: '480 cal', tag: 'CHEF\'S PICK', img: '/images/Crispy Chicken Roll Paratha.jpg' },
  { id: 12, title: 'Chicken Cheese Naan', category: 'Main Course', price: '450', calories: '590 cal', tag: '', img: '/images/Chicken Cheese Naan.jpg' },
  { id: 13, title: 'Special Chicken White Karahi', category: 'Main Course', price: '1050', calories: '700 cal', tag: 'CHEF\'S PICK', img: '/images/Special Chicken White Karahi.jpg' },

  // Desserts
  { id: 14, title: 'Classic Caramel Custard', category: 'Desserts', price: '280', calories: '310 cal', tag: '', img: '/images/Classic Caramel Custard.jpg' },
  { id: 15, title: 'Chocolate Fudge Brownie', category: 'Desserts', price: '350', calories: '480 cal', tag: '', img: '/images/Chocolate Fudge Brownie.jpg' },
  { id: 16, title: 'Chocolate Lava Cake', category: 'Desserts', price: '450', calories: '450 cal', tag: '', img: '/images/Chocolate Lava Cake.jpg' },
  { id: 17, title: 'Special Custard Trifle', category: 'Desserts', price: '280', calories: '360 cal', tag: '', img: '/images/Special Custard Trifle.jpg' },

  // Beverages
  { id: 18, title: 'Cold Chocolate Frappe', category: 'Beverages', price: '380', calories: '320 cal', tag: 'CHEF\'S PICK', img: '/images/Cold Chocolate Frappe.jpg' },
  { id: 19, title: 'Creamy Oreo Shake', category: 'Beverages', price: '390', calories: '410 cal', tag: 'CHEF\'S PICK', img: '/images/Creamy Oreo Shake.jpg' },
  { id: 20, title: 'Fresh Mint Mojito', category: 'Beverages', price: '320', calories: '140 cal', tag: '', img: '/images/Fresh Mint Mojito.jpg' },
  { id: 21, title: 'Classic Cappuccino Coffee', category: 'Beverages', price: '350', calories: '140 cal', tag: '', img: '/images/Classic Cappuccino coffee.jpg' }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { cart, addToCart, decreaseQuantity } = useCart();

  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

  const filteredItems = activeCategory === 'All' 
    ? menuItemsData 
    : menuItemsData.filter(item => item.category === activeCategory);

  const totalCartItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);

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
          {filteredItems.map((item) => {
            const cartItem = cart.find((cItem) => Number(cItem.id) === Number(item.id));
            const quantity = cartItem ? cartItem.quantity : 0;

            const formattedItem = {
              id: item.id,
              name: item.title,
              price: Number(item.price),
              image: item.img
            };

            return (
              <div key={item.id} className="menu-card-wrapper-with-cart">
                <MenuItemCard 
                  item={item} 
                  quantity={quantity}
                  onAdd={() => addToCart(formattedItem)}
                  onDecrease={() => decreaseQuantity(item.id)}
                />
              </div>
            );
          })}
        </div>
      </section>

     {/* Floating Go to Cart Bar */}
      {totalCartItems > 0 && (
        <div style={{
          position: 'fixed',
          bottom: '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#1e1611',
          border: '1.5px solid #d4af37',
          padding: '12px 30px',
          borderRadius: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
          zIndex: 9999
        }}>
          <span style={{ color: '#f3e5ab', fontWeight: 'bold', fontSize: '15px' }}>
            🛒 {totalCartItems} items added
          </span>
          <Link to="/cart" style={{
            background: 'linear-gradient(135deg, #d4af37, #aa8c2c)',
            color: '#120d0b',
            padding: '10px 20px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '14px',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
          }}>
            View Cart & Checkout →
          </Link>
        </div>
      )}
    </div>
  );
}