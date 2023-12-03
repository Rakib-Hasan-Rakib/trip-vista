import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { AiOutlineMenu } from "react-icons/ai";
import NavProfile from "./NavProfile";

const Menu = () => {
  const { user, logOut, role, setRole } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

 
  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <div className="flex flex-col md:flex-row justify-between md:gap-8 items-center">
          <p>Home</p>
          <p>Blog</p>
          <p>About</p>
        </div>
      </div>
      {/* <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <NavProfile />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              About
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link>

                <div
                  onClick={() => {
                    logOut();
                  }}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Menu;
