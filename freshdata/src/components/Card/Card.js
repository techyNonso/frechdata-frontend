import React, { useEffect } from "react";
import coin from "../../images/coin.png";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <div>
      <div className=" m-auto bg-bgGray rounded-md shadow-md col-span-1 w-full h-full max-h-[304px] max-w-[240px] pb-10">
        <h2 className="text-center font-bold text-md pt-6 first-letter:uppercase">
          {props.contract.get("govName")}
        </h2>
        <img
          src={coin}
          className="h-[99px] w-[99px] rounded-full m-auto mt-6"
          alt="coin"
        />
        <p className="text-center font-normal text-xs pt-4">30.73k proposals</p>
        <div className="w-full h-auto flex justify-items-center pt-4">
          <Link
            to={`/propsals/${props.contract.get("govAddress")}/1`}
            className="bg-secondaryBtn text-white text-sm font-medium text-center rounded-md px-4 py-2 m-auto cursor-pointer"
          >
            Join
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
