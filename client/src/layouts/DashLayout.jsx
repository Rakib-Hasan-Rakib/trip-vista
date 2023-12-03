import React from "react";
import Sidebar from "../dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashLayout;
