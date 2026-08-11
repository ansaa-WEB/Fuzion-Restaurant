import React, { useState } from 'react';
import GalleryCard from '../../components/gallery-card/GalleryCard';
import './gallerypage.css';

const galleryData = [
  { id: 1, category: 'food', title: 'Special Chicken Biryani', img: '/images/Special Chicken Biryan.jpg' },
  { id: 2, category: 'food', title: 'Loaded Cheese Pizza', img: '/images/Loaded Cheese Pizza.jpg' },
  { id: 3, category: 'food', title: 'Chicken Shinwari Karahi', img: '/images/Chicken Shinwari Karahi.jpg' },
  { id: 4, category: 'food', title: 'Chicken Seekh Kebabs', img: '/images/Chicken Seekh Kebabs.jpg' },
  { id: 5, category: 'food', title: 'Spicy Garlic Chicken Bites', img: '/images/Spicy Garlic Chicken Bites.jpg' },
  { id: 6, category: 'food', title: 'Special Zinger Burger', img: '/images/Zinger Burger with Fries.jpg' },
  { id: 7, category: 'interior', title: 'Main Dining Hall', img: '/images/img_1517248135467-4c7edcad34c4.jpg' },
  { id: 8, category: 'interior', title: 'Luxury Ambience & Seating', img: '/images/img_1552566626-52f8b828add9.jpg' },
  { id: 9, category: 'interior', title: 'Cozy Private Booths', img: '/images/img_1537047902294-62a40c20a6ae.jpg' },
  { id: 10, category: 'interior', title: 'Rooftop Dining Setup', img: '/images/img_1544148103-0773bf10d330.jpg' },
  { id: 11, category: 'drinks', title: 'Fresh Mango Smoothie', img: '/images/fresh Mango Smoothie.jpg' },
  { id: 12, category: 'drinks', title: 'Cold Brew Iced Coffee', img: '/images/Cold Brew Iced Coffee.jpg' },
  { id: 13, category: 'drinks', title: 'Mint Lemonade Refresher', img: '/images/Mint Lemonade Refresher.jpg' },
  { id: 14, category: 'desserts', title: 'Chocolate Lava Cake', img: '/images/Chocolate Lava Cake.jpg' },
  { id: 15, category: 'desserts', title: 'Classic Italian Tiramisu', img: '/images/Classic Italian Tiramisu.jpg' },
  { id: 16, category: 'desserts', title: 'Classic Three Milk Cake', img: '/images/Classic Three Milk Cake.jpg' }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="gallery-page-container">
      {/* Hero Section */}
      <section className="gallery-hero-section">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <span className="gallery-breadcrumb">Explore Our Moments</span>
          <h1 className="gallery-hero-title">Our Gallery</h1>
          <p className="gallery-hero-subtitle">A visual journey through our ambiance, dishes, and joyful experiences.</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="gallery-filter-buttons">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'food' ? 'active' : ''} onClick={() => setFilter('food')}>Food</button>
        <button className={filter === 'interior' ? 'active' : ''} onClick={() => setFilter('interior')}>Interior</button>
        <button className={filter === 'drinks' ? 'active' : ''} onClick={() => setFilter('drinks')}>Drinks</button>
        <button className={filter === 'desserts' ? 'active' : ''} onClick={() => setFilter('desserts')}>Desserts</button>
      </div>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="gallery-cards-grid">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}