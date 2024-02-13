import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Container from "../../components/Container";
import DetailsForm from "./DetailsForm";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TourInfo from "./TourInfo";
import SpotHistory from "./SpotHistory";
import axios from "axios";

const Details = () => {
  let { id } = useParams();
  const [tourDetails, setTourDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}spot/${id}`)
      .then((data) => setTourDetails(data.data))
      .catch((err) => console.log(err));
  }, [id]);


  return (
    <Container>
      <div className="h-[50vh] relative">
        <img
          src={tourDetails?.photo}
          alt="spot image"
          className="w-full h-full object-cover object-center rounded-2xl"
        />
        <div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-2xl lg:text-4xl 2xl:text-6x font-bold px-8 md:px-16 lg:px-32 py-4 md:py-6 lg:py-12 bg-black bg-opacity-50 rounded-lg">
            {tourDetails.name}
          </h1>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between mt-8 gap-4">
        <div className="basis-1/3">
          <DetailsForm
            tourDetails={tourDetails}
          />
        </div>
        <div className="mx-auto basis-1/2 w-full ">
          <Tabs>
            <TabList className="flex justify-center items-center gap-4 cursor-pointer">
              <Tab>info</Tab>
              <Tab>history</Tab>
            </TabList>

            <TabPanel>
              <TourInfo tourDetails={tourDetails} />
            </TabPanel>
            <TabPanel>
              <SpotHistory tourDetails={tourDetails} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default Details;
