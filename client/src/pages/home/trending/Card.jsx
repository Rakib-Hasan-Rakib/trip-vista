import React from "react";
import Image from "../../../components/image/Image";
import { AiFillCar, AiOutlineHeart } from "react-icons/ai";
import { FaPersonSkating } from "react-icons/fa6";
import { LuHotel } from "react-icons/lu";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import Like from "../../../components/like/Like";

const Card = ({ tour }) => {
  const { _id, photo, name, duration, price } = tour;
  return (
    <div className="bg-gray-50 rounded-lg lg:rounded-xl p-3 space-y-4">
      <div className="relative">
        <img
          className="h-60 xl:h-72 w-full object-cover object-center rounded-2xl"
          src={photo}
          alt="image of places"
        />
        <Like placeId = {_id} />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
            {name}
          </h2>
          <p>4.9</p>
        </div>
        <p className="font-semibold text-gray-700">{duration}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex flex-col justify-center items-center">
          <LuHotel size={24} />
          Hotel
        </p>
        <p className="flex flex-col justify-center items-center">
          {" "}
          <AiFillCar size={24} />
          Transfer
        </p>
        <p className="flex flex-col justify-center items-center">
          <FaPersonSkating size={24} /> 2 Activities
        </p>
      </div>
      <div>
        <ul className="list-disc pl-5">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <Link to={`/spot/${_id}`}>
          <button className="border border-emerald-600 px-4 py-1 rounded-lg text-emerald-600 hover:bg-gray-200 font-semibold">
            Details
          </button>
        </Link>
        <div className="flex justify-center items-center">
          <TbCurrencyTaka size={24} />
          <p className="text-xl font-semibold">
            {price}
            <small className="text-sm">/per person</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
