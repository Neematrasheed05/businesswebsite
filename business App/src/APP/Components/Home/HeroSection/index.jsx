import React from 'react';
import { motion } from 'framer-motion';
import heroImage from  "../../../assets/building.jpg"; 

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen bg-blue-800 overflow-hidden">
      <div className="container mx-auto h-full flex flex-col items-center justify-center px-6 text-center relative z-10">
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <img
            src={heroImage}
            alt="Hero"
            className="object-cover object-center h-full w-full opacity-50"
          />
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gold-500">
            MODERN <span className="text-white">REAL ESTATE</span>
          </h1>
          <p className="text-lg md:text-3xl mb-8 text-gold-300 font-body">
  Discover a diverse range of properties tailored to meet your needs.
</p>

          <a
            href="#contact"
            className="inline-block bg-gold-500 text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-gold-300 transition-all"
          >
            BOOK NOW
          </a>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-8">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gold-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gold-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gold-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
