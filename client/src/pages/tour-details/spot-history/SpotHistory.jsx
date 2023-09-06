import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SpotHistory = () => {
  let { id } = useParams();
  const [tourDetails, setTourDetails] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}spot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTourDetails(data);
      });
  }, [id]);
  // console.log(tourDetails);
  const history = tourDetails?.history;
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-2">
        {history ? history[0] : "Not History Found Here"}
      </h1>
      <div className="space-y-3 my-4">
        {history?.slice(1).map((text, i) => {
          return (
            <div key={i}>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpotHistory;
