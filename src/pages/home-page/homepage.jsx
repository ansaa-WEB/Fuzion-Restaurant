import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Starters');
  const [currentReview, setCurrentReview] = useState(0);

  // Categories ka data (Har category ke 4 items)
  const menuCategories = {
    Starters: [
      { name: 'Garlic Cheese Bread', price: 'Rs. 750', badge: 'Starter', img: '/images/Garlic Cheese Bread.jpg' },
      { name: 'Crispy Chicken Fingers', price: 'Rs. 990', badge: 'Starter', img: '/images/Crispy Chicken Fingers.jpg' },
      { name: 'Loaded Nachos with Cheese', price: 'Rs. 1100', badge: 'Starter', img: '/images/Loaded Nachos with Cheese.jpg' },
      { name: 'Loaded Jalapeño Cheese Fries', price: 'Rs. 890', badge: 'Hot', img: '/images/Loaded Jalapeno Cheese Fries.jpg' }
    ],
    'Main Course': [
      { name: 'Grilled Steak', price: 'Rs. 2500', badge: 'Chef Choice', img: '/images/Grilled Steak.jpg' },
      { name: 'Truffle Pasta', price: 'Rs. 2200', badge: 'Popular', img: '/images/Truffle Pasta.jpg' },
      { name: 'Classic Burger', price: 'Rs. 1500', badge: 'Juicy', img: '/images/Classic Burger.jpg' },
      { name: 'Grilled Chicken', price: 'Rs. 1800', badge: 'Spicy', img: '/images/Grilled Chicken.jpg' }
    ],
    Desserts: [
      { name: 'Chocolate Lava Cake', price: 'Rs. 850', badge: 'Sweet', img: '/images/Chocolate Lava Cake.jpg' },
      { name: 'Classic Tiramisu', price: 'Rs. 990', badge: 'Classic', img: '/images/Classic Italian Tiramisu.jpg' },
      { name: 'Cheesecake', price: 'Rs. 890', badge: 'Creamy', img: '/images/Cheesecake.jpg' },
      { name: 'Brownie', price: 'Rs. 750', badge: 'Hot', img: '/images/Brownie.jpg' }
    ],
    Beverages: [
      { name: 'Mint Margarita', price: 'Rs. 450', badge: 'Refreshing', img: '/images/Mint Margarita.jpg' },
      { name: 'Iced Coffee', price: 'Rs. 550', badge: 'Cold', img: '/images/Iced Coffee.jpg' },
      { name: 'Pina Colada', price: 'Rs. 600', badge: 'Tropical', img: '/images/Pina Colada.jpg' },
      { name: 'Lemonade', price: 'Rs. 350', badge: 'Zesty', img: '/images/Lemonade.jpg' }
    ]
  };

  const reviews = [
    {
      text: "Every dish felt like a story behind it — smoky, rich, and unforgettable. The best meal we've had in Islamabad this year.",
      name: "Ahmed Khan",
      role: "Regular Customer"
    },
    {
      text: "An absolute masterpiece of flavors! The ambience combined with their signature steaks made our anniversary night truly magical.",
      name: "Ayesha Malik",
      role: "Food Blogger"
    },
    {
      text: "Top-notch service and exquisite presentation. Highly recommend their truffle pasta and desserts. Will definitely visit again!",
      name: "Usman Tariq",
      role: "Chef & Critic"
    },
    {
      text: "The taste is authentic and the staff is extremely cooperative. Their grilled chicken is an absolute must-try!",
      name: "Fatima Noor",
      role: "Food Enthusiast"
    },
    {
      text: "A cozy place with great lighting and even better food. Perfect spot for family dinners in town.",
      name: "Bilal Ahmed",
      role: "Local Guide"
    },
    {
      text: "Fantastic food and an amazing atmosphere! Especially loved their mint margarita and steaks.",
      name: "Zainab Sheikh",
      role: "Regular Customer"
    },
    {
      text: "Exceptional dining experience! The presentation and aroma of the food completely win you over before the first bite.",
      name: "Hamza Ali",
      role: "Travel Blogger"
    },
    {
      text: "Very premium quality food at reasonable prices. Service was fast and the atmosphere felt very warm and welcoming.",
      name: "Hoorain Riaz",
      role: "Food Critic"
    }
  ];

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="homepage-container">
      
     {/* 1. Hero Section with Movement Animation */}
      <section className="hero-section" id="home">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-subtitle">WELCOME TO FUZION</span>
          <h1 className="hero-title">Savor the Firelight</h1>
          <p className="hero-desc">
          </p>
          <Link to="/reservation" className="hero-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Reserve a table
          </Link>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* 2. Our Story Section */}
      <section className="story-section" id="about">
        <div className="story-image-box">
          <img 
            src="/images/img_1517248135467-4c7edcad34c4.jpg" 
            alt="Restaurant Dining" 
            className="story-img" 
          />
          <div className="story-floating-badge">
            <span className="badge-number">10+</span>
            <span className="badge-text">Years of Excellence</span>
          </div>
        </div>

        <div className="story-content-box">
          <span className="sub-tagline" style={{ textAlign: 'left', display: 'block' }}>Discover Our Heritage</span>
          <h2 className="section-heading-gothic">Our story</h2>
          <p className="story-text">
            We bring a unique culinary philosophy to the table, combining time-honored traditional recipes with modern artisanal techniques to give you an unforgettable experience. Every single ingredient is handpicked from local organic farms to ensure purity, rich aroma, and authentic taste in every bite.
          </p>
          
          <div className="story-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">✓</span> 100% Organic & Fresh Ingredients Daily
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">✓</span> Internationally Trained Master Chefs
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">✓</span> Warm Ambience & World-Class Service
            </div>
          </div>

          <button onClick={() => navigate('/about')} className="read-more-link" style={{border: 'none', cursor: 'pointer'}}>Discover More →</button>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* 3. Our Menu Section */}
      <section className="menu-preview-section" id="menu">
        <div className="menu-header-center">
          <span className="sub-tagline">Carnivore Tasty Offer</span>
          <h2 className="main-section-title">OUR MENU</h2>
        </div>

        <div className="menu-grid-3">
          <div className="menu-card-light">
            <img 
              src="/images/Grilled-Chicken.jpg" 
              alt="Grilled Chicken" 
              className="card-img" 
            />
            <div className="card-info">
              <h3>Grilled Chicken</h3>
              <span className="card-price">Rs. 1800</span>
            </div>
            <p className="card-desc">Tender chicken marinated in fresh herbs and flame-grilled.</p>
            <button onClick={() => navigate('/menu')} className="card-read-more" style={{background: 'none', border: 'none', borderTop: '1px solid var(--border-light)', width: '100%', cursor: 'pointer'}}>READ MORE</button>
          </div>

          <div className="menu-card-light">
            <img 
              src="/images/img_1608897013039-887f21d8c804.jpg" 
              alt="Truffle Pasta" 
              className="card-img" 
            />
            <div className="card-info">
              <h3>Truffle Pasta</h3>
              <span className="card-price">Rs. 2200</span>
            </div>
            <p className="card-desc">Hand-cut pasta tossed in a creamy black truffle sauce.</p>
            <button onClick={() => navigate('/menu')} className="card-read-more" style={{background: 'none', border: 'none', borderTop: '1px solid var(--border-light)', width: '100%', cursor: 'pointer'}}>READ MORE</button>
          </div>

          <div className="menu-card-light">
            <img 
              src="/images/Classic-Burger.jpg" 
              alt="Classic Burger" 
              className="card-img" 
            />
            <div className="card-info">
              <h3>Classic Burger</h3>
              <span className="card-price">Rs. 1500</span>
            </div>
            <p className="card-desc">Wagyu beef patty, artisanal cheese, on a brioche bun.</p>
            <button onClick={() => navigate('/menu')} className="card-read-more" style={{background: 'none', border: 'none', borderTop: '1px solid var(--border-light)', width: '100%', cursor: 'pointer'}}>READ MORE</button>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Stats Highlight Section */}
      <section className="stats-highlight-section">
        <div className="stats-container">
          <div className="stat-box">
            <h3>15+</h3>
            <p>Master Chefs</p>
          </div>
          <div className="stat-box">
            <h3>50+</h3>
            <p>Exotic Dishes</p>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <p>Fresh Ingredients</p>
          </div>
          <div className="stat-box">
            <h3>15k+</h3>
            <p>Happy Foodies</p>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* 4. Why People Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-header">
          <span className="sub-tagline">Our Core Values</span>
          
          <div className="luxury-title-wrapper">
            <span className="title-line"></span>
            <h2 className="section-heading-gothic">Why People Choose Us?</h2>
            <span className="title-line"></span>
          </div>

          <p className="why-subtext">
            Experience culinary excellence with our handpicked ingredients, master chefs, and a dedication to unforgettable dining.
          </p>
        </div>

        <div className="features-box-container">
          <div className="feature-item">
            <div className="feature-icon-box">🍽️</div>
            <h4>Taste Matters</h4>
            <p>Crafted with premium ingredients to deliver authentic and rich flavors in every bite.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">👨‍🍳</div>
            <h4>The Best Chefs</h4>
            <p>Our veteran culinary artists bring passion and perfection to every single dish.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">💎</div>
            <h4>Exclusive Deals</h4>
            <p>Enjoy luxury dining and exotic meals coupled with amazing daily offers.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">🚀</div>
            <h4>Express Delivery</h4>
            <p>Hot, fresh, and lightning-fast delivery straight to your doorstep.</p>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* 5. Popular Categories / Meal Tabs */}
      <section className="categories-section">
        <div className="categories-layout">
          {/* Left Sidebar */}
          <div className="sidebar-categories">
            <span className="select-meal-label">SELECT YOUR MEAL</span>
            <h3>Popular Categories</h3>
            <div className="category-list-btns">
              {Object.keys(menuCategories).map((category) => (
                <button
                  key={category}
                  className={`cat-btn ${activeTab === category ? 'active' : ''}`}
                  onClick={() => setActiveTab(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Right 4-Item Grid */}
          <div className="category-items-grid-4">
            {menuCategories[activeTab].map((item, index) => (
              <div className="cat-item-card" key={index}>
                <div className="cat-img-box">
                  <img src={item.img} alt={item.name} />
                  <span className="cat-badge">{item.badge}</span>
                </div>
                <div className="cat-item-info">
                  <h4>{item.name}</h4>
                  <span className="cat-price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* 6. Customer Reviews Section with Bottom Center Arrows */}
      <section className="reviews-section">
        <h2 className="section-heading-gothic center">Customer Reviews</h2>
        <div className="review-card-box" style={{ textAlign: 'center' }}>
          
          <p className="review-text">
            "{reviews[currentReview].text}"
          </p>
          
          <div className="reviewer-info" style={{ justifyContent: 'center' }}>
            <div>
              <h4 className="reviewer-name" style={{ margin: 0, fontFamily: "'Cinzel', serif" }}>
                {reviews[currentReview].name}
              </h4>
              <span className="reviewer-role">{reviews[currentReview].role}</span>
            </div>
          </div>

          {/* Bottom Controls (Arrows + Dots in one row) */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
            
            {/* Left Arrow */}
            <button 
              onClick={prevReview}
              style={{
                background: 'transparent',
                color: '#c59b27',
                border: '1px solid #c59b27',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                transition: 'all 0.3s'
              }}
            >
              ❮
            </button>

            {/* Slider Dots */}
            <div className="slider-dots" style={{ display: 'flex', gap: '8px', alignItems: 'center', margin: 0 }}>
              {reviews.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${currentReview === index ? 'active' : ''}`}
                  onClick={() => setCurrentReview(index)}
                  style={{ cursor: 'pointer' }}
                ></span>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextReview}
              style={{
                background: 'transparent',
                color: '#c59b27',
                border: '1px solid #c59b27',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                transition: 'all 0.3s'
              }}
            >
              ❯
            </button>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Homepage;