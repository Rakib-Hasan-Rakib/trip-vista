import React from "react";

const Image = ({ source }) => {
  return (
    <img
      className="w-[100%] h-[100%] object-cover object-center"
      src={source}
      alt="image of places"
    />
  );
};

export default Image;
