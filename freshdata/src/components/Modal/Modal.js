import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

function Modal(props) {
  const [loading, setLoading] = useState(false);
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  let lockDelayInSec,
    voteDelayInSec,
    votePeriodInSec,
    voteThresholdInSec,
    proposalThresholdInSec,
    mainTransactionValue;
  const {
    image,
    lockDelay,
    voteDelay,
    votePeriod,
    voteThreshold,
    proposalThreshold,
    name,
    transactionValue,
  } = props.values;
  lockDelayInSec = Number(lockDelay) * 24 * 60 * 60;
  voteDelayInSec = Number(voteDelay) * 24 * 60 * 60;
  votePeriodInSec = Number(votePeriod) * 24 * 60 * 60;
  voteThresholdInSec = Number(voteThreshold) * 24 * 60 * 60;
  proposalThresholdInSec = Number(lockDelay) * 24 * 60 * 60;
  mainTransactionValue = transactionValue ? transactionValue : 0;

  async function createGovernance() {
    console.log(name);
    let options = {
      contractAddress: "0xbf7fccda9a43c5e2a24db53f22056d387895d5f4",
      functionName: "createGovernor",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "_governorName",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_timelockDelay",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_votingDelay",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_votingPeriod",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_proposalThreshold",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_votingThreshold",
              type: "uint256",
            },
          ],
          name: "createGovernor",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
      ],
      Params: {
        _governorName: name,
        _timelockDelay: lockDelayInSec,
        _votingDelay: voteDelayInSec,
        _votingPeriod: votePeriodInSec,
        _proposalThreshold: proposalThresholdInSec,
        _votingThreshold: voteThresholdInSec,
      },
      //msgValue: Moralis.Units.ETH(0.1),
    };
    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        setLoading(false);
        console.log("succes");
      },
      onError: (err) => {
        setLoading(false);
        console.log(err);
      },
    });
  }

  return (
    <div>
      <div className="fixed bg-black inset-0 bg-opacity-25 flex items-center justify-center px-3">
        {!loading && (
          <div className="bg-white w-full max-w-[320px] p-4 rounded-md text-justify ">
            {props.caution && (
              <div>
                <p>
                  <strong>NOTE:</strong> You will only be able to create a
                  governance contract once, and you will not be able to change
                  any information once your governance contract is successfully
                  created.
                </p>
                <div className="flex justify-center space-x-3">
                  <span
                    className="pt-2  text-xs text-primaryBtn cursor-pointer hover:underline"
                    onClick={() => {
                      props.hide(false);
                      setLoading(false);
                    }}
                  >
                    Edit form
                  </span>
                  <button
                    onClick={() => {
                      setLoading(true);
                      createGovernance();
                    }}
                    className=" w-fit h-fit rounded-md px-2 py-2 cursor-pointer  bg-primaryBtn text-white text-xs"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            {props.contractCreated && (
              <div>
                <div className="m-auto h-[60px] w-[60px] rounded-full text-white flex justify-center items-center bg-yesPoint">
                  j
                </div>
                <h3 className="font-bold text-lg text-center">
                  Governance Contract Created Successfully.
                </h3>
                <div className="flex justify-center ">
                  <span
                    className="pt-2  text-xs text-primaryBtn cursor-pointer hover:underline"
                    onClick={() => props.hide(false)}
                  >
                    Close
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
        {loading && (
          <div>
            <div className="m-auto bg-primaryBtn h-[40px] w-[80px] rounded-full flex items-center justify-center space-x-2">
              <div className="bg-white rounded-full p-2 animate-bounce"></div>
              <div className="bg-white rounded-full p-2 animate-bounce"></div>
              <div className="bg-white rounded-full p-2 animate-bounce"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
