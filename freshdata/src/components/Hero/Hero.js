import React, { useEffect } from "react";
import homepageHero from "../../images/homepageHero.png";
import { useMoralis } from "react-moralis";

function Hero() {
  const {
    logout,
    isAuthenticated,
    Moralis,
    authenticate,
    isWeb3Enabled,
    enableWeb3,
  } = useMoralis();

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
      <div className="grid grid-cols-4 mt-14 pb-10">
        <div className=" col-span-4 sm:col-span-2 xl:col-span-3">
          <div>
            <h2 className=" font-bold  text-3xl sm:text-4xl lg:text-6xl pb-4 xl:leading-normal">
              Access To Unlimited Gorvanance Proposals
            </h2>
            <p className=" text-xl sm:text-2xl font-normal">
              Join our platform and gain information needed to vote on several
              governance proposals and make your voice heard.
            </p>

            <div
              onClick={connectWallet}
              className="bg-secondaryBtn w-fit text-white mt-6  font-medium leading-loose cursor-pointer rounded-2xl p-2 px-4 tracking-wider"
            >
              Connect Wallet
            </div>
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
