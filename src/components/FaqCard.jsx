
import React from 'react';

// Reusable FAQ card component that expands/collapses
const FaqCard = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`faq-card ${isOpen ? 'open' : ''}`}> {/* Card container, adds 'open' class if active */}
      
      {/* Question section – clickable to toggle answer */}
      <div className="faq-question" onClick={onToggle}>
        <span>{question}</span>
        
        {/* Arrow icon changes direction when open */}
        <span className={`arrow ${isOpen ? 'rotate' : ''}`}>⌄</span>
      </div>
      
      {/* Conditionally render the answer only if open */}
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FaqCard;
