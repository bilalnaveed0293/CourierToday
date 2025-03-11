import React from "react";

const CallToAction = () => {
  return (
    <div className="hidden md:flex min-h-screen bg-white p-8  justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
        {/* Sales Team Section */}
        <div className="bg-[#FFD700] p-12 flex flex-col items-center justify-center text-center w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-white max-w-md">
            Talk to a member of our sales team.
          </h2>
          <a href="tel:+971506448596">
          <button className="bg-[#00A3E0] hover:bg-[#0093CC] text-white font-semibold py-4 px-12 rounded-md text-xl transition-colors">
            CALL NOW
          </button>
          </a>
        </div>

        {/* Support Team Section */}
        <div className="bg-[#FFD700] p-12 flex flex-col items-center justify-center text-center w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-white max-w-md">
            Talk to our customer support team.
          </h2>
          <a href="tel:+971506448524 ">
          <button className="bg-[#00A3E0] hover:bg-[#0093CC] text-white font-semibold py-4 px-12 rounded-md text-xl transition-colors">
            CALL NOW
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
