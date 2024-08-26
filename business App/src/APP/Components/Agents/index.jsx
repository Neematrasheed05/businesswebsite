import React from 'react';
import { motion } from 'framer-motion';

import manager from '../../assets/manager.jpg';
import developer from '../../assets/developer.jpg';
import consultant from '../../assets/consultant.jpg';
import broker from '../../assets/broker.jpg';
import agent from '../../assets/agent.jpg';
import marketing from '../../assets/marketing.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Real Estate Agent',
    image: agent
  },
  {
    id: 2,
    name: 'Samantha Smith',
    role: 'Property Manager',
    image: manager
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Real Estate Developer',
    image: developer
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Real Estate Broker',
    image: broker
  },
  {
    id: 5,
    name: 'John Wilson',
    role: 'Real Estate Consultant',
    image: consultant
  },
  {
    id: 6,
    name: 'Olivia Taylor',
    role: 'Marketing Specialist',
    image: marketing
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const Agent = () => {
  return (
    <section id="agents" className="relative bg-blue-600 py-12">
      <div className="absolute inset-0 -z-10 bg-blue-800 bg-opacity-30"></div>
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-12">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white">
            Meet our amazing team members
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="w-full bg-white rounded-lg p-6 sm:p-8 flex flex-col justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="mb-6">
                <img
                  className="object-center object-cover rounded-full h-36 w-36 border-4 border-gold-500"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-blue-800 font-bold mb-1">{member.name}</p>
                <p className="text-base text-gray-500 font-normal">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Agent;
