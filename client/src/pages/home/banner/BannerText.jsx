import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import AnimatedText from "react-animated-text-content";

const BannerText = ({ title, subtitle }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <h2 className="text-white  text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold">
        {title}
      </h2>
      <p className="text-white text-sm md:text-lg xl:text-xl 2xl:text-3xl italic">
        {subtitle}
      </p>
      <Link>
        <Button>Explore Now</Button>
      </Link>
    </div>
  );
};

export default BannerText;
