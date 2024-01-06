import React, { useEffect, useState } from "react";
import { FaLocationDot, FaClock, FaMoneyCheckDollar } from "react-icons/fa6";
import "./details.css"

const TourInfo = ({ tourDetails }) => {
  const { duration, location, price, departure_time, departure_location, age } =
    tourDetails;
  
  
  return (
    <>
      <div className="gradient-bg text-white rounded-md flex justify-evenly items-center py-2 font-bold my-4 md:my-6 lg:my-8">
        <div className="nav-element">
          <FaClock size={24} /> <span>{duration}</span>
        </div>
        <div className="nav-element">
          <FaLocationDot size={24} /> <span>{location?.split(",")[0]}</span>
        </div>
        <div className="nav-element">
          <FaMoneyCheckDollar size={24} /> <span>{price}</span>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-lg">
          <span className="font-bold">Departure Time : </span>
          {departure_time}
        </p>
        <p className="text-lg">
          <span className="font-bold">Departure Location : </span>
          {departure_location}
        </p>
        <p className="text-lg">
          <span className="font-bold">Age : </span> {age}
        </p>
      </div>
    </>
  );
};

export default TourInfo;
