import React from "react";
import holder from "../../images/holder.png";
import creatorImage from "../../images/creatorImage.png";

function SecondFrame() {
  return (
    <div className="bg-bgGray">
      <div className="h-auto px-5 md:px-16 py-6 md:py-16">
        <div>
          <h3 className=" font-bold text-2xl mt-2 leading-normal text-center">
            Freshcoast.com
          </h3>

          <p className="mt-6 font-normal text-xl text-center mb-6">
            We at proposals.com are working hard at building the best proposal
            platform for all interested. We have sahred the works to be done in
            two phases.Currently we’re still working oat phase one. Phase two is
            upcoming. Thank you.
          </p>
        </div>
        <div className="grid grid-cols-2 justify-center gap-6 ">
          <div className="h-auto min-h-[300px] pb-4 col-span-2 mb-4  sm:col-span-1 bg-bgBlue pt-6">
            <h4 className="text-center text-2xl font-bold leading-normal mb-6 ">
              PHASE ONE
            </h4>
            <p className="font-normal text-justify px-6 text-xl ">
              Coin holder - Ability to connect wallet and vote on several
              proposals. Governance Creator - Ability to connect wallet, create
              proposals and vote on proposals.
            </p>
          </div>
          <div className="h-auto min-h-[300px] pb-4 col-span-2 mb-4 sm:col-span-1 bg-bgBlue pt-6">
            <h4 className="text-center text-2xl font-bold leading-normal mb-6 ">
              PHASE TWO
            </h4>
            <p className="font-normal text-justify px-6 text-xl ">
              Coin holder - Ability to connect wallet and vote on several
              proposals. Governance Creator - Ability to connect wallet, create
              proposals and vote on proposals.
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto bg-bgGray grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-16 py-6 md:py-16">
        <div>
          <h3 className=" font-bold text-2xl mt-20">
            Choose a category that’s best for you
          </h3>

          <p className="mt-6 font-normal text-xl">
            Create proposals and vote on several proposals using our governance
            coin or your own wallet coin.
          </p>
        </div>
        <div
          className="h-[337px] bg-no-repeat border-2 bg-right-bottom"
          style={{ backgroundImage: `url(${creatorImage})` }}
        >
          <div className="w-full h-full  bg-bgBlue opacity-50 pt-16">
            <div className="z-50">
              <h4 className="text-center text-2xl font-bold leading-normal mb-6 ">
                Coin Creator
              </h4>
              <p className="font-normal text-justify px-6 text-xl ">
                Partner with us as a coin holder and vote using your coin or our
                governance coin.
              </p>
            </div>
          </div>
        </div>
        <div
          className="h-[337px]  bg-no-repeat border-2 bg-right-bottom"
          style={{ backgroundImage: `url(${holder})` }}
        >
          <div className="w-full h-full  bg-bgBlue opacity-50 pt-16">
            <div className="z-50">
              <h4 className="text-center text-2xl font-bold leading-normal  mb-6">
                Coin Holder
              </h4>
              <p className="font-normal text-justify px-6 text-xl">
                Partner with us as a coin holder and vote using your coin or our
                governance coin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondFrame;
