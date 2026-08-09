import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aboutpage.css';

const AboutPage = () => {
    const navigate = useNavigate();
  return (
    <div className="about-page-container">
      
 {/* 1. About Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <span className="about-breadcrumb">Our Culinary Story</span>
          <h1 className="about-hero-title">Where Tradition Meets Taste</h1>
          <p className="about-hero-subtitle">Discover the passion, heritage, and flavors behind Fuzion.</p>
        </div>
      </section>

      {/* 2. Brand Philosophy Section (Redesigned) */}
      <section className="philosophy-section">
        <div className="philosophy-grid">
          <div className="philosophy-text-col">
            <div className="phil-badge">
              <span>ESTABLISHED HERITAGE</span>
            </div>
            <h2 className="section-heading-gothic">Crafting memories through authentic flavors</h2>
            <p className="philosophy-desc">
              We bring a unique culinary philosophy to the table, combining time-honored traditional recipes with modern artisanal techniques to give you an unforgettable dining experience.
            </p>
            <p className="philosophy-desc">
              Every single ingredient is handpicked from local organic farms to ensure purity, rich aroma, and authentic taste in every single bite.
            </p>
           <button className="explore-btn" onClick={() => navigate('/menu')}>
              EXPLORE MENU →
           </button>
          </div>
          <div className="philosophy-image-wrapper">
            <div className="image-glow-backdrop"></div>
            <img 
              src="/images/img_1550966871-3ed3cdb5ed0c.jpg" 
              alt="Fine Dining Experience" 
              className="philosophy-main-img" 
            />
          </div>
        </div>
      </section>


      {/* 3. Core Values Section */}
      <section className="about-values-section">
        <div className="values-header">
          <span className="sub-tagline">Our Commitment</span>
          <h2 className="section-heading-gothic">The Fuzion Standard</h2>
          <p className="values-subtext">
            What makes our kitchen stand out is our uncompromised dedication to quality, taste, and hospitality.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🌿</div>
            <h3>100% Organic</h3>
            <p>Freshly harvested ingredients sourced daily from trusted local sustainable farms.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">🔥</div>
            <h3>Wood-Fire Craft</h3>
            <p>Traditional flame and wood-grilling techniques that lock in rich, smoky flavors.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">👨‍🍳</div>
            <h3>Master Chefs</h3>
            <p>Internationally trained culinary artists bringing passion to every plate.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">✨</div>
            <h3>Warm Ambiance</h3>
            <p>An exquisite atmosphere designed for family dinners and romantic evenings.</p>
          </div>
        </div>
      </section>

      {/* 4. The Hands Behind It Section (Redesigned) */}
      <section className="hands-behind-section">
        <div className="hands-content-wrapper">
          <div className="hands-badge">
            <span>MASTERING THE CRAFT</span>
          </div>
          <h2 className="section-heading-gothic">The hands behind it</h2>
          <p className="hands-subtext">
            Our veteran culinary artists and master chefs bring passion, creativity, and years of international experience to every single dish crafted in our kitchen.
          </p>

          <div className="chef-highlights-row">
            <div className="chef-stat-box">
              <h4>25+</h4>
              <p>Years of Combined Expertise</p>
            </div>
            <div className="chef-stat-box">
              <h4>100%</h4>
              <p>Artisanal Dedication</p>
            </div>
            <div className="chef-stat-box">
              <h4>5-Star</h4>
              <p>Culinary Standard</p>
            </div>
          </div>

          <div className="hands-action-container">
            <button className="inline-btn-gold" onClick={() => navigate('/chefs')}>
              MEET THE CHEFS →
            </button>
          </div>
        </div>
      </section>

      {/* 5. Our Journey Timeline Section */}
      <section className="journey-timeline-section">
        <div className="journey-header">
          <span className="sub-tagline">Milestones</span>
          <h2 className="section-heading-gothic">Our journey</h2>
        </div>

        <div className="timeline-grid">
          <div className="timeline-card">
            <div className="timeline-dot"></div>
            <h3>2004</h3>
            <p>Opened as a small family kitchen with six tables.</p>
          </div>
          <div className="timeline-card">
            <div className="timeline-dot"></div>
            <h3>2011</h3>
            <p>Expanded the dining room, added our signature wood-fire grill.</p>
          </div>
          <div className="timeline-card">
            <div className="timeline-dot"></div>
            <h3>2017</h3>
            <p>Named one of the city's top dining spots for three years running.</p>
          </div>
          <div className="timeline-card">
            <div className="timeline-dot"></div>
            <h3>2024</h3>
            <p>Two decades in, still family-run, still slow-cooked.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;