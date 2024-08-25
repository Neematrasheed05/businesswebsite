// src/components/PropertyCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, openModal }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      style={{ height: '450px' }}
    >
      <Link to={`/property/${property.id}`} className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-yellow-500/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <div className="text-center text-blue-800"> 
            <h4 className="text-2xl font-semibold">{property.title}</h4>
            <div className="flex justify-center items-center mt-4 space-x-4">
              <div className="flex items-center text-blue-800">
                <FaBed className="text-xl mr-2" />
                <span>{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center text-blue-800"> 
                <FaBath className="text-xl mr-2" />
                <span>{property.bathrooms} Baths</span>
              </div>
            </div>
            <div className="mt-4 text-blue-800">
              <button 
                className="flex items-center"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click from also triggering the link
                  openModal(property);
                }}
              >
                <FaEye className="text-xl inline-block" />
                <span className="ml-2">View More</span>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
