import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/title/SectionTitle";
import "./Category.css";

const Category = () => {
  return (
    <>
      {SectionTitle("Categories", "browse according to your choice")}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center align-baseline">
        <div className="relative move-first">
          <Link>
            <img
              className="h-72 md:h-80 lg:h-96 w-60 object-cover object-center rounded-lg"
              src="https://i.ibb.co/5RB7LTd/chimbuk-hill.jpg"
              alt="mountain"
            />
          </Link>
          <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
            Mountain
          </h2>
        </div>
        <div className="relative move-second">
          <Link>
            <img
              className="h-72 md:h-80 lg:h-96 w-60 object-cover object-center rounded-lg"
              src="https://i.ibb.co/vwYLFZV/st-martin-island.jpg"
              alt="sea beach"
            />
          </Link>
          <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
            Sea Beach
          </h2>
        </div>
        <div className="relative move-third">
          <Link>
            <img
              className="h-72 md:h-80 lg:h-96 w-60 object-cover object-center rounded-lg"
              src="https://i.ibb.co/WK4JTGr/paharpur.jpg"
              alt="historical places"
            />
          </Link>
          <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
            Historical Places
          </h2>
        </div>
        <div className="relative move-fourth">
          <Link>
            <img
              className="h-72 md:h-80 lg:h-96 w-60 object-cover object-center rounded-lg"
              src="https://i.ibb.co/kyYHBSm/boga-lake.jpg"
              alt="lake"
            />
          </Link>
          <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
            Haor & Lake
          </h2>
        </div>
      </div>
    </>
  );
};

export default Category;
