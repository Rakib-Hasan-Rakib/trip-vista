import React from "react";
import "./SectionTitle.css";

const SectionTitle = (title, subTitle) => {
  return (
    <div className="text-center my-10 md:my-12 lg:my-16 capitalize">
      <h1 className="heading text-2xl md:text-3xl lg:text-6xl text-sky-500 font-bold tracking-widest">
        {title}
      </h1>
      <p className="italic text-gray-8000 md:text-lg md:my-1 font-semibold">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionTitle;
