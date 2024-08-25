import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import landingImage1 from "../../../assets/building.jpg";
import landingImage2 from "../../../assets/building2.jpg";
import landingImage3 from "../../../assets/estate.jpg";

const HeroSection = () => {
  const images = [landingImage1, landingImage2, landingImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, [images.length]);

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 } },
  };

  return (
    <section id="hero" className="relative h-screen">
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            clipPath: 'url(#curve-mask)' 
          }}
        >
          <div className="absolute inset-0 bg-blue-800 bg-opacity-70"></div>
        </div>
        <svg width="0" height="0">
          <defs>
            <clipPath id="curve-mask" clipPathUnits="objectBoundingBox">
              <path d="M0,0 L1,0 L1,0.9 Q0.5,1 0,0.9 Z" />
            </clipPath>
          </defs>
        </svg>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 font-heading text-gold-500"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            Welcome to Your Dream Home
          </motion.h1>
          <motion.p
            className="text-lg md:text-3xl mb-8 text-gold-300 font-body"
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}
          >
            Find your perfect property with us today.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <a
              href="#contact"
              className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
