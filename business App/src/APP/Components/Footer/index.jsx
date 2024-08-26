import React from "react";
import logo from "../../assets/key.png"
const Footer = () => {
  return (
    <footer className="bg-blue-600 pb-5 mt-12">
      <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-300 sm:justify-start">
            <img
              className="rounded-full h-20 w-20 mr-2"
              src={logo} 
              alt="Logo"
              width="40"
              height="40"
            />
          </div>
          <p className="mt-4 text-lg text-center text-white lg:text-right lg:mt-0 font-body">
            Terms & Conditions &nbsp; | &nbsp; Houses &nbsp; | &nbsp; VIllas &nbsp; | &nbsp; Estates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
