import { AiOutlineHeart } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import Like from "../like/Like";

const BestSellingCard = ({ spot }) => {
  const { _id, photo, name, duration, price } = spot;
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-8 bg-gray-50 border border-red-500 rounded-lg lg:rounded-xl p-3 space-y-4">
      <div className="relative">
        <img
          className="h-48 2xl:h-60 w-full md:w-52 lg:w-60 2xl:w-96 object-cover object-center rounded-2xl"
          src={photo}
          alt="image of places"
        />
        {/* <Like placeId={_id} /> */}
        {/* <AiOutlineHeart
          size={28}
          className="absolute top-3 right-3 text-red-600"
        /> */}
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between">
            <h2 className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
              {name}
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-700">{duration}</p>
            <p>rating</p>
          </div>
        </div>
        <div className="lg:hidden xl:block">
          <ul className="list-disc pl-5">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div className="flex justify-between items-center ">
          <Link to={`/spot/${_id}`}>
            <button className="border border-emerald-600 px-4 py-1 rounded-full text-emerald-600 hover:bg-gray-200 font-semibold">
              Details
            </button>
          </Link>
          <div className="flex justify-center items-center">
            <TbCurrencyTaka size={24} />
            <p className="text-xl font-semibold">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSellingCard;
