import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../../components/title/SectionTitle";

const Favourites = () => {
  const { user } = useAuth();
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}favPlace/${user?.email}`)
      .then((data) => setFavourites(data.data))
      .catch((err) => console.log(err));
  }, [user?.email]);
  return (
    <>
      <div className="flex justify-center">
        {SectionTitle("Favourite spots", "view your favourite tourist spots")}
        {/* {favourites.map((favourite, i) => {
          axios
            .get(`${import.meta.env.VITE_BASE_URL}spot/${favourite?.placeId}`)
            .then((data) => console.log(data.data))
            .catch((err) => console.log(err));
          //   console.log(favourite);
        })} */}
      </div>
    </>
  );
};
export default Favourites;
