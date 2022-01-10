import React from "react";
import { useMoralis } from "react-moralis";
import { useAuthUpdate, useAuth } from "../contexts/AuthProvider";

function Progress({ status }) {
  //get auth context
  const AuthState = useAuth();

  if (status === 0) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-4 w-full ">
          <div className="col-span-3 flex">
            <div className="bg-yesPoint h-2 w-2 rounded-full mt-1"></div>
            <div className="text-xs font-bold ml-2">Yes:</div>
            <p className="text-xs ml-2">0</p>
            <div className="bg-noPoint h-2 w-2 rounded-full mt-1 ml-2"></div>
            <div className="text-xs font-bold ml-2">No:</div>
            <p className="text-xs ml-2">0</p>
          </div>

          <div className="col-span-1  text-right text-xs ">0 vote</div>
        </div>
        <div className="w-full h-2 bg-gray-300 rounded-full relative mt-4 sm:mt-0"></div>
      </div>
    );
  } else if (status === 1) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-4 w-full ">
          <div className="col-span-3 flex">
            <div className="bg-yesPoint h-2 w-2 rounded-full mt-1"></div>
            <div className="text-xs font-bold ml-2">Yes:</div>
            <p className="text-xs ml-2">4900 (70%)</p>
            <div className="bg-noPoint h-2 w-2 rounded-full mt-1 ml-2"></div>
            <div className="text-xs font-bold ml-2">No:</div>
            <p className="text-xs ml-2">2100 (30%)</p>
          </div>

          <div className="col-span-1  text-right text-xs ">7000 votes</div>
        </div>
        <div className="w-full h-2 bg-gray-300 rounded-full relative mt-4 sm:mt-0">
          <div
            className="rounded-l h-full bg-yesPoint inline-block absolute top-0 left-0"
            style={{ width: "70%" }}
          ></div>
          <div
            className="rounded-r h-full bg-noPoint inline-block absolute top-0 right-0"
            style={{ width: "30%" }}
          ></div>
        </div>{" "}
        <div className="w-full grid grid-cols-2 mt-3">
          <div className="col-span-2  lg:col-span-1 ">
            {AuthState && (
              <div className="flex justify-between md:justify-start">
                <button className="w-12 bg-secondaryBtn text-white text-xs py-2 px-2 rounded-xl cursor-pointer">
                  No
                </button>
                <button className="w-12 bg-secondaryBtn text-white text-xs py-2 px-2 rounded-xl ml-2 cursor-pointer">
                  Yes
                </button>
              </div>
            )}
            {!AuthState && (
              <div className="flex justify-between md:justify-start">
                <button className="w-12 bg-gray-400 text-white text-xs py-2 px-2 rounded-xl cursor-pointer">
                  No
                </button>
                <button className="w-12 bg-gray-400 text-white text-xs py-2 px-2 rounded-xl ml-2 cursor-pointer">
                  Yes
                </button>
              </div>
            )}
          </div>

          <div className="pt-1 col-span-2 lg:col-span-1">
            <span className="font-semibold text-xs pl-2">Approval Rating:</span>
            <span className="text-xs pl-1">70%</span>
            <span className="font-semibold text-xs pl-2">Quorom:</span>
            <span className="text-xs pl-1">Yes</span>
          </div>
        </div>
      </div>
    );
  } else if (status === 2) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-4 w-full ">
          <div className="col-span-3 flex">
            <div className="bg-yesPoint h-2 w-2 rounded-full mt-1"></div>
            <div className="text-xs font-bold ml-2">Yes:</div>
            <p className="text-xs ml-2">4900 (70%)</p>
            <div className="bg-noPoint h-2 w-2 rounded-full mt-1 ml-2"></div>
            <div className="text-xs font-bold ml-2">No:</div>
            <p className="text-xs ml-2">2100 (30%)</p>
          </div>

          <div className="col-span-1  text-right text-xs ">7000 votes</div>
        </div>
        <div className="w-full h-2 bg-gray-300 rounded-full relative mt-4 sm:mt-0">
          <div
            className="rounded-l h-full bg-yesPoint inline-block absolute top-0 left-0"
            style={{ width: "70%" }}
          ></div>
          <div
            className="rounded-r h-full bg-noPoint inline-block absolute top-0 right-0"
            style={{ width: "30%" }}
          ></div>
        </div>{" "}
        <div className="w-full grid grid-cols-2 mt-3">
          <div className="pt-1 col-span-2 lg:col-span-1">
            <span className="font-semibold text-xs pl-2">Approval Rating:</span>
            <span className="text-xs pl-1">70%</span>
            <span className="font-semibold text-xs pl-2">Quorom:</span>
            <span className="text-xs pl-1">Yes</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
