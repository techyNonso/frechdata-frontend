import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { useAuthUpdate, useAuth } from "../../contexts/AuthProvider";
import logo from "../../images/logo.png";

function Nav() {
  //get update contexts
  const [connectWallet, disConnectWallet] = useAuthUpdate();

  //get auth context
  const [AuthState, currentAccount] = useAuth();
  const { isAuthenticated, isWeb3Enabled, enableWeb3, user } = useMoralis();
  const [menu, setMenu] = useState("hidden");

  return (
    <div>
      <div className="grid grid-cols-4 pt-6 relative">
        <Link to="/" className="col-span-3  md:col-span-1   flex ">
          <img
            className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full  mt-3 lg:mt-2 "
            src={logo}
          />
          <span className="font-headFont font-bold leading-loose pt-3">
            Fresh Coast Blockchain
          </span>
        </Link>
        <div className="hidden md:flex col-span-2  justify-evenly font-headFont font-medium leading-loose  pt-3">
          <div className="hover:border-b-2 border-primaryBtn pb-1  cursor-pointer">
            <Link to="/">Home</Link>
          </div>
          <div className="hover:border-b-2 border-primaryBtn pb-1  cursor-pointer">
            <Link to="/creator/1">Workbench</Link>
          </div>
          <div className="hover:border-b-2 border-primaryBtn pb-1  cursor-pointer">
            <Link to="/holder">Voter</Link>
          </div>
          <div className="hover:border-b-2 border-primaryBtn pb-1  cursor-pointer">
            <Link to="/admin">Results</Link>
          </div>
          <div className="hover:border-b-2 border-primaryBtn pb-1  cursor-pointer">
            <Link to="/admin">About</Link>
          </div>
        </div>
        <div className="hidden  col-span-1  md:flex justify-end">
          {!AuthState && (
            <button
              onClick={connectWallet}
              className="bg-primaryBtn h-full max-h-[50px]  text-white  font-headFont font-medium leading-loose cursor-pointer rounded-2xl  px-2 tracking-wider"
            >
              Connect Wallet
            </button>
          )}
          {AuthState && (
            <button
              onClick={disConnectWallet}
              className="bg-gray-400 w-fit text-gray-600  font-headFont font-medium leading-loose cursor-pointer rounded-2xl p-2 px-2 tracking-wider"
            >
              Disconnect Wallet
            </button>
          )}
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
          <Link to="/">
            <div className="w-full py-2 hover:bg-bgGray pl-2">Home</div>
          </Link>
          <Link to="/creator/1">
            <div className="w-full py-2 hover:bg-bgGray pl-2">Workbench</div>
          </Link>
          <Link to="/holder">
            <div className="w-full py-2 hover:bg-bgGray pl-2">Voter</div>
          </Link>
          <Link to="/learn">
            <div className="w-full py-2 hover:bg-bgGray pl-2">Results</div>
          </Link>
          <Link to="/about">
            <div className="w-full py-2 hover:bg-bgGray pl-2">About</div>
          </Link>

          {!AuthState && (
            <button
              onClick={connectWallet}
              className="bg-primaryBtn w-full mt-2 text-white  font-headFont font-medium leading-loose cursor-pointer rounded-2xl p-2 px-2 tracking-wider"
            >
              Connect Wallet
            </button>
          )}
          {AuthState && (
            <button
              onClick={disConnectWallet}
              className="bg-gray-400 w-fit mt-2 text-white  font-headFont font-medium leading-loose cursor-pointer rounded-2xl p-2 px-2 tracking-wider"
            >
              Disconnect Wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
