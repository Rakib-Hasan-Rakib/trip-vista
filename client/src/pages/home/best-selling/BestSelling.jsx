import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/title/SectionTitle";
import Image from "../../../components/image/Image";
import { Link } from "react-router-dom";
import BestSellingCard from "./BestSellingCard";

const BestSelling = () => {
  const [bestSelling, setBestSelling] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}spots/bestSelling`)
      .then((res) => res.json())
      .then((data) => {
        setBestSelling(data);
      });
  }, []);

  // todo: responsive this section

  return (
    <div>
      {SectionTitle("best selling tours from tourza", "know better")}
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-4 xl:gap-6">
        {bestSelling?.map((tour, i) => {
          return (
            <div key={i} className="relative">
              <BestSellingCard tour={tour} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSelling;
