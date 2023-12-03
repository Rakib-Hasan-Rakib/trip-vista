import React, { useState } from "react";
import Menu from "./Menu";
import NavProfile from "./NavProfile";
import Container from "../../components/Container";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
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
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          About
        </NavLink>
      </li>
      <li onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
        <NavProfile />
      </li>
      <>
        {isProfileMenuOpen && (
          <>
            <li>Rakib</li>
            <li>hasan</li>
          </>
        )}
      </>
    </>
  );
  return (
    <div className="fixed w-full mb-12 z-10 navbar py-2 rounded-lg bg-black bg-opacity-50 backdrop-blur-[1px] max-sm:px-8">
      <Container>
        <>
          <div className=" md:flex justify-between items-center">
            <div className="navbar flex justify-between items-center">
              <Link
                to="/"
                className="text-xl tracking-wide md:tracking-widest text-white"
              >
                Tourza
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
                    isMenuOpen ? "absolute flex flex-col right-1 p-8" : "hidden"
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
  );
};

export default Navbar;
