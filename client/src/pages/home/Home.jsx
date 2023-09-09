import React from "react";
import Banner from "./banner/Banner";
import Trending from "./trending/Trending";
import Container from "../../components/Container";
import BestSelling from "./best-selling/BestSelling";
import LowPrice from "./low-price/LowPrice";
import Category from "./category/Category";
import Speciality from "./speciality/Speciality";

const Home = () => {
  return (
    <div>
      <Banner />
      <Container>
        <Trending />
        <Category />
        <Speciality />
        <BestSelling />
        {/* <LowPrice /> */}
      </Container>
    </div>
  );
};

export default Home;
