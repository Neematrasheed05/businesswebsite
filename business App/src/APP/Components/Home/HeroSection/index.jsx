import React, { useState, useEffect } from 'react';
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
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <svg width="0" height="0">
          <defs>
            <clipPath id="curve-mask" clipPathUnits="objectBoundingBox">
              <path d="M0,0 L1,0 L1,0.9 Q0.5,1 0,0.9 Z" />
            </clipPath>
          </defs>
        </svg>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading text-white">Welcome to Your Dream Home</h1>
          <p className="text-lg md:text-3xl mb-8 text-accent font-body">
            Find your perfect property with us today.
          </p>
          <div>
            <a href="#contact" className="bg-secondary hover:bg-green-200 text-white font-bold py-3 px-6 rounded-full">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
