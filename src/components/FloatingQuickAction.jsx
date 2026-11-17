import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, ArrowUp } from 'lucide-react';
import './FloatingQuickAction.scss';

export default function FloatingQuickAction() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-actions-container">
      {showScrollTop && (
        <button 
          className="btn-floating scroll-top-btn animate-fade-up"
          onClick={scrollToTop}
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}

      <button 
        className="btn-floating talk-viha-btn"
        onClick={() => navigate('/contact')}
        title="Start IT conversation"
        aria-label="Start IT conversation"
      >
        <MessageCircle size={15} />
        <span>Talk to VIHA</span>
      </button>
    </div>
  );
}
