import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
        onClick={scrollToTop}
        className="flex items-center p-3 rounded-full bg-blue-800 text-white shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <FaArrowUp className="mr-2" />
        <span>Back to Top</span>
      </button>
      )}
    </div>
  );
};

export default BackToTopButton;
