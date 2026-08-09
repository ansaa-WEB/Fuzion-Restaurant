import React, { useState } from 'react';
import './testimonials.css';

// Images ko directly import kar lein taake spaces ka koi issue na ho
import img1 from '/images/id 1testimonail.jpg';
import img2 from '/images/id 2 testimonal.jpg';
import img3 from '/images/id 3 testimonials.jpg';

const testimonialsData = [
  {
    id: 1,
    name: 'Ali Khan',
    role: 'Food Blogger',
    comment: 'The taste of the Chicken Biryani and Mughlai Handi here is amazing! You get a completely authentic traditional taste.',
    rating: 5,
    img: img1
  },
  {
    id: 2,
    name: 'Ayesha Malik',
    role: 'Culinary Critic',
    comment: 'The ambience, lighting, and hospitality are top-notch. The fine dining experience of this restaurant is excellent.',
    rating: 5,
    img: img2
  },
  {
    id: 3,
    name: 'Usman Ahmed',
    role: 'Regular Guest',
    comment: 'Coming here with family has always been a wonderful experience. The service is fast and the food is fresh.',
    rating: 5,
    img: img3
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <div className="testimonials-page-container">
      {/* Hero Section */}
      <section className="testimonials-hero-section">
        <div className="testimonials-hero-overlay"></div>
        <div className="testimonials-hero-content">
          <span className="testimonials-breadcrumb">Valued Feedback & Reviews</span>
          <h1 className="testimonials-hero-title">What Our Guests Say</h1>
          <p className="testimonials-hero-subtitle">Read genuine experiences and reviews shared by our beloved customers.</p>
        </div>
      </section>

      {/* Modern Interactive Showcase Section with Background Image */}
      <section className="testimonials-content-section">
        <div className="modern-testimonial-showcase">
          <div className="showcase-bg-image"></div>
          <div className="showcase-card-overlay"></div>
          
          <div className="showcase-card-content">
            <div className="author-image-wrapper">
              <img src={currentTestimonial?.img} alt={currentTestimonial?.name} />
            </div>
            <div className="testimonial-rating">
              {'★'.repeat(currentTestimonial?.rating || 5)}
            </div>
            <p className="showcase-comment">"{currentTestimonial?.comment}"</p>
            <h3 className="showcase-author-name">{currentTestimonial?.name}</h3>
            <span className="showcase-author-role">{currentTestimonial?.role}</span>

            {/* Navigation Controls */}
            <div className="showcase-controls">
              <button onClick={handlePrev} className="control-btn">‹</button>
              <div className="dots-indicator">
                {testimonialsData.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`dot ${currentIndex === idx ? 'active-dot' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  ></span>
                ))}
              </div>
              <button onClick={handleNext} className="control-btn">›</button>
            </div>
          </div>
        </div>

        {/* Stats Section - Single Row */}
        <div className="testimonials-stats-box">
          <div className="stat-item">
            <h2>20+</h2>
            <p>Years of Service</p>
          </div>
          <div className="stat-item">
            <h2>15k+</h2>
            <p>Happy Guests</p>
          </div>
          <div className="stat-item">
            <h2>30</h2>
            <p>Signature Dishes</p>
          </div>
          <div className="stat-item">
            <h2>6</h2>
            <p>Awards Won</p>
          </div>
        </div>
      </section>
    </div>
  );
}