import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiLocationPlus, BiTimeFive } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";

const TourInfo = () => {
  let { id } = useParams();
  const [tourDetails, setTourDetails] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}spot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTourDetails(data);
      });
  }, [id]);
  // console.log(tourDetails);
  const { duration, location, price, departure_time, departure_location,age} =
    tourDetails;
  return (
    <div className="">
      <div className="flex justify-evenly items-center bg-green-500 py-2 font-bold my-4 md:my-6 lg:my-8">
        <div className="flex flex-col justify-center items-center">
          <BiTimeFive size={24} /> <span>{duration}</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <BiLocationPlus size={24} /> <span>{location?.split(",")[0]}</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <TbCurrencyTaka size={24} /> <span>{price}</span>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-lg">
          <span className="font-bold">Departure Time : </span>{departure_time}
        </p>
        <p className="text-lg">
          <span className="font-bold">Departure Location : </span>{departure_location}
        </p>
        <p className="text-lg">
          <span className="font-bold">Age : </span> {age}
        </p>
      </div>
    </div>
  );
};

export default TourInfo;
