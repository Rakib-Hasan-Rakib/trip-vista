import React, { useContext } from "react";
import avatar from "../../assets/images/avatar.jpg";
import { AuthContext } from "../../providers/AuthProvider";
// import { Link } from "react-router-dom";

const NavProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <img
      className="rounded-full w-12 cursor-pointer"
      src={user && user.photoURL ? user.photoURL : avatar}
      alt="profile"
    />
  );
};

export default NavProfile;
