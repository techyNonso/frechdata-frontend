import React from "react";

function Modal(props) {
  return (
    <div>
      <div className="fixed bg-black inset-0 bg-opacity-25 flex items-center justify-center px-3">
        <div className="bg-white w-full max-w-[320px] p-4 rounded-md text-justify ">
          {props.caution && (
            <div>
              <p>
                <strong>NOTE:</strong> You will only be able to create a
                governance contract once, and you will not be able to change any
                information once your governance contract is successfully
                created.
              </p>
              <div className="flex justify-center space-x-3">
                <span
                  className="pt-2  text-xs text-primaryBtn cursor-pointer hover:underline"
                  onClick={() => props.hide(false)}
                >
                  Edit form
                </span>
                <button className=" w-fit h-fit rounded-md px-2 py-2 cursor-pointer  bg-primaryBtn text-white text-xs">
                  Continue
                </button>
              </div>
            </div>
          )}
          {props.contractCreated && (
            <div>
              <div className="m-auto h-[60px] w-[60px] rounded-full text-white flex justify-center items-center bg-yesPoint">
                j
              </div>
              <h3 className="font-bold text-lg text-center">
                Governance Contract Created Successfully.
              </h3>
              <div className="flex justify-center ">
                <span
                  className="pt-2  text-xs text-primaryBtn cursor-pointer hover:underline"
                  onClick={() => props.hide(false)}
                >
                  Close
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
