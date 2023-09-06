import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Details from "../pages/tour-details/Details";
import SpotHistory from "../pages/tour-details/spot-history/SpotHistory";
import TourInfo from "../pages/tour-details/tour-info/TourInfo";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      {
        path: "/spot/:id",
        element: <Details />,
        children: [
          { path: "/spot/:id", element: <TourInfo /> },
          { path: "/spot/:id/history", element: <SpotHistory /> },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default Route;
