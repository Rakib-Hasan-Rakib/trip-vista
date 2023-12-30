import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/title/SectionTitle";
import SpotCard from "../../../components/card/SpotCard";
import axios from "axios";

const Trending = () => {
  const [trendingTour, setTrendingTour] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}spots/trending`)
      .then((data) => {
        setTrendingTour(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {SectionTitle("Trending Tours", "browse what's trending in bangladesh")}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-3 lg:gap-4 xl:gap-6">
        {trendingTour?.map((spot, i) => {
          return (
            <div key={i} className="relative">
              {/* <Link to={`/spot/${tour._id}`}> */}
              <SpotCard spot={spot} />
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
