import React from 'react';
import { useNavigate } from 'react-router-dom';
import ValueCard from '../../components/value-card/ValueCard';
import TimelineCard from '../../components/timeline-card/TimelineCard';
import './aboutpage.css';

const AboutPage = () => {
    const navigate = useNavigate();

    // Core values data
    const valuesData = [
      { icon: '🌿', title: '100% Organic', description: 'Freshly harvested ingredients sourced daily from trusted local sustainable farms.' },
      { icon: '🔥', title: 'Wood-Fire Craft', description: 'Traditional flame and wood-grilling techniques that lock in rich, smoky flavors.' },
      { icon: '👨‍🍳', title: 'Master Chefs', description: 'Internationally trained culinary artists bringing passion to every plate.' },
      { icon: '✨', title: 'Warm Ambiance', description: 'An exquisite atmosphere designed for family dinners and romantic evenings.' }
    ];

    // Timeline milestones data
    const timelineData = [
      { year: '2004', description: 'Opened as a small family kitchen with six tables.' },
      { year: '2011', description: 'Expanded the dining room, added our signature wood-fire grill.' },
      { year: '2017', description: "Named one of the city's top dining spots for three years running." },
      { year: '2024', description: 'Two decades in, still family-run, still slow-cooked.' }
    ];

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

      {/* 2. Brand Philosophy Section */}
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

      {/* 3. Core Values Section (Using ValueCard Component) */}
      <section className="about-values-section">
        <div className="values-header">
          <span className="sub-tagline">Our Commitment</span>
          <h2 className="section-heading-gothic">The Fuzion Standard</h2>
          <p className="values-subtext">
            What makes our kitchen stand out is our uncompromised dedication to quality, taste, and hospitality.
          </p>
        </div>

        <div className="values-grid">
          {valuesData.map((item, index) => (
            <ValueCard 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* 4. The Hands Behind It Section */}
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

      {/* 5. Our Journey Timeline Section (Using TimelineCard Component) */}
      <section className="journey-timeline-section">
        <div className="journey-header">
          <span className="sub-tagline">Milestones</span>
          <h2 className="section-heading-gothic">Our journey</h2>
        </div>

        <div className="timeline-grid">
          {timelineData.map((item, index) => (
            <TimelineCard 
              key={index}
              year={item.year}
              description={item.description}
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutPage;