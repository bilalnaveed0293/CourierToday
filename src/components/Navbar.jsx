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
        {/* Logo - Centered and larger on mobile */}
        <div className="w-full md:w-auto text-center">
          <img 
            src={logo} 
            alt="Courier Today" 
            className="h-20 md:h-24 inline-block" 
          />
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4 relative">
          <button className="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-green-600">
            WhatsApp
          </button>
          <button className="bg-[#F9D50B] text-white px-4 py-2 rounded-lg hover:bg-yellow-500">
            Call Us
          </button>
        </div>
      </div>
      {/* Yellow Line at the Bottom */}
      <div className="w-full h-1 bg-[#F9D50B] absolute bottom-0 left-0"></div>
    </nav>
  );
};

export default Navbar;