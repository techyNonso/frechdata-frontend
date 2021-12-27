import React from "react";
import coin from "../../images/coin.png";
import Card from "../Card/Card";

function HomeBase() {
  return (
    <div>
      <div className="px-5 md:px-16 h-auto py-16 bg-bgBlue">
        <h3 className=" font-bold text-2xl mb-6">Join In</h3>
        <div className="md:px-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <p className="text-primaryBtn text-sm pl-10 pt-10 cursor-pointer">
          View more...
        </p>
      </div>
    </div>
  );
}

export default HomeBase;
