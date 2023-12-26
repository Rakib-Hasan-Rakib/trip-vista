import axios from "axios";
import { useState } from "react";
import SpotCard from "../../../components/card/SpotCard";
import { useParams } from "react-router-dom";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/title/SectionTitle";

const CategoryPlace = () => {
  const [spots, setSpots] = useState([]);
  const { category } = useParams();
  console.log(category)
  axios
    .get(`${import.meta.env.VITE_BASE_URL}place/${category}`)
    .then((data) => {
      setSpots(data.data);
    })
    .catch((error) => console.log(error));
  return (
    <>
      <Container>
        {SectionTitle(`discover these beautiful ${category}`,`visit the most popular ${category} of Bangladesh`)}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-3 lg:gap-4 xl:gap-6">
          {spots?.map((spot, i) => {
            return (
              <div key={i} className="relative">
                {/* <Link to={`/spot/${tour._id}`}> */}
                <SpotCard spot={spot} />
                {/* </Link> */}
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};
export default CategoryPlace;
