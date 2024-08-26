import Company1 from "../../assets/home.jpg";
import Company2 from "../../assets/newhome.jpg";
import Company3 from "../../assets/name6.jpg";
import Company4 from "../../assets/name2.jpg";
import Company5 from "../../assets/name3.jpg";
import Company6 from "../../assets/name4.jpg";
import Company7 from "../../assets/name5.jpg";
import Company8 from "../../assets/name7.jpg";

const Partners = () => {
  return (
    <section id="partners" className="bg-gray-100 py-8 lg:py-12">
      <div className="bg-gray-100 py-16">
        <h2 className="text-4xl font-heading text-center mb-12 text-blue-800">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4 justify-items-center">
          <img
            src={Company1}
            alt="Partner 1"
            className="h-28 w-auto object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
          <img
            src={Company2}
            alt="Partner 2"
            className="h-28 w-auto object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
          <img
            src={Company3}
            alt="Partner 3"
            className="h-28 w-auto object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
          <img
            src={Company4}
            alt="Partner 4"
            className="h-28 w-auto object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
          <img
            src={Company5}
            alt="Partner 5"
            className="h-28 w-auto object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
          <img
            src={Company6}
            alt="Partner 6"
            className="h-28 w-auto object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
          <img
            src={Company7}
            alt="Partner 7"
            className="h-28 w-auto object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
          <img
            src={Company8}
            alt="Partner 8"
            className="h-28 w-auto object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
