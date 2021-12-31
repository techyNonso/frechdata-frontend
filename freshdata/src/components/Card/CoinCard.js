import React from "react";
import coin from "../../images/coin.png";
import VoteState from "../VoteState";
import Progress from "../Progress";

function CoinCard(props) {
  return (
    <div>
      <div className="bg-white h-auto p-2 py-4 rounded-xl border-2 border-coinCardBorder grid grid-cols-2 mb-4">
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
              <VoteState status={props.status} />
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
          <Progress status={props.status} />
        </div>
      </div>
    </div>
  );
}

export default CoinCard;
