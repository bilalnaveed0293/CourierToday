import React from "react";

const CallToAction = () => {
  return (
    <div className="md:flex min-h-screen bg-white p-8  justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
        {/* Sales Team Section */}
        <div className="bg-[#FFD700] p-12 flex flex-col items-center justify-center text-center w-full md:w-1/2">
          <h2 className="text-4xl md:text-4xl font-semibold mb-2 text-white max-w-md">
            Talk to a member of our sales team.
          </h2>
          <p className="mb-7 text-white">+971506448596</p>
          <a href="tel:+971506448596">
            {/* <button className="bg-[#00A3E0] hover:bg-[#0093CC] cursor-pointer text-white font-semibold py-4 px-12 rounded-md text-xl transition-colors">
            CALL NOW
          </button> */}
            <div className="bg-green-500 border-2 border-black rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black"
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

        {/* Support Team Section */}
        <div className="bg-[#FFD700] p-12 flex flex-col items-center justify-center text-center w-full md:w-1/2">
          <h2 className="text-4xl md:text-4xl font-semibold mb-2 text-white max-w-md">
            Chat to our customer sales/support team.
          </h2>
          <p className="mb-7 text-white">+971506448524</p>
          <a href="https://wa.me/+971506448524">
            {/* <button className="bg-[#00A3E0] hover:bg-[#0093CC] cursor-pointer text-white font-semibold py-4 px-12 rounded-md text-xl transition-colors">
            CHAT NOW
          </button> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="#25D366"
                d="M12 0C5.373 0 0 5.373 0 12c0 2.147.56 4.177 1.624 5.967L0 24l6.274-1.602A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.772a9.73 9.73 0 01-4.995-1.356l-.357-.213-3.726.951.998-3.614-.232-.374A9.72 9.72 0 012.267 12c0-5.367 4.366-9.733 9.733-9.733s9.733 4.366 9.733 9.733-4.366 9.733-9.733 9.733zm5.328-7.499c-.292-.146-1.732-.853-2.002-.949-.27-.097-.467-.146-.663.146s-.76.949-.931 1.146c-.17.195-.342.219-.633.073-.292-.146-1.232-.453-2.345-1.446-.866-.77-1.452-1.719-1.625-2.01-.17-.292-.018-.449.128-.596.131-.132.292-.341.438-.512a2.051 2.051 0 00.292-.487c.048-.097.048-.183-.024-.293-.073-.146-.663-1.605-.907-2.2-.24-.58-.483-.503-.663-.512-.17-.008-.365-.009-.56-.009s-.512.073-.78.341c-.267.268-1.017.996-1.017 2.431s1.041 2.822 1.187 3.015c.146.194 2.048 3.125 4.97 4.381 1.809.783 2.525.849 3.433.713.56-.085 1.732-.707 1.975-1.389.243-.682.243-1.268.17-1.389-.073-.122-.267-.195-.56-.341z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
