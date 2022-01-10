import { Input } from "postcss";
import React, { useState } from "react";
import img from "../../images/img.png";
import Modal from "../Modal/Modal";

function ContractForm() {
  const [modalVissible, setModal] = useState(true);
  const [caution, setCaution] = useState(true);
  const [contractCreated, setContratedCreated] = useState(false);
  return (
    <div>
      <div className="grid gap-8 grid-cols-2 mt-10">
        <div className="  col-span-2  sm:hidden ">
          <div className="rounded-md bg-white h-auto w-[300px] px-3 py-6 m-auto">
            <div className="text-center my-3 text-xs font-semibold">
              Governance image
            </div>
            <div className="rounded-full h-[150px] w-[150px] border-[1px] p-3 border-dashed border-primaryBtn  m-auto">
              <img src={img} className="rounded-full w-full h-full" />
            </div>
            <div className="flex justify-center mt-4">
              <p className=" text-xs">Select an image file from your device</p>
            </div>
            <div className="flex justify-center">
              <button className=" w-fit h-fit rounded-md px-2 py-2 cursor-pointer mt-6 bg-primaryBtn text-white text-xs">
                Choose file
              </button>
            </div>
          </div>
        </div>
        <div className="  col-span-2 sm:col-span-1 sm:pr-4">
          <div className="mb-4">
            <input
              className=" appearance-none border rounded-md w-full h-[40px] py-2 px-3 cursor-pointer text-gray-700 leading-tight text-xs focus:outline-primaryBtn "
              type="text"
              placeholder="Governance name"
            />
          </div>
          <div className="mb-4">
            <select className="form-select appearance-none  border border-solid border-gray-300 rounded-md transition  ease-in-out  w-full h-[40px] cursor-pointer py-2 px-3 text-gray-400 leading-tight text-xs focus:outline-primaryBtn  ">
              <option>Time lock delay</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
            </select>
          </div>
          <div className="mb-4">
            <select className="form-select appearance-none  border border-solid border-gray-300 rounded-md transition  ease-in-out  w-full h-[40px] cursor-pointer py-2 px-3 text-gray-400 leading-tight text-xs focus:outline-primaryBtn  ">
              <option>Voting delay</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
            </select>
          </div>
          <div className="mb-4">
            <select className="form-select appearance-none  border border-solid border-gray-300 rounded-md transition  ease-in-out  w-full h-[40px] cursor-pointer py-2 px-3 text-gray-400 leading-tight text-xs focus:outline-primaryBtn  ">
              <option>Voting period</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
            </select>
          </div>
          <div className="mb-4">
            <select className="form-select appearance-none  border border-solid border-gray-300 rounded-md transition  ease-in-out  w-full h-[40px] cursor-pointer py-2 px-3 text-gray-400 leading-tight text-xs focus:outline-primaryBtn  ">
              <option>Proposal threshold</option>
              <option value="1">1</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </select>
          </div>
          <div className="mb-4">
            <select className="form-select appearance-none  border border-solid border-gray-300 rounded-md transition  ease-in-out  w-full h-[40px] cursor-pointer py-2 px-3 text-gray-400 leading-tight text-xs focus:outline-primaryBtn  ">
              <option>Voting threshold</option>
              <option value="1">1</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </select>
          </div>
          <div className="mb-4">
            <select className="form-select appearance-none  border border-solid border-gray-300 rounded-md transition  ease-in-out  w-full h-[40px] cursor-pointer py-2 px-3 text-gray-400 leading-tight text-xs focus:outline-primaryBtn  ">
              <option>Transaction value</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="90">90</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button className=" w-fit h-fit rounded-md px-2 py-2 cursor-pointer mt-6 bg-secondaryBtn text-white text-xs">
              Create contract
            </button>
          </div>
          <div className="flex justify-end">
            <button
              disabled
              className=" w-fit h-fit rounded-md px-2 py-2  mt-6 bg-gray-400 text-white text-xs"
            >
              Create contract
            </button>
          </div>
        </div>
        <div className="  col-span-1 hidden sm:block ">
          <div className="rounded-md bg-white h-auto w-[300px] px-3 py-6 m-auto">
            <div className="text-center my-3 text-xs font-semibold">
              Governance image
            </div>
            <div className="rounded-full h-[150px] w-[150px] border-[1px] p-3 border-dashed border-primaryBtn  m-auto">
              <img src={img} className="rounded-full w-full h-full" />
            </div>
            <div className="flex justify-center mt-4">
              <p className=" text-xs">Select an image file from your device</p>
            </div>
            <div className="flex justify-center">
              <button className=" w-fit h-fit rounded-md px-2 py-2 cursor-pointer mt-6 bg-primaryBtn text-white text-xs">
                Choose file
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalVissible && (
        <Modal
          caution={caution}
          contractCreated={contractCreated}
          hide={setModal}
        />
      )}
    </div>
  );
}

export default ContractForm;
