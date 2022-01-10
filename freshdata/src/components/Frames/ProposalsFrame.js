import React from "react";
import CoinCard from "../Card/CoinCard";

function ProposalsFrame() {
  return (
    <div>
      <h2 className="pt-8 font-bold text-2xl pb-4">Your proposals</h2>
      <p className="text-lg">Kindly find all created proposals below</p>
      <div className="mt-8">
        <div className="grid grid-cols-2 mb-5">
          <div className="col-span-2 sm:col-span-1"></div>
          <div className="col-span-2 sm:col-span-1 grid grid-cols-4 gap-4">
            <div className="col-span-4 sm:col-span-3">
              <form>
                <div className="relative text-gray-400 text-right  ">
                  <span className="absolute y-0 l-0 ">
                    <button
                      type="submit"
                      className="p-1 pt-2 pl-2 focus:outline-none focus:shadow-outline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>

                  <input
                    type="text"
                    name="q"
                    className="py-2 text-sm text-gray-500 rounded-full w-full max-w-md pl-10 focus:outline-none  shadow-md cursor-pointer "
                    placeholder="Search..."
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
            <div className="col-span-4 sm:col-span-1">
              <form>
                <select className="form-select appearance-none bg-coinCardBorder   rounded-md transition  ease-in-out  w-full h-[40px] cursor-pointer py-2 px-3  leading-tight text-xs focus:outline-primaryBtn  ">
                  <option value="1">All</option>
                  <option value="2">Active</option>
                  <option value="3">Pending</option>
                  <option value="4">Finished</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <CoinCard status={0} />
        <CoinCard status={1} />
        <CoinCard status={2} />
      </div>
    </div>
  );
}

export default ProposalsFrame;
