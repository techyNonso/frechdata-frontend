import React from "react";
import coin from "../../images/coin.png";

function CoinCard() {
  return (
    <div>
      <div className="bg-white h-auto p-2 py-4 rounded-xl border-2 border-coinCardBorder grid grid-cols-2">
        <div className="col-span-2 sm:col-span-1 px-2 border-r-0  sm:border-r-2 border-coinCardBorder ">
          <div>
            <div className="flex">
              <div className="w-6 h-6 rounded-full">
                <img
                  src={coin}
                  alt="coin"
                  className="aspect-square mt-3 sm:mt-0"
                />
              </div>
              <h3 className="font-medium text-sm pt-1 pl-2">
                Decentralized Treasury Spending
              </h3>
              <div className="bg-bgGray font-normal w-[100px] pt-3 text-center text-xs text-primaryBtn sm:text-sm sm:py-1 sm:ml-2   rounded-full ">
                In progress
              </div>
            </div>

            <p className="text-xs pl-6 sm:pl-8">By: Tremendous crypto group</p>
            <p className="text-sm pt-2 font-normal">
              This proposal is aimed at producing a community signal for proper
              management of treasury spendings within the decentralized
              community.
            </p>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 px-2 flex  items-center mt-10 sm:mt-0">
          <div className="w-full">
            <div className="grid grid-cols-4 w-full ">
              <div className="col-span-3 flex">
                <div className="bg-yesPoint h-2 w-2 rounded-full mt-1"></div>
                <div className="text-xs font-bold ml-2">Yes:</div>
                <p className="text-xs ml-2">4900 (70%)</p>
                <div className="bg-noPoint h-2 w-2 rounded-full mt-1 ml-2"></div>
                <div className="text-xs font-bold ml-2">No:</div>
                <p className="text-xs ml-2">No: 2100 (30%)</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinCard;
