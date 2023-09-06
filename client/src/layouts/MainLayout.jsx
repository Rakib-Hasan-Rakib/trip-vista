import React from "react";
import Navbar from "../shared/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
