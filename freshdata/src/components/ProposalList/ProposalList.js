import React from "react";
import CoinCard from "../Card/CoinCard";

function ProposalList() {
  return (
    <div>
      <CoinCard status={0} />
      <CoinCard status={1} />
      <CoinCard status={2} />
    </div>
  );
}

export default ProposalList;
