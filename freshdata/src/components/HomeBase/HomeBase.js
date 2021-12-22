import React from "react";
import coin from "../../images/coin.png";

function HomeBase() {
  return (
    <div>
      <div className="px-5 md:px-16 h-auto py-16 bg-bgBlue">
        <h3 className=" font-bold text-2xl mb-6">Join In</h3>
        <div className="md:px-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <div className=" m-auto bg-bgGray rounded-md shadow-md col-span-1 w-full h-full max-h-[304px] max-w-[240px] pb-10">
            <h2 className="text-center font-bold text-md pt-6 ">Lorem Coin</h2>
            <img
              src={coin}
              className="h-[99px] w-[99px] rounded-full m-auto mt-6"
              alt="coin"
            />
            <p className="text-center font-normal text-xs pt-4">
              30.73k proposals
            </p>
            <div className="w-full h-auto flex justify-items-center pt-4">
              <button className="bg-secondaryBtn text-white text-sm font-medium text-center rounded-md px-4 py-2 m-auto cursor-pointer">
                Join
              </button>
            </div>
          </div>
          <div className="m-auto bg-bgGray rounded-md shadow-md w-full h-full max-h-[304px] max-w-[240px] pb-10">
            <h2 className="text-center font-bold text-md pt-6">Lorem Coin</h2>
            <img
              src={coin}
              className="h-[99px] w-[99px] rounded-full m-auto mt-6"
              alt="coin"
            />
            <p className="text-center font-normal text-xs pt-4">
              30.73k proposals
            </p>
            <div className="w-full h-auto flex justify-items-center pt-4">
              <button className="bg-secondaryBtn text-white text-sm font-medium text-center rounded-md px-4 py-2 m-auto cursor-pointer">
                Join
              </button>
            </div>
          </div>
          <div className="m-auto bg-bgGray rounded-md shadow-md w-full h-full max-h-[304px] max-w-[240px] pb-10">
            <h2 className="text-center font-bold text-md pt-6">Lorem Coin</h2>
            <img
              src={coin}
              className="h-[99px] w-[99px] rounded-full m-auto mt-6"
              alt="coin"
            />
            <p className="text-center font-normal text-xs pt-4">
              30.73k proposals
            </p>
            <div className="w-full h-auto flex justify-items-center pt-4">
              <button className="bg-secondaryBtn text-white text-sm font-medium text-center rounded-md px-4 py-2 m-auto cursor-pointer">
                Join
              </button>
            </div>
          </div>
          <div className="m-auto bg-bgGray rounded-md shadow-md w-full h-full max-h-[304px] max-w-[240px] pb-10">
            <h2 className="text-center font-bold text-md pt-6">Lorem Coin</h2>
            <img
              src={coin}
              className="h-[99px] w-[99px] rounded-full m-auto mt-6"
              alt="coin"
            />
            <p className="text-center font-normal text-xs pt-4">
              30.73k proposals
            </p>
            <div className="w-full h-auto flex justify-items-center pt-4">
              <button className="bg-secondaryBtn text-white text-sm font-medium text-center rounded-md px-4 py-2 m-auto cursor-pointer">
                Join
              </button>
            </div>
          </div>
        </div>
        <p className="text-primaryBtn text-sm pl-10 pt-10 cursor-pointer">
          View more...
        </p>
      </div>
    </div>
  );
}

export default HomeBase;
