import React from 'react';
import { motion } from 'framer-motion';
import LuxuryCondo from "../../assets/luxuryCondo.jpg";
import Suburban from "../../assets/suburban.jpg";
import BeachVilla from "../../assets/beachfront.jpg";

const Property = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Downtown Condo',
      description: 'Experience the epitome of urban living with this luxurious downtown condo. Featuring stunning city views, high-end finishes, and modern amenities, this property offers a perfect blend of comfort and style. Don’t miss out on this prime real estate opportunity!',
      image: LuxuryCondo,
    },
    {
      id: 2,
      title: 'Charming Suburban Home',
      description: 'This charming suburban home is perfect for families seeking tranquility and space. With a spacious backyard, cozy interiors, and a friendly neighborhood, this property offers a serene escape from the hustle and bustle of city life.',
      image: Suburban,
    },
    {
      id: 3,
      title: 'Modern Beachfront Villa',
      description: 'Live your dream in this modern beachfront villa. Enjoy breathtaking ocean views, direct beach access, and contemporary design elements that make this property a true paradise. Ideal for those seeking a luxurious coastal lifestyle.',
      image: BeachVilla,
    },
  ];

  return (
    <section id="properties" className="h-screen bg-secondary py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-blue-gray-900">Featured Properties</h2>
        <p className="text-xl text-gray-500 mt-2 lg:w-5/12">
          Explore our handpicked selection of the finest properties available.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {properties.map((property) => (
            <motion.div
              key={property.id}
              className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={property.image}
                alt={property.title}
                className="relative h-64 w-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <h4 className="text-2xl font-semibold">{property.title}</h4>
                  <p className="text-base mt-2">{property.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Property;
