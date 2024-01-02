import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import Container from "../../../components/Container";

const BannerText = ({ title, desc }) => {
  return (
    <>
      <div className="text-start text-white">
        <Container>
          <h1 className="text-8xl capitalize font-bold">{title}</h1>
          <p className="">{desc}</p>
          <Link to="/tours">
            <Button>Explore Now</Button>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default BannerText;
