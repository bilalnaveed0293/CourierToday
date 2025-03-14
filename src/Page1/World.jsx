import React from "react";
import Mapper from "./Mapper";
import Service from "./Service.jsx";
import decor from "../assets/decor.png";
// components/HeroSection.jsx
// components/HeroSection.jsx (World.jsx)
const World = () => {
  return (
    <div>
      <div className="mx-auto px-4 md:px-6 lg:pl-24 flex flex-col md:flex-row py-4 md:py-12 relative">
        {/* Left side: Text content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 relative text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-6">
            <span className="text-yellow-400">Seamless</span> <span>Cargo Shipping/Courier Service</span>
            <br />
            Anywhere <span className="text-yellow-400">in the</span>
            <br />
            <span className="text-yellow-400">World</span>
          </h1>
          <p className="text-[#787878] mb-8 text-base md:text-[15px] max-w-xl mx-auto md:mx-0 hidden md:block">
            At Courier Today by Goodwill Cargo, we specialize in fast, secure,{" "}
            and cost-effective logistics solutions tailored to your needs. With
            a legacy of excellence since 1976, we provide air, sea, and door-to-{" "}
            door freight services worldwide.
          </p>

          <button className="bg-yellow-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors mx-auto md:mx-0 hidden md:block">
            Book a Call
          </button>
        </div>

        {/* Right side: World Map */}
        <div className="w-full md:w-2/3 relative">
          <Mapper />
        </div>
      </div>
      <div className="">
        <Service />
      </div>
      <div className="bg-[#F9D50B] text-black text-center py-6 text-2xl font-bold md:hidden">
        SERVICES
      </div>
    </div>
  );
};

export default World;
