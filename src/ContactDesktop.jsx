import React from 'react';
import supportGif from './assets/supportGif.png';

const ContactDesktop = () => {
  return (
    <div className="flex justify-center items-center mb-18 bg-white max-sm:hidden block">
      <div className="bg-[#F9D50B] p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-stretch max-w-[48rem] w-full space-y-6 md:space-y-0">
        
        {/* Left Side - Image */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
          <div className="w-72 h-68">
            <img 
              src={supportGif} 
              alt="Customer Support" 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-white mx-4 hidden md:block"></div>

        {/* Right Side - Contact Info */}
        <div className="flex-1 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <div className="mb-4">
            <span className="font-bold text-2xl">Office Number:</span><br />
            <a href="tel:+97142628523" className="hover:underline text-2xl">+971-4-2628523</a>
          </div>
          <div className='text-2xl'>
            <span className="font-bold">Sales Rep Number:</span><br />
            <a href="tel:+971562951575" className="hover:underline">+971-56-2951575</a><br />
            <a href="tel:+971506448584" className="hover:underline">+971-50-6448584</a><br />
            <a href="tel:+971543220150" className="hover:underline">+971-54-3220150</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDesktop;
