import LuxuryCondo from "../../assets/luxuryCondo.jpg";
import Suburban from "../../assets/suburban.jpg";
import BeachVilla from "../../assets/beachfront.jpg";

const properties = [
  {
    id: 1,
    title: 'Luxury Downtown Condo',
    address: '764 W. Manor Station Drive East Elmhurst, NY 11370',
    price: 1900,
    bedrooms: 3,
    bathrooms: 2,
    size: 3445,
    yearBuilt: 2008,
    description: 'A luxury downtown condo with a beautiful skyline view and modern amenities. It is located close to top-tier restaurants, shops, and public transport, making it an ideal place for urban living.',
    mainImage: LuxuryCondo,
    galleryImages: [LuxuryCondo, Suburban, BeachVilla], // Replace with actual images
    agent: {
      name: 'John Doe',
      phone: '(123) 456-7890',
      email: 'john.doe@example.com',
      image: 'https://via.placeholder.com/150', // Replace with actual image
    },
  },
  {
    id: 2,
    title: 'Charming Suburban Home',
    address: '987 Maple Street, Springfield, IL 62704',
    price: 2500,
    bedrooms: 4,
    bathrooms: 3,
    size: 2800,
    yearBuilt: 2015,
    description: 'A charming suburban home in a family-friendly neighborhood. The property boasts a large backyard, updated kitchen, and is within walking distance to schools and parks.',
    mainImage: Suburban,
    galleryImages: [Suburban, LuxuryCondo, BeachVilla],
    agent: {
      name: 'Jane Smith',
      phone: '(234) 567-8901',
      email: 'jane.smith@example.com',
      image: 'https://via.placeholder.com/150', 
    },
  },
  {
    id: 3,
    title: 'Modern Beachfront Villa',
    address: '123 Ocean Drive, Miami Beach, FL 33139',
    price: 4500,
    bedrooms: 5,
    bathrooms: 4,
    size: 5000,
    yearBuilt: 2020,
    description: 'A modern beachfront villa with direct ocean views, infinity pool, and private access to the beach. Perfect for those looking for luxury living in a tranquil environment.',
    mainImage: BeachVilla,
    galleryImages: [BeachVilla, LuxuryCondo, Suburban], 
    agent: {
      name: 'Alice Johnson',
      phone: '(345) 678-9012',
      email: 'alice.johnson@example.com',
      image: 'https://via.placeholder.com/150', 
    },
  },
];

export default properties;
