import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";

function Nav() {
  const {
    logout,
    isAuthenticated,
    Moralis,
    authenticate,
    isWeb3Enabled,
    enableWeb3,
  } = useMoralis();
  const [menu, setMenu] = useState("hidden");

  //connect wallet
  const connectWallet = async () => {
    const user = await authenticate({
      provider: "walletconnect",
      mobileLinks: [
        "rainbow",
        "metamask",
        "argent",
        "trust",
        "imtoken",
        "pillar",
      ],
    });

    console.log(user);
  };

  useEffect(() => {
    if (!isWeb3Enabled && isAuthenticated) {
      enableWeb3({ provider: "walletconnect" });
      console.log("web3 activated");
    }
  }, [isWeb3Enabled, isAuthenticated, enableWeb3]);
  return (
    <div>
      <div className="grid grid-cols-4 pt-10 relative">
        <div className="col-span-3 md:col-span-1 font-bold pt-3">Logo</div>
        <div className="hidden md:flex col-span-2 x justify-evenly font-headFont font-medium leading-loose  pt-3">
          <div className="hover:border-b-2 border-primaryBtn pb-1  cursor-pointer">
            <Link to="/">Home</Link>
          </div>
          <div className="hover:border-b-2 border-primaryBtn pb-1  cursor-pointer">
            <Link to="/creator">creator</Link>
          </div>
          <div className="hover:border-b-2 border-primaryBtn pb-1  cursor-pointer">
            <Link to="/admin">Holder</Link>
          </div>
          <div className="hover:border-b-2 border-primaryBtn pb-1  cursor-pointer">
            <Link to="/admin">Learn</Link>
          </div>
          <div className="hover:border-b-2 border-primaryBtn pb-1  cursor-pointer">
            <Link to="/admin">About</Link>
          </div>
        </div>
        <div className="hidden md:flex col-span-1  justify-end">
          <button
            onClick={connectWallet}
            className="bg-primaryBtn w-fit text-white  font-headFont font-medium leading-loose cursor-pointer rounded-2xl p-2 px-2 tracking-wider"
          >
            Connect Wallet
          </button>
        </div>

        <div className="flex md:hidden pt-3 justify-self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 cursor-pointer "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={(e) => {
              if (menu === "hidden") {
                setMenu("block");
              } else {
                setMenu("hidden");
              }
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div
          className={` ${menu} absolute  top-24 px-2 py-4 right-0 h-auto bg-white text-[15px] font-normal shadow rounded-md w-[200px]`}
        >
          <div className="w-full py-2 hover:bg-bgGray pl-2">
            <Link to="/">Home</Link>
          </div>
          <div className="w-full py-2 hover:bg-bgGray pl-2">
            <Link to="/creator">Creator</Link>
          </div>
          <div className="w-full py-2 hover:bg-bgGray pl-2">
            <Link to="/holder">Holder</Link>
          </div>
          <div className="w-full py-2 hover:bg-bgGray pl-2">
            <Link to="/learn">Learn</Link>
          </div>
          <div className="w-full py-2 hover:bg-bgGray pl-2">
            <Link to="/about">About</Link>
          </div>
          <button
            onClick={connectWallet}
            className="bg-primaryBtn w-full mt-2 text-white  font-headFont font-medium leading-loose cursor-pointer rounded-2xl p-2 px-2 tracking-wider"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
