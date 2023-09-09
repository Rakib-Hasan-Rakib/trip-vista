import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/title/SectionTitle";
import Image from "../../../components/image/Image";
import { Link } from "react-router-dom";
import Card from "./Card";

const Trending = () => {
  const [trendingTour, setTrendingTour] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}spots/trending`)
      .then((res) => res.json())
      .then((data) => {
        setTrendingTour(data);
      });
  }, []);
  return (
    <div>
      {SectionTitle(
        "Trending Tours",
        "browse what's trending in bangladesh"
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-3 lg:gap-4 xl:gap-6">
        {trendingTour?.map((tour, i) => {
          return (
            <div key={i} className="relative">
              {/* <Link to={`/spot/${tour._id}`}> */}
              <Card tour={tour} />
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
