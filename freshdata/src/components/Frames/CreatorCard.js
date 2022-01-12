import React from "react";
import Card from "../Card/Card";

function CreatorCard(props) {
  return (
    <div className="mt-3">
      {props.contracts.map((contract, index) => (
        <Card key={index} contract={contract} />
      ))}
    </div>
  );
}

export default CreatorCard;
