import React, { useEffect, useState } from "react";
import { Link, useLinkClickHandler, useParams } from "react-router-dom";
import CoinCard from "../Card/CoinCard";
import { useMoralis } from "react-moralis";
import ProposalList from "../ProposalList/ProposalList";

function ProposalsFrame(props) {
  const { Moralis, isInitialized } = useMoralis();
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  //const [address, setAddress] = useState("");
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [proposalList, setProposals] = useState([]);

  const getProposalData = async (id, description, address) => {
    const ABI = [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "proposalId",
            type: "uint256",
          },
        ],
        name: "getProposalData",
        outputs: [
          {
            internalType: "uint256",
            name: "proposalId_",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "proposer_",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startTime_",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime_",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startBlock_",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "forVotes_",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "againstVotes_",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "canceled_",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "executed_",
            type: "bool",
          },
          {
            internalType: "enum VoteGovernorAlpha.ProposalState",
            name: "state_",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];

    const options = {
      contractAddress: address,
      functionName: "getProposalData",
      abi: ABI,
      params: {
        proposalId: id,
      },
    };

    await Moralis.enableWeb3();

    let proposal = await Moralis.executeFunction(options);

    return {
      data: proposal,
      description: description,
    };
  };

  const getGovernorProposals = async () => {
    let address = props.contracts[0].get("govAddress");
    setName(props.contracts[0].get("govName"));
    setAddress(address);
    const Proposals = Moralis.Object.extend("Proposals");
    const query = new Moralis.Query(Proposals);
    query.equalTo("govAddress", address);
    const results = await query.find();

    if (results.length > 0) {
      let description;
      let mydata;
      let hexId;
      let _64BytesId;
      let proposalId;

      let proposalData = [];
      // Do something with the returned Moralis.Object values
      for (let i = 0; i < results.length; i++) {
        const object = results[i];
        description = object.get("description");
        mydata = object.get("proposalId");
        hexId = mydata.events["0"].raw.data.substring(2);
        _64BytesId = hexId.match(/.{1,64}/g)[1];
        proposalId = _64BytesId.charAt(_64BytesId.length - 1);
        let detail = await getProposalData(proposalId, description, address);
        proposalData = [...proposalData, detail];
      }
      setProposals(proposalData);
      setLoading(false);
      //sieave(proposalList);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isInitialized && props.contracts.length > 0) {
      getGovernorProposals();
    }
  }, [isInitialized, props.contracts]);

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
        <div>
          {loading && (
            <div className="font-semibold text-lg text-gray-600">
              Loading Proposals
            </div>
          )}
          {proposalList.length > 0 && !loading && (
            <ProposalList proposals={proposalList} govName={name} />
          )}
          {proposalList.length === 0 && !loading && (
            <div className="font-semibold text-lg text-gray-600">
              No Proposals Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProposalsFrame;
