import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/5 h-[100vh] bg-red-400 flex flex-col py-12">
      <div>
        <p>My Bookings</p>
        <p>Favourite Places</p>
      </div>
      <div className="mt-auto">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Sidebar;
