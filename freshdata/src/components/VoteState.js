import React from "react";

function VoteState({ status }) {
  if (status === 0) {
    return (
      <div className="bg-gray-300 font-normal w-[100px] pt-3 text-center text-xs text-gray-500 sm:text-sm sm:py-1 sm:ml-2   rounded-full ">
        Upcoming
      </div>
    );
  } else if (status === 1) {
    return (
      <div className="bg-bgGray font-normal w-[100px] pt-3 text-center text-xs text-primaryBtn sm:text-sm sm:py-1 sm:ml-2   rounded-full ">
        In progress
      </div>
    );
  } else if (status === 2) {
    return (
      <div className="bg-greenShade font-normal w-[100px] pt-3 text-center text-xs text-yesPoint sm:text-sm sm:py-1 sm:ml-2   rounded-full ">
        Finished
      </div>
    );
  }
}

export default VoteState;
