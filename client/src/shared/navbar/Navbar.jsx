import React, { useState } from "react";
// import Menu from "./Menu";
import NavProfile from "./NavProfile";
import Container from "../../components/Container";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/images/tourza-logo.png";
import useAuth from "../../hooks/useAuth";
import Headroom from "react-headroom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, logOut } = useAuth();
  const MenuItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tours"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Tours
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blog
        </NavLink>
      </li>
      <li className="block md:hidden">
        {user ? (
          <NavLink
            onClick={() => logOut()}
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Login
          </NavLink>
        )}
      </li>
      <li onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="hidden md:block">
        <NavProfile />
      </li>
      {isProfileMenuOpen && user && (
        <div className="bg-white flex flex-col absolute top-16 right-0 z-50 w-24 md:w-32 rounded-md space-y-1">
          <Link
            to="/dashboard"
            className="px-2 md:px-4 py-1 hover:text-green-500"
          >
            Dashboard
          </Link>
          <Link
            onClick={() => logOut()}
            className="px-2 md:px-4 py-1 hover:text-green-500"
          >
            Logout
          </Link>
        </div>
      )}
      {isProfileMenuOpen && !user && (
        <div className="bg-white flex flex-col absolute top-16 right-0 z-50 w-24 md:w-32 rounded-md space-y-1">
          <Link
            to="/register"
            className="px-2 md:px-4 py-1 hover:text-green-400"
          >
            Register
          </Link>
          <Link to="/login" className="px-2 md:px-4 py-1 hover:text-green-400">
            Login
          </Link>
        </div>
      )}
    </>
  );
  return (
    <Headroom>
      <div className="w-full mb-12 z-10 navbar py-2  bg-black opacity-90 backdrop-blur-[5px] max-sm:px-8">
        <Container>
          <>
            <div className=" md:flex justify-between items-center">
              <div className="navbar flex justify-between items-center">
                <Link
                  to="/"
                  className="text-xl tracking-wide md:tracking-widest text-white flex items-center gap-4"
                >
                  <img
                    src={logo}
                    alt="brand logo"
                    className="w-10 md:w-12 lg:w-14 2xl:w-16 h-10 md:h-12 lg:h-14 2xl:h-16 rounded-full"
                  />
                  <p className="font-bold heading text-lg md:text-xl lg:text-2xl">
                    Tourza
                  </p>
                </Link>
                <div className="dropdown z-50">
                  <label tabIndex={0} className="btn btn-ghost md:hidden">
                    {isMenuOpen && (
                      <AiOutlineMenu
                        onClick={() => setIsMenuOpen(false)}
                        className="h-6 w-6 text-white"
                      />
                    )}
                    {isMenuOpen || (
                      <AiOutlineMenu
                        onClick={() => setIsMenuOpen(true)}
                        className="h-6 w-6 text-white"
                      />
                    )}
                  </label>
                  <ul
                    tabIndex={0}
                    className={`menu menu-sm dropdown-content flex items-center gap-2 rounded-box bg-white text-black rounded-lg ${
                      isMenuOpen
                        ? "absolute flex flex-col right-1 p-8"
                        : "hidden"
                    }`}
                  >
                    {MenuItem}
                  </ul>
                </div>
              </div>
              <div className="navbar-center hidden md:block">
                <ul className="menu menu-horizontal px-1 flex justify-between gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 items-center">
                  {MenuItem}
                </ul>
              </div>
            </div>
          </>
        </Container>
      </div>
    </Headroom>
  );
};

export default Navbar;
