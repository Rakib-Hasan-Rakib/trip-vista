import React from "react";
import Banner from "./banner/Banner";
import Trending from "./trending/Trending";
import Container from "../../components/Container";
import BestSelling from "./best-selling/BestSelling";
import LowPrice from "./low-price/LowPrice";

const Home = () => {
  return (
    <div>
      <Container>
        <Banner />
        <Trending />
        <BestSelling />
        <LowPrice />
      </Container>
    </div>
  );
};

export default Home;
