import React from "react";
import { NavLink, useParams } from "react-router-dom";

const DetailsNav = () => {
  const { id } = useParams();
  return (
    <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-6">
      <NavLink
        to={`/spot/${id}/`}
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Information
      </NavLink>
      <NavLink
        to={`/spot/${id}/history`}
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        History
      </NavLink>
    </div>
  );
};

export default DetailsNav;
