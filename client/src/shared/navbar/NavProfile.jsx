import React, { useContext } from "react";
import avatar from "../../assets/images/avatar.jpg";
import { AuthContext } from "../../providers/AuthProvider";
// import { Link } from "react-router-dom";

const NavProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <img
      className="rounded-full border border-red-600"
      src={user && user.photoURL ? user.photoURL : avatar}
      alt="profile"
      height="30"
      width="30"
    />
  );
};

export default NavProfile;
