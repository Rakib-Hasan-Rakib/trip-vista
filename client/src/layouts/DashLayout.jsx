import React from "react";
import Sidebar from "../dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashLayout;
