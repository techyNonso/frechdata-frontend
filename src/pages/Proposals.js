import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import SecondFrame from "../components/SecondFrame/SecondFrame";
import HomeBase from "../components/HomeBase/HomeBase";
import { AuthProvider } from "../contexts/AuthProvider";
import HolderHero from "../components/Hero/HolderHero";
import HolderSecond from "../components/HolderSecond/HolderSecond";
function Proposals() {
  return (
    <div className="font-headFont ">
      <AuthProvider>
        <Header bg={"bg-bgGray"} />
        <HolderHero />
        <HolderSecond />
      </AuthProvider>
    </div>
  );
}

export default Proposals;
