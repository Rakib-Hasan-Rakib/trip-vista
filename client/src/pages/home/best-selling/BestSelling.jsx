import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/title/SectionTitle";
import { Link } from "react-router-dom";
import axios from "axios";
import SpotCardTwo from "../../../components/card/SpotCardTwo";
import Container from "../../../components/Container";

const BestSelling = () => {
  const [bestSelling, setBestSelling] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}spots/bestSelling`)
      .then((data) => {
        setBestSelling(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // todo: responsive this section

  return (
    <Container>
      {SectionTitle("best selling tours", "places people like the most")}
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-16">
        {bestSelling?.map((tour, i) => {
          return (
            <div key={i} className="relative">
              {/* <BestSellingCard spot={tour} /> */}
              <SpotCardTwo spot={tour} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default BestSelling;
