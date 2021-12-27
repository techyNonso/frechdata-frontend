import React, { useEffect } from "react";
import homepageHero from "../../images/homepageHero.png";
import { useMoralis } from "react-moralis";
import { useAuthUpdate, useAuth } from "../../contexts/AuthProvider";

function Hero() {
  //get update contexts
  const [connectWallet] = useAuthUpdate();
  //get auth context
  const AuthState = useAuth();
  const { isAuthenticated, isWeb3Enabled, enableWeb3 } = useMoralis();

  useEffect(() => {
    if (!isWeb3Enabled && isAuthenticated) {
      enableWeb3({ provider: "walletconnect" });
      // console.log("web3 activated");
    }
  }, [isWeb3Enabled, isAuthenticated, enableWeb3, AuthState]);
  return (
    <div>
      <div className="grid grid-cols-4 pt-14 pb-10 h-auto px-5 md:px-16  bg-bgBlue ">
        <div className=" col-span-4 sm:col-span-2 xl:col-span-3">
          <div>
            <h2 className=" font-bold  text-3xl sm:text-4xl lg:text-6xl pb-4 xl:leading-normal">
              Access To Unlimited Gorvanance Proposals
            </h2>
            <p className=" text-xl sm:text-2xl font-normal">
              Join our platform and gain information needed to vote on several
              governance proposals and make your voice heard.
            </p>

            {!AuthState && (
              <div
                onClick={connectWallet}
                className="bg-secondaryBtn w-fit text-white mt-6  font-medium leading-loose cursor-pointer rounded-2xl p-2 px-4 tracking-wider"
              >
                Connect Wallet
              </div>
            )}
          </div>
        </div>
        <div className=" hidden sm:block sm:col-span-2 xl:col-span-1">
          <img
            className=" h-full w-full"
            src={homepageHero}
            alt="freshconcept"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
