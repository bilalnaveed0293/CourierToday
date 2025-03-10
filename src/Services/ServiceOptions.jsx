import React from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import { Check } from "lucide-react";

const ServiceOptions = () => {
  // State to manage which card is open (for animation control if needed)
  const [openCard, setOpenCard] = React.useState(null);

  const services = [
    {
      title: "Eco-Friendly Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ligula nunc. Maecenas scelerisque purus et mattis ultricies. In urna est, consectetur vel scelerisque ac interdum in sem.",
      icon: { Check },
      image: pic1, // You can replace with an actual icon or image (e.g., checkmark SVG)
    },
    {
      title: "GCC Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ligula nunc. Maecenas scelerisque purus et mattis ultricies. In urna est, consectetur vel scelerisque ac interdum in sem.",
      icon: { Check },
      image: pic3, // You can replace with an actual icon or image
    },
    {
      title: "Same-Day Delivery Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ligula nunc. Maecenas scelerisque purus et mattis ultricies. In urna est, consectetur vel scelerisque ac interdum in sem.",
      icon: { Check },
      image: pic2, // You can replace with an actual icon or image
    },
  ];

  return (
    <div className="bg-white py-12 px-4 md:px-8 hidden lg:block">
      <div className="container mx-auto">
        {/* Headline and Description */}
        <div className="mb-8 ">
          <h2 className="text-5xl font-semibold text-black mb-4">
            Best Service Options
          </h2>
          <p className="text-gray-400 text-base md:text-lg text-left max-w-4xl text-pretty">
            From small samples to commercial container loads, we handle all your
            shipping needs under one roof. Whether you need express delivery,
            bulk transport, or specialized handling, our team ensures smooth and
            hassle-free cargo management.
          </p>
        </div>

        {/* Service Cards */}
        <div className="flex flex-col ml-3 md:flex-col md:ml-0 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 mb-2 relative overflow-hidden transition-all duration-500 ${
                openCard === index ? "bg-[#F9D50B]" : "bg-gray-100"
              }`}
            >
              {/* Header with Title, Icon, and Arrow */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span
                    className={`w-8 h-8 p-1 rounded-full flex items-center justify-center ${
                      openCard === index
                        ? "bg-white"
                        : "bg-[#F9D50B] text-white"
                    }`}
                  >
                    <Check />
                  </span>
                  <h3
                    className={`text-2xl font-bold text-black pl-1 ${
                      openCard === index ? "text-white" : "text-black"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <button
                  onClick={() => setOpenCard(openCard === index ? null : index)}
                  className="focus:outline-none cursor-pointer"
                >
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openCard === index
                        ? "rotate-180 stroke-black"
                        : "stroke-gray-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openCard === index ? "max-h-80" : "max-h-0"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center">
                  {/* Left: Text Content (Description and Button) */}
                  <div className="flex-1">
                    <p className="text-white text-sm md:text-base mb-10  max-w-xl text-pretty pl-5">
                      {service.description}
                    </p>
                    <button className="bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors ml-5">
                      Learn More
                    </button>
                  </div>

                  {/* Right: Illustration */}
                  <div className="flex-shrink-0">
                    <img
                      src={service.image} // Replace with your illustration asset (man with trucks, logistics icons)
                      alt={`${service.title} illustration`}
                      className="w-64 max-w-md object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOptions;
