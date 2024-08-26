import React from 'react';
import { FaBed, FaBath, FaRulerCombined, FaCalendarAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Footer from '../Footer';
import Navbar from '../Navbar';

const PropertyDetails = ({ property }) => {
  if (!property) {
    return <p>No property selected</p>;
  }

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3">
          <img src={property.mainImage} alt={property.title} className="w-full h-96 object-cover mb-6" />
          <div className="grid grid-cols-3 gap-4 mb-6">
            {property.galleryImages.map((image, index) => (
              <img key={index} src={image} alt={`Gallery ${index}`} className="w-full h-32 object-cover" />
            ))}
          </div>
          <h2 className="text-3xl font-heading text-blue-800 mb-4">{property.title}</h2>
          <p className="text-xl text-blue-600 mb-4">{property.address}</p>
          <p className="text-lg text-gray-800 mb-6">{property.description}</p>
          <div className="flex justify-between mb-6">
            <div className="flex items-center">
              <FaBed className="text-2xl text-blue-800 mr-2" />
              <span className="text-lg text-gray-700">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <FaBath className="text-2xl text-blue-800 mr-2" />
              <span className="text-lg text-gray-700">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <FaRulerCombined className="text-2xl text-blue-800 mr-2" />
              <span className="text-lg text-gray-700">{property.size} sq ft</span>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="text-2xl text-blue-800 mr-2" />
              <span className="text-lg text-gray-700">Built in {property.yearBuilt}</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:pl-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-heading text-blue-800 mb-4">Contact Agent</h3>
            <div className="flex items-center mb-4">
              <img src={property.agent.image} alt={property.agent.name} className="w-20 h-20 rounded-full mr-4" />
              <div>
                <p className="text-lg font-heading text-blue-800">{property.agent.name}</p>
                <p className="text-lg text-gray-600">{property.agent.phone}</p>
                <p className="text-lg text-gray-600">{property.agent.email}</p>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-blue-800 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 flex items-center">
                <FaPhone className="mr-2" /> Call Agent
              </button>
              <button className="bg-blue-800 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 flex items-center mt-2">
                <FaEnvelope className="mr-2" /> Email Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PropertyDetails;
