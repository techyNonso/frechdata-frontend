import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

function ProposalModal(props) {
  const [loading, setLoading] = useState(false);
  const [caution, setCaution] = useState(false);

  const [account, setAccount] = useState("");
  const [user, setUser] = useState("");
  const [proposal, setProposal] = useState("");
  const [proposalCreated, setProposalCreated] = useState(false);
  const [form, setForm] = useState(true);
  const { isAuthenticated, isWeb3Enabled, enableWeb3, Moralis, isInitialized } =
    useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  const handleProposalIns = (event) => {
    setProposal(event.target.value);
  };

  async function delegate() {
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
            makeProposal();
          });
        },
        onError: (err) => {
          setLoading(false);
          console.log(err);
        },
      });

      /*const receipt = await Moralis.executeFunction(options);
      console.log(receipt);*/
    } else {
      makeProposal();
    }
  }
  async function makeProposal() {
    let options = {
      contractAddress: props.address,
      functionName: "propose",
      abi: [
        {
          inputs: [
            {
              internalType: "address[]",
              name: "targets",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "values",
              type: "uint256[]",
            },
            {
              internalType: "string[]",
              name: "signatures",
              type: "string[]",
            },
            {
              internalType: "bytes[]",
              name: "calldatas",
              type: "bytes[]",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
          ],
          name: "propose",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      params: {
        targets: [],
        values: [],
        signatures: [],
        calldatas: [],
        description: proposal,
      },
      //msgValue: Moralis.Units.ETH(0.1),
    };
    await Moralis.enableWeb3();

    /*await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        setLoading(false);
        setCaution(false);
        setProposalCreated(true);
      },
      onError: (err) => {
        setLoading(false);
        setCaution(false);
        setForm(false);
        console.log(err);
      },
    });*/
    const id = await Moralis.executeFunction(options);

    const Proposals = Moralis.Object.extend("Proposals");
    const proposals = new Proposals();

    proposals.set("proposalId", id);
    proposals.set("description", proposal);
    proposals.set("proposer", user);
    proposals.set("govAddress", props.address);

    proposals.save().then(
      (proposals) => {
        // Execute any logic that should take place after the object is saved.
        //alert("New object created with objectId: " + proposals.id);
        setLoading(false);
        setCaution(false);
        setProposalCreated(true);
        window.location.reload();
      },
      (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Moralis.Error with an error code and message.
        alert("Failed to create new object, with error code: " + error.message);
      }
    );
  }

  useEffect(() => {
    if (isInitialized) {
      let accounts = Moralis.User.current();
      setAccount(accounts);
      let user = accounts.get("accounts")[0];
      setUser(user);
    }
  }, [isInitialized]);

  return (
    <div>
      <div className="fixed z-50 bg-black inset-0 bg-opacity-25 flex items-center justify-center px-3">
        {!loading && (
          <div className="bg-white w-full max-w-[400px] p-4 rounded-md text-justify ">
            {caution && (
              <div>
                <p>
                  <strong>NOTE:</strong> Your can not edit this proposal once it
                  has been recorded.
                </p>
                <div className="flex justify-center space-x-3">
                  <span
                    className="pt-2  text-xs text-primaryBtn cursor-pointer hover:underline"
                    onClick={() => {
                      setForm(true);
                      setLoading(false);
                      setCaution(false);
                    }}
                  >
                    Edit form
                  </span>
                  <button
                    onClick={() => {
                      setLoading(true);
                      delegate();
                    }}
                    className=" w-fit h-fit rounded-md px-2 py-2 cursor-pointer  bg-primaryBtn text-white text-xs"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            {proposalCreated && (
              <div>
                <div className="m-auto h-[60px] w-[60px] rounded-full text-white flex justify-center items-center bg-yesPoint">
                  j
                </div>
                <h3 className="font-bold text-lg text-center">
                  Proposal Created Successfully.
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
            {form && (
              <div>
                <div className="m-auto h-[200px] w-full  text-white  ">
                  <textarea
                    onChange={handleProposalIns}
                    value={proposal}
                    className="w-full h-full bg-gray-100 text-black p-2 outline-0 text-xs"
                  ></textarea>
                </div>

                <div className="flex justify-center space-x-2  ">
                  <span
                    className="py-2 px-2 mt-2   text-xs text-primaryBtn bg-bgGray rounded-md cursor-pointer hover:underline "
                    onClick={() => {
                      setProposal("");
                      setForm(false);
                      props.hide(false);
                    }}
                  >
                    Cancel
                  </span>
                  <span
                    className="py-2 px-2 mt-2   text-xs bg-primaryBtn text-white rounded-md cursor-pointer "
                    onClick={() => {
                      if (!proposal) {
                        props.hide(false);
                      } else {
                        setCaution(true);
                        setForm(false);
                      }
                    }}
                  >
                    Propose
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

export default ProposalModal;