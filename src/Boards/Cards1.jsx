import React, { useState, useEffect } from "react";
import pic1 from "../assets/card/pic1.png";
import pic2 from "../assets/card/pic2.png";
import pic3 from "../assets/card/pic3.png";
import pic4 from "../assets/card/pic4.png";
import pic5 from "../assets/card/pic5.png";
import pic6 from "../assets/card/pic6.png";
import pic7 from "../assets/card/pic7.png";
import pic8 from "../assets/card/pic8.png";

const LogisticsServices = () => {
  const services = [
    { id: 1, title: "Air Freight / Courier Service", description: "Air transportation services for small to large packages, offering real-time tracking options with Reputed & Reliable Carriers. We understand the importance of timely & secure delivery of your cargo.", icon: pic1 },
    { id: 2, title: "Sea freight", description: "Our company offers LCL (less-than-container load) & FCL (full-container load) services with highly reputable carriers that meet your requirements for competitive pricing and transit time.", icon: pic2 },
    { id: 3, title: "Full GCC Coverage", description: "We Offer comprehensive Transportation solutions that include Air, Sea, and Road services across the United Arab Emirates, Bahrain, Oman, Kuwait, Saudi Arabia, and Qatar.", icon: pic3 },
    { id: 4, title: "Import / Export Service", description: "We offer global shipping services for both domestic and commercial clients, facilitating transportation to and from the United Arab Emirates via Air- Sea.", icon: pic4 },
    { id: 5, title: "DOOR TO DOOR WORLDWIDE", description: "Door-to-Door services cater to every aspect of your shipment, from origin to destination. We manage the entire logistics process with utmost care & attention.", icon: pic5 },
    { id: 6, title: "Customs Clearance Service", description: "Our company offers efficient & reliable customs clearance services for both Air & Sea Ports throughout the UAE. Allow us to navigate the complex customs regulations.", icon: pic6 },
    { id: 7, title: "Special Courier Rates", description: "North America (USA, Canada, Mexico), South America (Brazil, Argentina, Chile), Europe (Germany, France, UK, Spain, Italy), Asia, and Africa.", icon: pic7 },
    { id: 8, title: "One Stop Solution", description: "We provide all-in-one logistics and shipping solutions for individuals and businesses. From small samples to commercial container loads, we handle it all.", icon: pic8 },
  ];

  const [visibleContent, setVisibleContent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleContent = (id) => {
    setVisibleContent((prev) => (prev === id ? null : id));
  };

  // Mobile card component with animation
  const MobileServiceCard = ({ service }) => (
    <div
      className="bg-white p-4 flex flex-col items-center shadow-md rounded-lg cursor-pointer transition-all duration-300 h-full"
      onClick={() => toggleContent(service.id)}
    >
      <div className={`w-full transition-opacity duration-500 ${visibleContent === service.id ? 'opacity-0 h-0' : 'opacity-100'}`}>
        <img
          src={service.icon}
          alt={service.title}
          className="w-16 h-20 object-contain mx-auto mb-2"
        />
        <h3 className="text-sm font-semibold text-center">{service.title}</h3>
      </div>

      <div
        className={`w-full text-center transition-opacity duration-500 flex items-center justify-center ${visibleContent === service.id ? 'opacity-100 h-full' : 'opacity-0 h-0 overflow-hidden'}`}
      >
        <p className="text-black text-[11px]">{service.description}</p>
      </div>
    </div>
  );

  // Desktop card component
  const DesktopServiceCard = ({ service }) => (
    <div
      className="bg-[#F8F8F8] p-4 flex flex-col items-center shadow-md cursor-pointer transition-all duration-300 h-full"
      onClick={() => toggleContent(service.id)}
    >
      <div className={`w-full transition-opacity duration-500 ${visibleContent === service.id ? 'opacity-0 h-0' : 'opacity-100'}`}>
        <img
          src={service.icon}
          alt={service.title}
          className="w-76 h-88 object-contain mx-auto"
        />
        <h3 className="text-lg font-semibold text-center mt-2">{service.title}</h3>
      </div>

      <div
        className={`w-full text-center transition-opacity duration-500 flex items-center justify-center ${visibleContent === service.id ? 'opacity-100 h-full' : 'opacity-0 h-0 overflow-hidden'}`}
      >
        <p className="text-black text-2xl">{service.description}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white py-6 md:py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-around mb-8 md:mb-12 px-2 md:px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight max-w-[450px] mb-4 md:mb-0 text-center md:text-left">
            Experience stress-free Shopping/Courier Service!
          </h2>
          <div className="flex flex-row">
            <div className="h-28 w-0.5 bg-yellow-500 mx-4 hidden md:block"></div>
            <p className="text-gray-500 text-base md:text-lg mt-2 md:w-[550px] text-center md:text-left">
              With a vast global network, we specialize in import/export services, customs clearance, and full GCC coverage, making international shipping effortless.
            </p>
          </div>
        </div>
        
        {isMobile ? (
          // Mobile Layout - 2 column grid with animations
          <div className="grid grid-cols-2 gap-4 w-full">
            {services.map((service) => (
              <MobileServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          // Desktop Layout - Original design
          <div className="flex flex-col items-center gap-6">
            {/* First Row: 3 cards */}
            <div className="grid grid-cols-3 gap-10 w-full max-w-6xl">
              {services.slice(0, 3).map((service) => (
                <DesktopServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Second Row: 3 cards */}
            <div className="grid grid-cols-3 gap-10 w-full max-w-6xl">
              {services.slice(3, 6).map((service) => (
                <DesktopServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Third Row: 2 cards, centered */}
            <div className="flex justify-center w-full max-w-6xl">
              <div className="grid grid-cols-2 gap-10 w-full md:w-2/3">
                {services.slice(6, 8).map((service) => (
                  <DesktopServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogisticsServices;