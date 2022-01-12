import React from "react";
import CoinCard from "../Card/CoinCard";
import { Link, useParams } from "react-router-dom";

function ProposalList() {
  const { address } = useParams();

  return (
    <div>
      <CoinCard status={0} />
      <CoinCard status={1} />
      <CoinCard status={2} />
    </div>
  );
}

export default ProposalList;
