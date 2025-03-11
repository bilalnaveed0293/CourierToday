import React from "react";
import { useState } from "react";
import Plan from "../assets/Plan.png";

const PlansForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="bg-white lg:py-12 px-4 max-w-6xl mx-auto md:hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 max-sm:text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
            <span className=" max-sm:border-l-4 max-sm:pl-1 border-yellow-400">
              Organize your plans
            </span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg hidden md:block">
            From small samples to commercial container loads, we handle all your
            shipping needs under one roof. Whether you need express delivery,
            bulk transport, or specialized handling, our team ensures smooth and
            hassle-free cargo management.
          </p>

          <form 
            onSubmit={handleSubmit}
            className="space-y-6 p-6 lg:p-0 max-sm:text-left"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-black text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-black text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-black text-sm font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-black text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your Message"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-md h-32 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-white px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors flex items-center max-sm:mx-auto"
            >
              Send Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Illustration */}
        <div className="hidden md:w-1/2 lg:flex justify-center mt-8 md:mt-0">
          <img
            src={Plan}
            alt="Logistics Illustration"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PlansForm;
