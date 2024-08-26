import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black pb-5 mt-12">
      <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-300 sm:justify-start">
            <img
              className="rounded-full"
              src="https://sahilnetic.xyz/evilcat.png"
              alt="Logo"
              width="40"
              height="40"
            />
          </div>
          <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
            Terms & Conditions &nbsp; | &nbsp; Careers &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Developers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
