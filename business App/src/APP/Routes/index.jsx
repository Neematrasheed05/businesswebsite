import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from '../Components/Home';
import Agent from '../Components/Agents';
import PropertyDetails from '../Components/Properties/propertyDetails';
import properties from '../Components/Properties/data';

const PropertyDetailsWrapper = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) return <p>Property not found</p>;

  return <PropertyDetails property={property} />;
};

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Agent />} />
        <Route path="/property/:id" element={<PropertyDetailsWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}
