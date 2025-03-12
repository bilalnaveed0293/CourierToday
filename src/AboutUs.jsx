import React, { useState } from "react";
import decor2 from "./assets/decor2.png";
import about from "./assets/about.png";
const AboutUs = () => {
  // State to manage which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ data from the image
  const faqs = [
    {
      question: "What services does Courier Today by Goodwill Cargo offer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Do you provide tracking for shipments?",
      answer:
        "Yes, we offer real-time tracking for all shipments. You can access it via our online portal or mobile app.",
    },
    {
      question: "How do I contact customer service?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed vestibulum lectus, ut blandit nunc. Nulla tempor sem in consequat porta. Fusce lobortis, dui et ultricies posuere, magna velit convallis lectus, et sagittis purus sapien sed nisi. Fusce ac maximus nibh.",
    },
    {
      question: "Is there a fast delivery service ?",
      answer:
        "Yes, we offer express delivery options for urgent shipments, typically delivered within 24-48 hours depending on the location.",
    },
    {
      question: "What if I am not home during delivery?",
      answer:
        "If you're not home, we will leave the package in a secure location or attempt redelivery. You'll receive a notification with options.",
    },
  ];

  return (
    <div className="bg-gray-50 lg:bg-white lg:min-h-screen p-6 lg:py-12 max-w-6xl mx-auto md:hidden">
      <img
        src={decor2}
        alt="Decorative element"
        className="hidden lg:absolute -left-65 h-2/3"
      />
      <div className="container mx-auto relative z-10 ">
        {/* FAQs Section */}
        <div className="mb-12 flex-col lg:flex-row hidden lg:flex">
          <div className="lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-12">
            We've compiled answers to the most common queries about our
            <h1 className="text-8xl font-bold text-black mb-4">FAQs</h1>
            <p className="text-gray-600 leading-relaxed">
              freight, logistics, and courier services.
            </p>
          </div>

          <div className="lg:w-1/2 ">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t-2 border-gray-900">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-black">
                    {faq.question}
                  </span>
                  <span className="text-black">
                    {openFAQ === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v12M6 12h12"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {openFAQ === index && (
                  <div className="py-4 text-gray-600 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-gray-200"></div>{" "}
            {/* Bottom border for the last item */}
          </div>
        </div>

        {/* About Us Section */}
        <div className="text-center p-4 md:p-0 hidden md:block">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 hidden md:block">
            About Us
          </h1>

          <div className=" md:hidden text-left flex justify-between items-end">
            <h1 className="mb-4 text-4xl md:text-4xl border-l-6 border-yellow-400 pl-3 font-bold text-black ">
              About Us
            </h1>
            <img
              src={about}
              alt="Decorative element"
              className="ml-4"
            />
          </div>
          <p className="text-gray-500 text-base md:text-2xl max-w-4xl mx-auto leading-relaxed max-sm:text-justify">
            At Courier Today by Goodwill Cargo, we take pride in delivering
            seamless logistics solutions with precision and efficiency.
            Established in 1976, we have been a trusted logistics partner for
            businesses and individuals worldwide. Whether you need express air
            freight, cost-effective sea shipping, or door-to-door delivery, we
            ensure that your cargo reaches its destination safely and on time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
