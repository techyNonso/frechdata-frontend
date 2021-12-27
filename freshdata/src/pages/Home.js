import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import SecondFrame from "../components/SecondFrame/SecondFrame";
import HomeBase from "../components/HomeBase/HomeBase";
import { AuthProvider } from "../contexts/AuthProvider";

function Home() {
  return (
    <div className="font-headFont ">
      <AuthProvider>
        <Header />
        <Hero />
        <SecondFrame />
        <HomeBase />
      </AuthProvider>
    </div>
  );
}

export default Home;
