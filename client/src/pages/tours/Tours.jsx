import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../../components/Container";
import SpotCard from "../../components/card/SpotCard";
import SectionTitle from "../../components/title/SectionTitle";

const Tours = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}spots`)
      .then((data) => setSpots(data.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <Container>
        {SectionTitle("See where you can go with us","safe, budget friendly tours")}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-3 lg:gap-4 xl:gap-6">
          {spots?.map((spot, i) => {
            return <SpotCard key={i} spot={spot} />;
          })}
        </div>
      </Container>
    </>
  );
};
export default Tours;
