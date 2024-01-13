import { AiFillCar, AiOutlineHeart } from "react-icons/ai";
import { FaPersonSkating } from "react-icons/fa6";
import { LuHotel } from "react-icons/lu";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import Like from "../like/Like";
import { FaRegStar } from "react-icons/fa";

const SpotCard = ({ spot }) => {
  const { _id, photo, name, duration, price } = spot;


  return (
    <div className="bg-gray-50 rounded-lg lg:rounded-xl p-3 space-y-4">
      <div className="relative">
        <img
          className="h-60 xl:h-72 w-full object-cover object-center rounded-2xl"
          src={photo}
          alt="image of places"
        />
        <Like spot={spot} />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
            {name}
          </h2>
          <div className="flex items-center gap-2">
            <FaRegStar size={24} className="text-black" />
            <span className="text-lg"> 4.9</span>
          </div>
        </div>
        <p className="font-semibold text-gray-700">{duration}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex flex-col justify-center items-center">
          <LuHotel size={24} />
          Hotel
        </p>
        <p className="flex flex-col justify-center items-center">
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
          <button className="border bg-green-500 px-4 py-1 rounded-lg text-white tracking-wider font-semibold hover:bg-green-600 hover:duration-700">
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
export default SpotCard;
