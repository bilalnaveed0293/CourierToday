import React from "react";
import service from "../assets/service.png";
const Service = () => {
  return (
    <div className="max-sm:h-16 hidden md:block">
      <img
        src={service}
        alt="Service banner"
        className="w-full max-sm:h-16 max-sm:object-cover"
      />
    </div>
  );
};

export default Service;
