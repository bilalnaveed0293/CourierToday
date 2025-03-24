import React from "react";
import Mapper from "./Mapper";
import Service from "./Service.jsx";
import decor from "../assets/decor.png";

const World = () => {
  return (
    <div>
      <div className="mx-auto px-4 md:px-6 lg:pl-24 flex flex-col md:flex-row py-4 md:py-12 relative">
        {/* Left side: Text content */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 relative text-center md:text-left">
          <h1 className="sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-6">
            <span className="text-yellow-400">Seamless</span> <span>Cargo Shipping/</span>
            <br />
            <span>Courier Service</span>
            <br />
            Anywhere <span className="text-yellow-400">In The</span>
            <span className="text-yellow-400"> World</span>
          </h1>
          <p className="text-[#787878] mb-8 text-base md:text-[15px] max-w-xl mx-auto md:mx-0 hidden md:block">
            At Courier Today By Goodwill Cargo, We Specialize In Fast, Secure,{" "}
            And Cost-Effective Logistics Solutions Tailored To Your Needs. With
            A Legacy Of Excellence Since 1976, We Provide Air, Sea, And Door-To-{" "}
            Door Freight Services Worldwide.
          </p>

          <button className="bg-yellow-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors mx-auto md:mx-0 hidden md:block">
            Book A Call
          </button>
        </div>

        {/* Right side: World Map - Made bigger for mobile */}
        <div className="w-full md:w-2/3 relative scale-110 md:scale-100 mt-2 md:mt-0 -ml-2 md:ml-0">
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