import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './blogpage.css';

const allBlogPosts = [
  {
    id: 1,
    title: 'The Art of Slow-Cooking Authentic Biryani',
    category: 'Traditional Recipes',
    date: 'August 6, 2026',
    excerpt: 'Discover the heritage and intricate spice blends that give our signature biryani its legendary rich flavor and aroma.',
    images: [
      '/images/biyani blog 1.jpg',
      '/images/biyani blog 2.jpg',
      '/images/biyani blog 3.jpg'
    ]
  },
  {
 id: 2,
    title: 'Crafting the Ultimate Juicy Burger at Home',
    category: 'Kitchen Secrets',
    date: 'August 9, 2026',
    excerpt: 'Learn how meat fat ratios, secret sauces, and toasted brioche buns combine to make the perfect burger experience.',
    images: [
      '/images/burger blog 1.jpg',
      '/images/burger blog 2.jpg',
      '/images/buger blog 3.jpg'
    ]
  },
  {
    id: 3,
    title: 'Fine Dining Etiquette & The Perfect Ambiance',
    category: 'Dining Experience',
    date: 'August 1, 2026',
    excerpt: 'Why lighting, soothing background melodies, and elegant table setups elevate a simple meal into an unforgettable evening.',
    images: [
      '/images/img_1517248135467-4c7edcad34c4.jpg',
      '/images/img_1550966871-3ed3cdb5ed0c.jpg',
      '/images/img_1578474846511-04ba529f0b88.jpg'
    ]
  },
  {
    id: 4,
    title: 'The Secret to Crispy & Juicy Seekh Kebabs',
    category: 'Traditional Recipes',
    date: 'July 28, 2026',
    excerpt: 'Learn how proper meat mincing and charcoal grilling give our seekh kebabs their distinct melt-in-mouth texture.',
    images: [
      '/images/Crispy & Juicy Seekh Kebabs  blog 1.jpg',
      '/images/Crispy & Juicy Seekh Kebabs  blog 2.jpg',
      '/images/img_1544025162-d76694265947.jpg'
    ]
  },
  {
    id: 5,
    title: 'Refreshing Summer Mocktails & Special Drinks',
    category: 'Beverages',
    date: 'July 22, 2026',
    excerpt: 'Explore our exotic range of mint lemonades, mango smoothies, and cold brews designed to beat the summer heat.',
    images: [
      '/images/Special Drinks blog 1.avif',
      '/images/Special Drinks blog 2.jpg',
      '/images/Special Drinks blog 3.jpg'
    ]
  },
  {
    id: 6,
    title: 'Indulging in Royal Desserts: From Tiramisu to Gulab Jamun',
    category: 'Chef Special',
    date: 'July 15, 2026',
    excerpt: 'A sweet journey exploring how we blend classic Italian desserts with rich traditional South Asian sweets.',
    images: [
      '/images/From Tiramisu to Gulab Jamun blog 1.jpg',
      '/images/From Tiramisu to Gulab Jamun blog 2.jpg',
      '/images/From Tiramisu to Gulab Jamun blog 3.jpg'
    ]
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const categories = ['All', 'Traditional Recipes', 'Chef Special', 'Dining Experience', 'Beverages'];

  const filteredPosts = activeCategory === 'All' 
    ? allBlogPosts 
    : allBlogPosts.filter(post => post.category === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
    }
  };

  return (
    <div className="blog-page-container">
      {/* Hero Section */}
      <section className="blog-hero-section">
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <span className="blog-breadcrumb">Latest Stories & Updates</span>
          <h1 className="blog-hero-title">Our Culinary Journal</h1>
          <p className="blog-hero-subtitle">Stories, recipes, and insights straight from our kitchen to your table.</p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="blog-content-section">
        {/* Category Filter Buttons */}
        <div className="blog-filter-container">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`blog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              {/* Card Header Content */}
              <div className="blog-card-content">
                <div className="blog-header-row">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-category-badge">{post.category}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>

              {/* Magazine Style Layout: 1 Big Main Image + 2 Side-by-Side Sub Images */}
              <div className="blog-magazine-gallery">
                <div className="blog-main-img-box">
                  <img src={post.images[0]} alt={`${post.title} Main`} />
                </div>
                <div className="blog-sub-imgs-row">
                  <div className="blog-sub-img-box">
                    <img src={post.images[1]} alt={`${post.title} 2`} />
                  </div>
                  <div className="blog-sub-img-box">
                    <img src={post.images[2]} alt={`${post.title} 3`} />
                  </div>
                </div>
              </div>

              <div className="blog-footer-action">
                {/* Yahan onClick function add kar diya hai jo user ko blog detail page par le jaye ga */}
                <button 
                  className="blog-read-btn" 
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  Read Full Article →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / Call to Action Box */}
        <div className="blog-newsletter-box">
          <h2>Subscribe to Our Foodie Newsletter</h2>
          <p>Get exclusive recipes, secret chef tips, and special reservation discounts directly in your inbox.</p>
          {subscribed ? (
            <p className="success-message" style={{ color: '#d4af37', fontWeight: 'bold', marginTop: '15px' }}>
              🎉 Thank you for subscribing! Check your inbox soon.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}