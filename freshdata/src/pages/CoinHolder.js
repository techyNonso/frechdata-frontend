import React from "react";
import CoinHolderSecond from "../components/CoinHolderSecond/CoinHolderSecond";
import Header from "../components/Header/Header";
import CoinHero from "../components/Hero/CoinHero";

import { AuthProvider } from "../contexts/AuthProvider";

function CoinHolder() {
  return (
    <div className="font-headFont relative  ">
      <AuthProvider>
        <Header bg={"bg-bgBlue"} />
        <CoinHero />
        <CoinHolderSecond page={"holder"} />
      </AuthProvider>
    </div>
  );
}

export default CoinHolder;
