import React from "react";
import holder from "../../images/heroPage.png";

function CoinHero() {
  return (
    <div>
      <div className="pt-14 bg-bgBlue h-auto px-5 md:px-16 pb-10 grid grid-cols-4">
        <div className="col-span-4 sm:col-span-2 xl:col-span-2">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl pb-2  sm:pt-10">
            Coin Holder
          </h1>
          <p className="font-normal text-sm sm:text-xl ">
            Partner with us as a coin holder using your coin or our governance
            coin.
          </p>
        </div>
        <div className="hidden sm:block sm:col-span-2 xl:col-span-2 h-[275px] ">
          <img
            src={holder}
            alt="coin holder"
            className="mr-0  h-full m-auto "
          />
        </div>
      </div>
    </div>
  );
}

export default CoinHero;
