import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Container from "../../components/Container";
import Image from "../../components/image/Image";
import DetailsNav from "./details-nav/DetailsNav";
import DetailsForm from "./details-form/DetailsForm";

const Details = () => {
  let { id } = useParams();
  const [tourDetails, setTourDetails] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}spot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTourDetails(data);
      });
  }, [id]);
//   console.log(tourDetails);
    
  return (
    <Container>
      <div className="h-[40vh] relative">
        <Image source={tourDetails.photo} />
        <div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-2xl lg:text-4xl 2xl:text-6x font-bold px-8 md:px-16 lg:px-32 py-4 md:py-6 lg:py-12 bg-black bg-opacity-50 rounded-lg">
            {tourDetails.name}
          </h1>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between mt-8 gap-4 md:gap-8">
        <div className="basis-1/3">
          <DetailsForm tourDetails={tourDetails} />
        </div>
        <div className="w-full mx-auto basis-1/2">
          <DetailsNav />
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Details;
