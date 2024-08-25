import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBed, FaBath, FaEye } from 'react-icons/fa';
import LuxuryCondo from "../../assets/luxuryCondo.jpg";
import Suburban from "../../assets/suburban.jpg";
import BeachVilla from "../../assets/beachfront.jpg";
import Modal from '../Modals/featureModal'; 

const FeaturedListings = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Downtown Condo',
      bedrooms: 3,
      bathrooms: 2,
      image: LuxuryCondo,
      description: 'A luxury downtown condo with a beautiful skyline view and modern amenities.',
      size: 3445,
      yearBuilt: 2008,
      subletType: 'Sublet Property Type',
      price: 1900,
    },
    {
      id: 2,
      title: 'Charming Suburban Home',
      bedrooms: 4,
      bathrooms: 3,
      image: Suburban,
      description: 'A charming home located in a quiet suburban neighborhood, perfect for families.',
      size: 4100,
      yearBuilt: 2012,
      subletType: 'Sublet Property Type',
      price: 2400,
    },
    {
      id: 3,
      title: 'Modern Beachfront Villa',
      bedrooms: 5,
      bathrooms: 4,
      image: BeachVilla,
      description: 'A modern villa with direct beach access and stunning ocean views.',
      size: 5200,
      yearBuilt: 2016,
      subletType: 'Sublet Property Type',
      price: 3500,
    },
  ];

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  return (
    <section id="properties" className="relative h-auto lg:h-screen">
      <section className="container mx-auto px-8 py-8 lg:py-40">
        <h2 className="text-3xl lg:text-4xl font-semibold text-blue-800">Featured Properties</h2>
        <p className="text-xl text-blue-600 mt-2 lg:w-5/12">
          Explore our handpicked selection of the finest properties available.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                ref={ref}
                key={property.id}
                className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md overflow-hidden"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                style={{ height: '450px' }}
              >
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
                        onClick={() => openModal(property)}
                      >
                        <FaEye className="text-xl inline-block" />
                        <span className="ml-2">View More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {selectedProperty && (
          <Modal 
            show={showModal} 
            onClose={closeModal} 
            property={selectedProperty} 
          />
        )}
      </section>
    </section>
  );
};

export default FeaturedListings;
