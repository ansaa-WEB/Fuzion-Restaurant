import React from 'react';

const FaqItem = ({ item, index, activeIndex, toggleAccordion }) => {
  const isOpen = activeIndex === index;

  return (
    <div className={`faq-card-item ${isOpen ? 'active' : ''}`}>
      <button 
        className="faq-question-btn" 
        onClick={() => toggleAccordion(index)}
      >
        <div className="faq-q-left">
          <span className="faq-badge">{item.category}</span>
          <span className="faq-question-text">{item.question}</span>
        </div>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div className="faq-answer-container" style={{ maxHeight: isOpen ? '220px' : '0px' }}>
        <p className="faq-answer">{item.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;