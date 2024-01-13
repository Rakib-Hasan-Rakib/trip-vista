import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Details from "../pages/tour-details/Details";
import DashLayout from "../layouts/DashLayout";
import Blogs from "../pages/blog/Blogs";
import BlogDetails from "../pages/blog/BlogDetails";
import WriteBlog from "../pages/blog/WriteBlog";
import PrivateRoute from "./PrivateRoute";
import CategoryPlace from "../pages/home/category/CategoryPlace";
import Tours from "../pages/tours/Tours";
import Favourites from "../dashboard/userDash/Favourites";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tours", element: <Tours /> },
      { path: "/blog", element: <Blogs /> },
      { path: "/blog/:id", element: <BlogDetails /> },
      {
        path: "/spot/:id",
        element: <Details />,
      },
      { path: "/place/:category", element: <CategoryPlace /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashLayout />
      </PrivateRoute>
    ),
    children: [{ path: "/dashboard/favourites", element: <Favourites /> }],
  },
  {
    path: "/writeBlog",
    element: (
      <PrivateRoute>
        <WriteBlog />
      </PrivateRoute>
    ),
  },
]);

export default Route;
