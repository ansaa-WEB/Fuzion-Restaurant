import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FaqItem from '../../components/FaqItem/FaqItem';
import './faqpage.css';

const faqData = [
  // --- General ---
  {
    category: "General",
    question: "What are your restaurant's operating hours?",
    answer: "We are open Monday through Sunday from 12:00 PM to 11:30 PM. Kitchen orders close 30 minutes prior to closing time."
  },
  {
    category: "General",
    question: "Can we host private events or parties at your restaurant?",
    answer: "Yes, we have specialized spaces and custom catering menus available for private events, birthdays, corporate dinners, and family gatherings. Please contact us for details."
  },
  {
    category: "General",
    question: "Is parking available on-site?",
    answer: "Yes, we provide complimentary valet parking services for all our dine-in guests."
  },
  {
    category: "General",
    question: "Do you allow pets inside the restaurant?",
    answer: "While we love animals, pet restrictions apply inside the main indoor dining area due to health and safety regulations. Service animals are always welcome."
  },

  // --- Reservations ---
  {
    category: "Reservations",
    question: "Do I need to make a reservation in advance?",
    answer: "While walk-ins are always welcome, we highly recommend making a reservation, especially for weekends and dinner hours, to secure your preferred table."
  },
  {
    category: "Reservations",
    question: "How can I book a table?",
    answer: "You can easily book a table through the reservation section on our website, or by calling our front desk directly during business hours."
  },
  {
    category: "Reservations",
    question: "Is there any fee or deposit required for reservations?",
    answer: "Standard table reservations are completely free of charge. However, large group bookings or private events may require a nominal advance deposit."
  },
  {
    category: "Reservations",
    question: "What is your policy for late arrivals?",
    answer: "We hold reserved tables for up to 15 minutes past the booking time. If you are running late, kindly notify us via phone."
  },

  // --- Delivery ---
  {
    category: "Delivery",
    question: "Do you offer home delivery or take-away services?",
    answer: "Yes! We offer both take-away and direct home delivery. You can order online through our website menu or call our front desk directly."
  },
  {
    category: "Delivery",
    question: "What is the average delivery time?",
    answer: "Standard delivery usually takes between 35 to 50 minutes depending on your location and peak traffic hours."
  },
  {
    category: "Delivery",
    question: "Is there a minimum order value for home delivery?",
    answer: "Yes, a minimum order amount applies for home deliveries depending on your delivery zone. You can check the details at checkout."
  },
  {
    category: "Delivery",
    question: "Can I track my delivery order?",
    answer: "Currently, you receive updates via SMS/WhatsApp regarding your order status, and you can always call our support line for live updates."
  },

  // --- Menu ---
  {
    category: "Menu",
    question: "Are there vegetarian and vegan options available?",
    answer: "Absolutely. Our menu features a wide variety of authentic vegetarian, vegan, and gluten-free dishes crafted with the same care and rich flavors."
  },
  {
    category: "Menu",
    question: "Do you accommodate food allergies or special dietary needs?",
    answer: "Yes, please inform your server or mention it in your online order notes if you have any specific allergies, and our chefs will take utmost care."
  },
  {
    category: "Menu",
    question: "Are your ingredients halal and locally sourced?",
    answer: "Yes, 100% of our meat is strictly halal, and we source our vegetables and spices fresh from trusted local vendors daily."
  },
  {
    category: "Menu",
    question: "Do you have a kids' menu available?",
    answer: "Yes, we offer a dedicated kids' menu featuring milder, kid-friendly portions of popular items like pasta, fries, and mini sliders."
  }
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const categories = ['All', 'General', 'Reservations', 'Delivery', 'Menu'];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  return (
    <div className="faq-page-container">
      {/* Hero Section */}
      <section className="faq-hero-section">
        <div className="faq-hero-overlay"></div>
        <div className="faq-hero-content">
          <span className="faq-breadcrumb">Got Questions? We Have Answers</span>
          <h1 className="faq-hero-title">Frequently Asked Questions</h1>
          <p className="faq-hero-subtitle">Find quick answers about our dining experience, menu items, and services.</p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="faq-content-section">
        {/* Category Tabs */}
        <div className="faq-filter-container">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`faq-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat);
                setActiveIndex(null);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Grid Accordion List */}
        <div className="faq-grid-container">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <FaqItem 
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndex}
                toggleAccordion={toggleAccordion}
              />
            ))
          ) : (
            <div className="faq-no-results">
              <p>No questions found in this category.</p>
            </div>
          )}
        </div>

        {/* Help Banner Box */}
        <div className="faq-help-box">
          <h2>Still have questions?</h2>
          <p>If you couldn't find the answer you were looking for, feel free to reach out to our support team directly.</p>
          <button className="faq-contact-btn" onClick={() => navigate('/contact')}>Contact Us</button>
        </div>
      </section>
    </div>
  );
}