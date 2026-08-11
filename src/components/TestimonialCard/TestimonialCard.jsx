import React from 'react';

const TestimonialCard = ({ currentTestimonial, currentIndex, testimonialsData, handlePrev, handleNext, setCurrentIndex }) => {
  return (
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
  );
};

export default TestimonialCard;