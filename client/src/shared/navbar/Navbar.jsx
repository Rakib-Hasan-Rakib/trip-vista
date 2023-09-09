import React from "react";
import Menu from "./Menu";
import NavProfile from "./NavProfile";
import Container from "../../components/Container";
import "./Navbar.css";
import Header from "./Header";

const Navbar = () => {
  return (
    <div className=" text-black bg-transparent fixed w-full mb-12 z-10">
      <Container>
        <div className="flex justify-between items-center py-2">
          <div className="relative">
            <h2 className="logo text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl">
              Tourza
            </h2>
            {/* <p className="bg-yellow-600 h-4 w-full -rotate-6 origin-top-right absolute top-4 -z-10"></p> */}
          </div>
          <Menu />
          {/* <Header /> */}
          {/* <NavProfile /> */}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
