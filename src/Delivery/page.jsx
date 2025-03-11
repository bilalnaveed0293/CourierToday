import React from "react";
import deliveryIllustration from "../assets/Delivery.png";

const DeliverySuccessRate = () => {
  return (
    <div className="bg-[#F9D50B] py-16 px-4 relative overflow-hidden hidden md:hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Left side - Text content */}
          <div className="w-full  mb-10 md:mb-0 z-10">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight mb-4">
              Guaranteed Delivery
              <br />
              Success Rate
            </h2>

            {/* You can add additional text or stats here if needed */}
          </div>

          {/* Right side - Illustration */}
          <div className="w-full flex justify-center items-center z-10">
            <img
              src={deliveryIllustration}
              alt="Delivery success illustration with truck, phone and packages"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySuccessRate;
