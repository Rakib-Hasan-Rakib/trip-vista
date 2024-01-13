import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/title/SectionTitle";
import Image from "../../../components/image/Image";
import { Link } from "react-router-dom";
import axios from "axios";

const LowPrice = () => {
  const [lowPrice, setLowPrice] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}spots/lowPrice`)
      .then((data) => setLowPrice(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {SectionTitle("Low price tours of tourza", "know better")}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-3 lg:gap-4 xl:gap-6">
        {lowPrice?.map((tour, i) => {
          return (
            <div key={i} className="relative">
              <Link to={`/spot/${tour._id}`}>
                <div className="w-full h-60 2xl:h-80 rounded-xl">
                  <img
                    src={tour?.photo}
                    alt="spot image"
                    // className={`w-full ${
                    //   i == 1 ? "h-[200%]" : "h-full"
                    // } object-cover object-center`}
                  />
                  <div className="absolute bottom-0 text-white font-semibold p-2">
                    <div className="flex justify-between items-center">
                      <h2 className="text-md md:text-lg lg:text-xl">
                        {tour.name}
                      </h2>
                      <p>BDT: {tour.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LowPrice;
