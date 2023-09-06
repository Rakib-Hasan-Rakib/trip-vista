import React from "react";
import Menu from "./Menu";
import NavProfile from "./NavProfile";
import Container from "../../components/Container";

const Navbar = () => {
  return (
    <div className=" bg-green-500">
      <Container>
        <div className="flex justify-between items-center py-2">
          <div className="border-2 border-red-500">
            <h2>TripVista</h2>
          </div>
          <Menu />
          <NavProfile />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
