import StarRatings from "react-star-ratings";
import "./card.css";
import { Link } from "react-router-dom";

const SpotCardTwo = ({ spot }) => {
  const { _id, photo, name, duration, price, location } = spot;

  console.log(spot);

  return (
    <>
      <Link to={`/spot/${_id}`}>
        <div
          style={{ backgroundColor: "#001848" }}
          className="relative font-sans card-body text-white md:h-60 lg:h-48 xl:h-60 w-full rounded-2xl flex flex-col md:flex-row items-end md:items-center justify-start md:justify-end group"
        >
          <div className="basis-1/2">
            <img
              src={photo}
              alt="spot image"
              className="card-image h-full w-1/2 md:w-52 lg:w-1/2 xl:w-60 2xl:w-96 object-cover object-center rounded-xl md:group-hover:absolute md:group-hover:-top-3 md:group-hover:-left-5 group-hover:transition duration-500"
            />
          </div>
          <div className="basis-1/2 p-4 flex flex-col justify-between items-center">
            <div className="flex flex-col items-center">
              <h3 className=" font-bold text-lg md:text-3xl tracking-wider">
                {name}
              </h3>
              <p className="text-xs md:text-lg lg:text-sm xl:text-lg 2xl:text-xl">
                {location}
              </p>
              <StarRatings
                rating={4.5}
                starDimension="15px"
                starSpacing="2px"
                starRatedColor="#fff"
              />
              <p className="tracking-widest text-xs md:text-lg lg:text-sm xl:text-lg 2xl:text-xl">
                4.5 <span>(50)</span>
              </p>
            </div>
            <div className="flex justify-start items-center gap-8">
              <div>
                <p className="text-xs md:text-lg lg:text-sm xl:text-lg 2xl:text-xl">
                  Duration
                </p>
                <p className="text-xs md:text-lg lg:text-sm xl:text-lg 2xl:text-xl">
                  {duration}
                </p>
              </div>
              <div>
                <p className="text-xs md:text-lg lg:text-sm xl:text-lg 2xl:text-xl">
                  Price
                </p>
                <p className="text-xs md:text-lg lg:text-sm xl:text-lg 2xl:text-xl">
                  {price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default SpotCardTwo;
