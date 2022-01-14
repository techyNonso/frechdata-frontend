import React, { useEffect, useState } from "react";
import coin from "../../images/coin.png";
import VoteState from "../VoteState";
import Progress from "../Progress";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

function CoinCard(props) {
  const [votesNumber, setVotesNumber] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const {
    isAuthenticated,
    isWeb3Enabled,
    enableWeb3,
    Moralis,
    isInitialized,
    isWeb3EnableLoading,
  } = useMoralis();

  const verify = async () => {
    let accounts = Moralis.User.current();
    let user = accounts.get("accounts")[0];
    const Votes = Moralis.Object.extend("Votes");
    const query = new Moralis.Query(Votes);
    query.equalTo("voter", user);
    query.equalTo("proposalId", Number(props.data.proposalId_));
    const results = await query.find();
    let voteNumber = results.length;

    setVotesNumber(voteNumber);
  };

  const getVotesCount = async () => {
    const Votes = Moralis.Object.extend("Votes");
    const query = new Moralis.Query(Votes);
    query.equalTo("proposalId", Number(props.data.proposalId_));
    const results = await query.find();
    let voteNumber = results.length;
    setTotalVotes(voteNumber);
  };

  useEffect(() => {
    verify();
    getVotesCount();
  }, []);
  return (
    <div>
      <div className="bg-white h-auto p-2 py-4 rounded-xl border-2 border-coinCardBorder grid grid-cols-2 mb-4">
        <div className="col-span-2 sm:col-span-1 px-2 border-r-0  sm:border-r-2 border-coinCardBorder ">
          <div>
            <div className="flex justify-between">
              <div className="flex">
                <div className="w-6 h-6 rounded-full">
                  <img
                    src={coin}
                    alt="coin"
                    className="aspect-square mt-1 sm:mt-0"
                  />
                </div>
                <h3 className="font-medium text-sm pt-1 pl-2 ">{props.name}</h3>
              </div>
              <VoteState status={props.status} />
            </div>

            <p className="text-xs pl-8 sm:pl-8">By: Tremendous crypto group</p>
            <p className="text-sm pt-2 font-normal">{props.description}</p>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 px-2 flex  items-center mt-10 sm:mt-0">
          <Progress
            status={props.status}
            data={props.data}
            voteCount={votesNumber}
            totalVotes={totalVotes}
          />
        </div>
      </div>
    </div>
  );
}

export default CoinCard;
