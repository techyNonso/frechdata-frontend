import React, { useState } from "react";
import CreatorSecond from "../components/CreatorSecond/CreatorSecond";
import Header from "../components/Header/Header";
import CreatorHero from "../components/Hero/CreatorHero";
import Modal from "../components/Modal/Modal";

import { AuthProvider } from "../contexts/AuthProvider";

function CoinCreator() {
  return (
    <div className="font-headFont relative ">
      <AuthProvider>
        <Header bg={"bg-bgBlue"} />
        <CreatorHero />
        <CreatorSecond />
      </AuthProvider>
    </div>
  );
}

export default CoinCreator;
