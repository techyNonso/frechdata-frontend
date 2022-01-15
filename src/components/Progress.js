import React, { useEffect, useState } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useAuthUpdate, useAuth } from "../contexts/AuthProvider";
import { Link, useParams } from "react-router-dom";

function Progress({ status, data, voteCount, totalVotes }) {
  //get auth context
  const AuthState = useAuth();
  const [user, setUser] = useState("");
  const [account, setAccount] = useState("");
  const [reload, setReload] = useState(false);

  const { isAuthenticated, isWeb3Enabled, enableWeb3, Moralis, isInitialized } =
    useMoralis();
  const { address } = useParams();
  const contractProcessor = useWeb3ExecuteFunction();

  async function delegate(choice) {
    if (!account.get("isDelegated")) {
      let options = {
        contractAddress: "0x364ba491b1201a9c0bd326144cd6472e5ff299f1",
        functionName: "delegate",
        abi: [
          {
            inputs: [
              {
                internalType: "address",
                name: "delegatee",
                type: "address",
              },
            ],
            name: "delegate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        params: {
          delegatee: user,
        },
        //msgValue: Moralis.Units.ETH(0.1),
      };

      await contractProcessor.fetch({
        params: options,
        onSuccess: () => {
          account.set("isDelegated", true);
          account.save().then((data) => {
            castVote(choice);
          });
        },
        onError: (err) => {
          // setLoading(false);
        },
      });

      /*const receipt = await Moralis.executeFunction(options);
      console.log(receipt);*/
    } else {
      //proceed to vote
      castVote(choice);
    }
  }

  async function castVote(choice) {
    let options = {
      contractAddress: address,
      functionName: "castVote",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "support",
              type: "bool",
            },
          ],
          name: "castVote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      params: {
        proposalId: Number(data.proposalId_),
        support: choice,
      },
      //msgValue: Moralis.Units.ETH(0.1),
    };
    await Moralis.enableWeb3();

    const voteDetails = await Moralis.executeFunction(options);

    const Votes = Moralis.Object.extend("Votes");
    const votes = new Votes();

    votes.set("proposalId", Number(data.proposalId_));
    votes.set("vote", choice);
    votes.set("voter", user);
    votes.set("govAddress", address);

    votes.save().then(
      (votes) => {
        setReload(true);
      },
      (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Moralis.Error with an error code and message.
        alert("Failed to create new object, with error code: " + error.message);
      }
    );
  }

  const forYes = () => {
    const result = Moralis.Units.FromWei(data.forVotes_);
    return result;
  };
  const forNo = () => {
    const result = Moralis.Units.FromWei(data.againstVotes_);
    return result;
  };

  const yesPerc = (yes, no) => {
    yes = isNaN(yes) || Number(yes) || 0;
    no = isNaN(no) || Number(no) || 0;
    const result = (yes / (yes + no)) * 100;
    return result.toFixed();
  };
  const noPerc = (yes, no) => {
    yes = isNaN(yes) || Number(yes) || 0;
    no = isNaN(no) || Number(no) || 0;
    const result = (no / (yes + no)) * 100;
    return result.toFixed();
  };

  const verdict = (yes, no) => {
    yes = isNaN(yes) || Number(yes) || 0;
    no = isNaN(no) || Number(no) || 0;
    if (yes > no) return "Yes";
    if (yes < no) return "No";
    if (yes === no) return "Draw";
  };

  const getSizeYes = () => {
    let result = yesPerc(forYes(), forNo());
    return result + "%";
  };
  const getSizeNo = () => {
    let result = noPerc(forYes(), forNo());
    return result + "%";
  };

  useEffect(() => {
    if (isInitialized) {
      let accounts = Moralis.User.current();
      setAccount(accounts);
      let user = accounts.get("accounts")[0];
      setUser(user);
    }
  }, [isInitialized, reload]);

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
            <p className="text-xs ml-2">
              {forYes()} ({yesPerc(forYes(), forNo())}%)
            </p>
            <div className="bg-noPoint h-2 w-2 rounded-full mt-1 ml-2"></div>
            <div className="text-xs font-bold ml-2">No:</div>
            <p className="text-xs ml-2">
              {forNo()} ({noPerc(forYes(), forNo())}%)
            </p>
          </div>

          <div className="col-span-1  text-right text-xs ">
            {totalVotes} {totalVotes === 1 ? "vote" : "Votes"}
          </div>
        </div>
        <div className="w-full h-2 bg-gray-300 rounded-full relative mt-4 sm:mt-0">
          <div
            className="rounded-l h-full bg-yesPoint inline-block absolute top-0 left-0"
            style={{ width: `${getSizeYes()}` }}
          ></div>
          <div
            className="rounded-r h-full bg-noPoint inline-block absolute top-0 right-0"
            style={{ width: `${getSizeNo()}` }}
          ></div>
        </div>{" "}
        <div className="w-full grid grid-cols-2 mt-3">
          <div className="col-span-2  lg:col-span-1 ">
            {AuthState && voteCount === 0 && (
              <div className="flex justify-between md:justify-start">
                <button
                  onClick={() => delegate(false)}
                  className="w-12 bg-secondaryBtn text-white text-xs py-2 px-2 rounded-xl cursor-pointer"
                >
                  No
                </button>
                <button
                  onClick={() => delegate(true)}
                  className="w-12 bg-secondaryBtn text-white text-xs py-2 px-2 rounded-xl ml-2 cursor-pointer"
                >
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
            <span className="text-xs pl-1">
              ({yesPerc(forYes(), forNo())}%)
            </span>
            <span className="font-semibold text-xs pl-2">Quorom:</span>
            <span className="text-xs pl-1">({verdict(forYes(), forNo())})</span>
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

          <div className="col-span-1  text-right text-xs ">
            {totalVotes} {totalVotes === 1 ? "vote" : "Votes"}
          </div>
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
            <span className="text-xs pl-1">
              ({yesPerc(forYes(), forNo())}%)
            </span>
            <span className="font-semibold text-xs pl-2">Quorom:</span>
            <span className="text-xs pl-1">({verdict(forYes(), forNo())})</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;