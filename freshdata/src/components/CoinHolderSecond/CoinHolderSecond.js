import React from "react";
import Card from "../Card/Card";

function CoinHolderSecond() {
  return (
    <div>
      <div className="px-5 md:px-16 h-auto py-16 bg-bgGray">
        <div className="grid grid-cols-3">
          <h3 className=" font-bold block  text-2xl mb-6 col-span-3 sm:col-span-1 ">
            Join In
          </h3>
          <div className="col-span-3 sm:col-span-2 mb-6  ">
            <form>
              <div className="relative text-gray-600 text-right  focus-within:text-gray-400">
                <span className="absolute y-0 l-0 ">
                  <button
                    type="submit"
                    className="p-1 pt-2 focus:outline-none focus:shadow-outline"
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
                  className="py-2 text-sm text-gray rounded-full w-full max-w-md pl-10 focus:outline-none shadow cursor-pointer "
                  placeholder="Search..."
                  autoComplete="off"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="md:px-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
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

export default CoinHolderSecond;
