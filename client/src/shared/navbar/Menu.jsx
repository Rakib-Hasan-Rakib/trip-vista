import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from "react-icons/ai";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const navlink = () => {
    return (
      <>
        <Link to="/" className="flex flex-col justify-center">
          <AiOutlineHome size={24} />
          Home
        </Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </>
    );
  };
  return (
    <>
      <div
        className={`flex justify-center items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8`}
      >
        {navlink()}
      </div>
      {/* <AiOutlineMenu onClick={() => setMenuOpen(true)} />
      <div className="flex flex-col">{navlink()}</div> */}

      {/* mobile  responsive section  */}
      {/* <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          onClick={() => setMenuOpen(true)}
        >
          <AiOutlineMenu className="w-5 text-gray-600" />
        </button>
      </div> */}
    </>
  );
};

export default Menu;
