import React from "react";
import { Link } from "react-router-dom";
import vector from "../assets/vector.png";

const Footer = () => {
  return (
    <footer className="bg-[#F9D50B] py-4 md:py-6 lg:py-8 px-4 md:px-8">
      <div className="flex flex-col items-center justify-center min-h-[150px] md:min-h-[200px] lg:min-h-[250px]">
        {/* Text Content */}
        <p className="text-black text-xs md:text-xl lg:text-4xl font-bold text-center mb-2 md:mb-3">
          FOR INSTANT QUOTE WITH CARRIER OF YOUR CHOICE.
        </p>
        <div className="flex items-center justify-center gap-2">
          {/* Text Content */}
          <p className="text-white text-lg md:text-xl lg:text-6xl font-extrabold text-center">
            CONTACT NOW!
          </p>

          {/* Upward Arrow Button */}
          <a href="tel:+971506446940">
            <button className="bg-white cursor-pointer rounded-full w-6 h-6 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img
                src={vector}
                alt="Upward arrow icon"
                className="w-3 md:w-8 lg:w-8"
              />
            </button>
          </a>
        </div>

        {/* Privacy Policy Link */}
        <div className="mt-4 text-center">
          <Link
            to="/privacy-policy"
            className="text-white text-xs md:text-xl hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
