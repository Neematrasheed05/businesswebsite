import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Logo from "../../assets/key.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-gold-500 text-blue-900 shadow-md z-50">
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
              className="h-20 w-20 mr-2"
            />
            <span className="text-2xl font-bold hover:text-gold-300 transition duration-300 font-heading text-blue-900">
              HouseHub
            </span>
          </a>
        </div>
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
        <ul 
          className={`lg:flex lg:space-x-6 ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-16 left-0 w-full lg:w-auto bg-transparent lg:bg-transparent lg:flex-row flex-col`}
        >
          <li>
            <Link 
              to="hero" 
              smooth={true} 
              duration={500} 
              className="block px-4 py-2 lg:px-0 lg:py-0 text-white hover:text-gold-300 transition duration-300 font-body cursor-pointer text-xl font-semibold hover:shadow-lg"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
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
              className="block px-4 py-2 lg:px-0 lg:py-0 text-white hover:text-gold-300 transition duration-300 font-body cursor-pointer text-xl font-semibold hover:shadow-lg"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
          </li>
          <li>
            <Link 
              to="agents" 
              smooth={true} 
              duration={500} 
              className="block px-4 py-2 lg:px-0 lg:py-0 text-white hover:text-gold-300 transition duration-300 font-body cursor-pointer text-xl font-semibold hover:shadow-lg"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </Link>
          </li>
           <li>
            <Link 
              to="why-choose-us" 
              smooth={true} 
              duration={500} 
              className="block px-4 py-2 lg:px-0 lg:py-0 text-white hover:text-gold-300 transition duration-300 font-body cursor-pointer text-xl font-semibold hover:shadow-lg"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
              onClick={() => setIsOpen(false)}
            >
          Why Choose Us
            </Link>
        </li>

          <li>
            <Link 
              to="partners" 
              smooth={true} 
              duration={500} 
              className="block px-4 py-2 lg:px-0 lg:py-0 text-white hover:text-gold-300 transition duration-300 font-body cursor-pointer text-xl font-semibold hover:shadow-lg"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
              onClick={() => setIsOpen(false)}
            >
            Partners
            </Link>
          </li>
         
        </ul>
        
        <div className="hidden lg:block">
          <a 
            href="#contact" 
            className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 font-body cursor-pointer text-xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
