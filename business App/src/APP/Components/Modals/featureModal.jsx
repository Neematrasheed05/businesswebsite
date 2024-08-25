import React from 'react';
import { FaBed, FaBath, FaRulerCombined, FaCalendarAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Modal = ({ show, onClose, property }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-5 relative">
        <button 
          className="absolute top-2 right-2 text-gray-700 text-xl font-semibold"
          onClick={onClose}
        >
          &times;
        </button>

        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">{property.title}</h2>
        
        <p className="text-gray-600 mb-4">
          {property.description}
        </p>
        
        <div className="flex flex-col lg:flex-row lg:space-x-6 mb-4">
          <div className="flex items-center text-blue-800 mb-2 lg:mb-0">
            <FaBed className="text-xl mr-2" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-blue-800 mb-2 lg:mb-0">
            <FaBath className="text-xl mr-2" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-blue-800 mb-2 lg:mb-0">
            <FaRulerCombined className="text-xl mr-2" />
            <span>{property.size} sq ft</span>
          </div>
          <div className="flex items-center text-blue-800 mb-2 lg:mb-0">
            <FaCalendarAlt className="text-xl mr-2" />
            <span>Built in {property.yearBuilt}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-800">${property.price}</span>
          <div className="flex space-x-2">
            <Link 
              to={`/property/${property.id}`} 
              className="bg-blue-800 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
            >
              View More Details
            </Link>
            <button 
              className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
