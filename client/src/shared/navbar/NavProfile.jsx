import React, { useContext, useState } from "react";
import avatar from "../../assets/images/avatar.jpg";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const NavProfile = () => {
  const { user } = useContext(AuthContext);
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <img
        className="w-6 md:w-8 lg:w-10 xl:w-12 rounded-full"
        src={user && user.photoURL ? user.photoURL : avatar}
        alt="user image"
        title={user?.displayName}
      />
      <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8">
        {user ? isOpen && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link>Logout</Link>
          </>
        ) : isOpen || <Link to="/login">Login</Link>}
      </div>
    </div>
  );
};

export default NavProfile;
