import React from "react";
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";

function Header(props) {
  return (
    <div>
      <div className={`h-auto px-5 md:px-16  ${props.bg} border-b-2 pb-4`}>
        <Nav />
      </div>
    </div>
  );
}

export default Header;
