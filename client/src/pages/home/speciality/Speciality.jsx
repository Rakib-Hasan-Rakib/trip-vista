import React from 'react';
import boy from "../../../assets/images/boy-employee.png";
import girl from '../../../assets/images/girl-employee.png'
import SectionTitle from '../../../components/title/SectionTitle';
import { FaLocationDot } from 'react-icons/fa6'
import { AiFillStar } from 'react-icons/ai'
import { SiYourtraveldottv } from "react-icons/si";

const Speciality = () => {
    return (
      <>
        {SectionTitle("Our Speciality", "Know better about us")}
        <div className="flex justify-evenly items-center bg-gray-100 py-4">
          <img
            className="hidden md:block md:h-48 w-24 md:w-20 object-center object-cover"
            src={boy}
            alt="boy employee photo"
          />
          <div className=" bg-white w-28 lg:w-48 px-2 md:px-6 py-1 md:py-3 rounded-xl text-center">
            <p className="md:text-2xl lg:text-3xl font-bold my-2 flex gap-1 md:gap-3 items-center">
              20+
            </p>
            <p className="flex gap-1 md:gap-3 items-center text-sm md:text-lg">
              <FaLocationDot size={20} className="text-red-600" /> Tours
            </p>
          </div>
          <div className=" bg-white w-28 lg:w-48 px-1 md:px-6 py-1 md:py-3 rounded-xl">
            <p className="md:text-2xl lg:text-4xl font-bold my-2">50+</p>
            <p className="flex gap-1 md:gap-3 items-center text-sm md:text-lg">
              <SiYourtraveldottv size={20} className="text-red-600" /> Tours
            </p>
          </div>
          <div className=" bg-white w-28 lg:w-48 px-2 md:px-6 py-1 md:py-3 rounded-xl">
            <p className=" md:text-2xl lg:text-4xl font-bold my-2">500+</p>
            <p className="flex gap-1 md:gap-3 items-center text-sm md:text-lg">
              <AiFillStar size={20} className="text-red-600" /> Reviews
            </p>
          </div>
          <img
            className="hidden md:block md:h-48 w-24 md:w-20 object-center object-cover"
            src={girl}
            alt="girl employee photo"
          />
        </div>
      </>
    );
};

export default Speciality;