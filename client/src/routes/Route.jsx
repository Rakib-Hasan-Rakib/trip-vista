import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Route = createBrowserRouter([{ path: "/", element: <MainLayout /> }]);

export default Route;
