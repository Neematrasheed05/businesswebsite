import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faUsers, faBell, faCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import suburban from "../../assets/suburban.jpg";

const About = () => {
  return (
    <section 
      id="why-choose-us" 
      className="relative bg-cover bg-center py-20" 
      style={{ backgroundImage: `url(${suburban})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-40 rounded-lg">
            <FontAwesomeIcon icon={faHome} className="h-16 mb-4 text-gold-500" />
            <h3 className="text-3xl font-semibold mb-4 font-heading text-blue-500">Wide Range of Properties</h3>
            <p className="text-2xl text-white font-body">With a robust selection of popular properties on hand, as well as leading properties from real estate experts.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-40 rounded-lg">
            <FontAwesomeIcon icon={faFileAlt} className="h-16 mb-4 text-gold-500" />
            <h3 className="text-3xl font-semibold mb-4 font-heading text-blue-500">Financing Made Easy</h3>
            <p className="text-2xl text-white font-body">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-40 rounded-lg">
            <FontAwesomeIcon icon={faUsers} className="h-16 mb-4 text-gold-500" />
            <h3 className="text-3xl font-semibold mb-4 font-heading text-blue-500">Trusted by Thousands</h3>
            <p className="text-2xl text-white font-body">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-40 rounded-lg">
            <FontAwesomeIcon icon={faBell} className="h-16 mb-4 text-gold-500" />
            <h3 className="text-3xl font-semibold mb-4 font-heading text-blue-500">Get Important Notifications</h3>
            <p className="text-2xl text-white font-body">Receive advice, listings, and neighborhood information.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-40 rounded-lg">
            <FontAwesomeIcon icon={faCheck} className="h-16 mb-4 text-gold-500" />
            <h3 className="text-3xl font-semibold mb-4 font-heading text-blue-500">Transparency</h3>
            <p className="text-2xl text-white font-body">You and your landlord always see the same info, and you will get all important information directly to your inbox.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-40 rounded-lg">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="h-16 mb-4 text-gold-500" />
            <h3 className="text-3xl font-semibold mb-4 font-heading text-blue-500">Near By Me</h3>
            <p className="text-2xl text-white font-body">Search near top-rated schools and explore neighborhoods.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
