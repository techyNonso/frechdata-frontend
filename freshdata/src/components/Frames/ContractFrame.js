import React from "react";
import ContractForm from "./ContractForm";
import { useAuthUpdate, useAuth } from "../../contexts/AuthProvider";

function ContractFrame() {
  //get auth context
  const AuthState = useAuth();
  //get update contexts
  const [connectWallet, disConnectWallet] = useAuthUpdate();

  return (
    <div>
      <h2 className="pt-8 font-bold text-2xl pb-4">
        Create Governance Contract
      </h2>
      <p className="text-lg">
        <strong>NOTE:</strong> You will only be able to create a governance
        contract once, and you will not be able to change any information once
        your governance contract is successfully created.
      </p>
      {!AuthState && (
        <div>
          <p className="text-xs pt-3">
            Connect your wallet to gain access to creating your own proposal.
          </p>

          <button
            onClick={connectWallet}
            className="w-fit h-fit rounded-md px-4 py-2 cursor-pointer mt-6 bg-secondaryBtn text-white font-medium"
          >
            Connect wallet
          </button>
        </div>
      )}
      {AuthState && <ContractForm />}
    </div>
  );
}

export default ContractFrame;