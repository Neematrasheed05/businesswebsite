import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Logo from "../../assets/key.png"; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent text-white shadow-none z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a 
            href="#hero" 
            onClick={() => scroll.scrollToTop()} 
            className="flex items-center"
          >
            <img 
              src={Logo} 
              alt="HouseHub Logo" 
              className="h-20 w-20 mr-2" // Adjust the size as needed
            />
            <span className="text-2xl font-bold hover:text-accent transition duration-300 font-heading">
              HouseHub
            </span>
          </a>
        </div>
        {/* Menu Toggle Button for Mobile */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <ul 
          className={`lg:flex lg:space-x-6 ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-16 left-0 w-full lg:w-auto bg-transparent lg:bg-transparent lg:flex-row flex-col`}
        >
          <li>
            <Link 
              to="hero" 
              smooth={true} 
              duration={500} 
              className="block px-4 py-2 lg:px-0 lg:py-0 hover:text-accent transition duration-300 font-body cursor-pointer text-xl"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="properties" 
              smooth={true} 
              duration={500} 
              className="block px-4 py-2 lg:px-0 lg:py-0 hover:text-accent transition duration-300 font-body cursor-pointer text-xl"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="block px-4 py-2 lg:px-0 lg:py-0 hover:text-accent transition duration-300 font-body cursor-pointer text-xl"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="block px-4 py-2 lg:px-0 lg:py-0 hover:text-accent transition duration-300 font-body cursor-pointer text-xl"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Get Started Button */}
        <div className="hidden lg:block">
          <a 
            href="#contact" 
            className="bg-secondary hover:bg-accent text-white font-bold py-2 px-4 rounded-full transition duration-300 font-body cursor-pointer text-xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
