import React from "react";
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";

function Header() {
  return (
    <div>
      <div className="h-auto px-5 md:px-16  bg-bgBlue ">
        <Nav />
      </div>
    </div>
  );
}

export default Header;
