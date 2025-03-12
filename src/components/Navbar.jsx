import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import decor from "../assets/decor.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent relative">
      <img
        src={decor}
        alt="decor"
        className="hidden md:block absolute top-0 md:right-0 md:h-96 z-0"
      />
      <div className="container mx-auto px-4 md:px-8 flex items-center relative justify-between py-4">
        {/* Logo */}
        <div className="">
          <img src={logo} alt="Courier Today" className="h-16 md:h-24" />
        </div>

        

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4 relative">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            WhatsApp
          </button>
          <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500">
            Call Us
          </button>
        </div>

        {/* Mobile Navigation Links (Always visible) */}
        {/* <div className="md:hidden flex items-center ml-4 space-x-3 relative">
          <a href="#" className="text-yellow-500 text-base">
            Home
          </a>
          <a href="#" className="text-gray-700 text-base">
            About Us
          </a>
          <a href="#" className="text-gray-700 text-base">
            Contact Us
          </a>
        </div> */}

        {/* Mobile Call Button (Always visible) */}
        <div className="md:hidden flex items-center ml-4">
          <a href="tel:+1234567890" aria-label="Call us">
            <div className="bg-white border-2 border-black rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      {/* Yellow Line at the Bottom */}
      <div className="w-full h-1 bg-[#F9D50B] absolute bottom-0 left-0"></div>
    </nav>
  );
};

export default Navbar;