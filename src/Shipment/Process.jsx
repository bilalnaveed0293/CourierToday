import React from "react";
import road from "../assets/road.png";
const Process = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-6 lg:pr-24 flex flex-row md:flex-row items-center md:justify-between lg:py-12  max-sm:justify-center max-sm:w-full">
        {/* Left side: Main headline */}
        <div className="text-2xl md:text-4xl lg:text-5xl font-semibold lg:mb-6 text-black md:max-w-sm whitespace-normal max-sm:border-l-4 max-sm:pl-2 border-amber-400">
          <p className="">Shipment Process</p>
        </div>

        {/* Vertical line and right side: Description */}
        <div className=" items-center w-full md:w-1/2 hidden md:flex">
          {/* Vertical yellow line */}
          <div className="h-28 w-1 bg-yellow-500 mx-4 hidden md:block"></div>
          {/* Descriptive text */}
          <p className="text-gray-500 text-sm md:text-base lg:text-lg">
            From import/export services to customs clearance across the UAE, we
            handle every detail so you don't have to. With a strong presence in
            the GCC and global shipping network, we simplify your logistics with
            our one-stop solution for individuals and businesses.
          </p>
        </div>
      </div>
      <div>
        <img
          src={road}
          alt="Roadmap"
          srcset=""
          className="mx-auto p-6 md:p-0"
        />
      </div>
    </div>
  );
};

export default Process;
