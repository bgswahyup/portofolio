import React, { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import '../styles/BackToTopButton.css'; // Custom CSS file for styling

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the back-to-top button
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add event listener on scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="back-to-top" onClick={scrollToTop}>
          <FiChevronUp />
        </div>
      )}
    </>
  );
};

export default BackToTop;
