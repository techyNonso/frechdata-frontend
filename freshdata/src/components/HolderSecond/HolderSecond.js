import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import ProposalList from "../ProposalList/ProposalList";
import { Link, useParams } from "react-router-dom";

function HolderSecond() {
  const [user, setUser] = useState("");
  const [proposalList, setProposals] = useState([]);
  const {
    isAuthenticated,
    isWeb3Enabled,
    enableWeb3,
    Moralis,
    isInitialized,
    isWeb3EnableLoading,
  } = useMoralis();
  const { address } = useParams();
  const contractProcessor = useWeb3ExecuteFunction();

  //sieve
  const sieave = (list) => {
    console.log(list);
    let uniqueChars = [];
    list.forEach((item) => {
      if (uniqueChars.length > 0) {
        uniqueChars.forEach((curr, i) => {
          if (item.data == curr.data) {
            uniqueChars[i] = item;
          } else {
            uniqueChars.push(item);
          }
        });
      } else {
        uniqueChars.push(item);
      }
    });
    console.log(uniqueChars);
    setProposals(uniqueChars);
  };

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

    /*setProposals([
      ...proposalList,
      {
        data: proposal,
        description: description,
      },
    ]);*/

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
      //sieave(proposalList);
    }
  };

  useEffect(() => {
    let subscribed = true;

    if (subscribed) {
      if (isInitialized) {
        getGovernorProposals();
        //getProposalCount();
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
        {proposalList.length > 0 ? (
          <ProposalList proposals={proposalList} />
        ) : (
          <div className="font-semibold text-lg text-gray-600">
            No Proposals Found
          </div>
        )}
      </div>
    </div>
  );
}

export default HolderSecond;
