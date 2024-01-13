import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const Like = ({ spot }) => {
  const { user } = useContext(AuthContext);
  const [fav, setFav] = useState(false);
  const [favPlace, setFavPlace] = useState([]);
  console.log(spot)

  const handleAddToFav = () => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}favSpot/${user?.email}`, {
        spot,
      })
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          toast.success("This item added to your favourite list");
        }
        if (data.data.exist) {
          toast.success(data.data.exist);
        }
      })
      .catch((err) => console.log(err));
    setFav(true);
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}favPlace/${user?.email}`)
      .then((data) => {
        setFavPlace(data.data);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);
  console.log(favPlace);

  return (
    <>
      <AiOutlineHeart
        onClick={handleAddToFav}
        size={28}
        className="absolute top-3 right-3 text-red-500 cursor-pointer"
      />
      {/* {favPlace?.map((place, i) => {
        return (
          <div key={i}>
            {place.placeId == placeId || fav ? (
              <AiFillHeart
                size={28}
                className="absolute top-3 right-3 text-red-500 cursor-pointer"
              />
            ) : (
              <AiOutlineHeart
                onClick={handleAddToFav}
                size={28}
                className="absolute top-3 right-3 text-red-500 cursor-pointer"
              />
            )}
          </div>
        );
      })} */}
    </>
  );
};

export default Like;
