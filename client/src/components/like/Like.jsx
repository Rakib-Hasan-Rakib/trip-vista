import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from "../../providers/AuthProvider";

const Like = ({ placeId }) => {
  const { user } = useContext(AuthContext);

  const handleLike = () => {
    const id = { id: placeId };
    fetch(`${import.meta.env.VITE_BASE_URL}like/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(id);
  };
  return (
    <>
      <AiOutlineHeart
        onClick={() => handleLike()}
        size={28}
        className="absolute top-3 right-3 text-red-600 cursor-pointer"
      />
    </>
  );
};

export default Like;
