import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import ProposalList from "../ProposalList/ProposalList";
import { Link, useParams } from "react-router-dom";
import ProposalAbout from "../ProposalList/ProposalAbout";

function HolderSecond() {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [proposalList, setProposals] = useState([]);
  const {
    isAuthenticated,
    isWeb3Enabled,
    enableWeb3,
    Moralis,
    isInitialized,
    isWeb3EnableLoading,
  } = useMoralis();
  const { address, section } = useParams();

  const contractProcessor = useWeb3ExecuteFunction();

  const getProposalData = async (id, description) => {
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
        let detail = await getProposalData(proposalId, description);
        proposalData = [...proposalData, detail];
      }
      setProposals(proposalData);
      setLoading(false);
      //sieave(proposalList);
    }
  };

  const getGorvernorName = async () => {
    const Contracts = Moralis.Object.extend("GovernanceInstanceCreations");
    const query = new Moralis.Query(Contracts);
    query.equalTo("govAddress", address);
    const results = await query.find();
    let name = results[0].get("govName");
    setName(name);
  };

  useEffect(() => {
    let subscribed = true;

    if (subscribed) {
      if (isInitialized) {
        getGovernorProposals();
        getGorvernorName();
        let accounts = Moralis.User.current();
        let user = accounts.get("accounts")[0];
        setUser(user);
      }
    }
    return () => {
      // cancel the subscription
      subscribed = false;
    };
  }, [isInitialized]);

  return (
    <div>
      <div className="px-5 md:px-16 h-auto min-h-screen pt-2 pb-6 bg-bgGray">
        <div className="grid grid-cols-2 mt-6 mb-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex w-fit px-3 border-b-2">
              <Link
                to={`/propsals/${address}/1`}
                className={`w-[100px] text-center font-medium text-xs   ${
                  section == 1
                    ? "border-b-2 border-b-primaryBtn text-primaryBtn cursor-pointer"
                    : ""
                }  cursor-pointer  hover:border-b-2  hover:border-b-primaryBtn `}
              >
                Proposals
              </Link>
              <Link
                to={`/propsals/${address}/2`}
                className={`w-[100px] text-center font-medium text-xs  ${
                  section == 2
                    ? "border-b-2 border-b-primaryBtn text-primaryBtn cursor-pointer"
                    : ""
                }  cursor-pointer hover:border-b-2 hover:border-b-primaryBtn `}
              >
                About
              </Link>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 mt-4 sm:mt-0">
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
        </div>
        {section == 1 && (
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
        )}

        {section == 2 && <ProposalAbout />}
      </div>
    </div>
  );
}

export default HolderSecond;
