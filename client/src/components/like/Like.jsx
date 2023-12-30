import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const Like = ({ placeId }) => {
  const { user } = useContext(AuthContext);
  const [fav, setFav] = useState([]);

  const handleAddToFav = () => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}favSpot/${user?.email}`, {
        placeId,
      })
      .then((data) => {
        if (data.data.insertedId) {
          toast.success("This item added to your favourite list");
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}favSpot/${user?.email}`)
      .then((data) => {
        setFav(data.data);
      })
      .catch((err) => console.log(err));
  }, [placeId]);

  return (
    <>
      {fav?.map((place) => {
        place.placeId == placeId ? (
           <AiFillHeart
            size={28}
            className="absolute top-3 right-3 text-red-600 cursor-pointer"
          />
        ) : (
          <AiOutlineHeart
            onClick={handleAddToFav}
            size={28}
            className="absolute top-3 right-3 text-red-600 cursor-pointer"
          />
        );
      })}
    </>
  );
};

export default Like;
