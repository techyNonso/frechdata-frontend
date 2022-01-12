import React from "react";
import { Link, useLinkClickHandler, useParams } from "react-router-dom";
import Card from "../Card/Card";
import ContractFrame from "../Frames/ContractFrame";
import ProposalsFrame from "../Frames/ProposalsFrame";
import AboutFrame from "../Frames/AboutFrame";

function CreatorSecond() {
  let { section } = useParams();
  return (
    <div>
      <div className="px-5 md:px-16 h-auto py-10 bg-bgGray ">
        <nav className="flex pb-3" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li>
              <div className="flex items-center">
                <a href="#" className="text-sm font-medium text-gray-400  ">
                  Home
                </a>
              </div>
            </li>

            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-black">
                  Governance Creator
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex w-fit  pt-4 border-b-2 px-2">
          <Link
            to="/creator/1"
            className={`w-fit px-2 text-center font-medium text-xs border-b-2 ${
              section == 1
                ? "border-b-primaryBtn text-primaryBtn cursor-pointer"
                : ""
            }  hover:border-b-primaryBtn `}
          >
            Governance contract
          </Link>
          <Link
            to="/creator/2"
            className={`w-fit px-2 text-center font-medium text-xs border-b-2 ${
              section == 2
                ? "border-b-primaryBtn text-primaryBtn cursor-pointer"
                : ""
            }  hover:border-b-primaryBtn `}
          >
            Proposals
          </Link>
          <Link
            to="/creator/3"
            className={`w-fit px-2 text-center font-medium text-xs border-b-2 ${
              section == 3
                ? "border-b-primaryBtn text-primaryBtn cursor-pointer"
                : ""
            }  hover:border-b-primaryBtn `}
          >
            About
          </Link>
        </div>

        {section == 1 && <ContractFrame />}
        {section == 2 && <ProposalsFrame />}
        {section == 3 && <AboutFrame />}
      </div>
    </div>
  );
}

export default CreatorSecond;
