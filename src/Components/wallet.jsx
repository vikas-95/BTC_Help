import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import LayersIcon from "@mui/icons-material/Layers";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CameraIcon from "@mui/icons-material/Camera";
import { Appstate } from "../App";
import Balance from "./Balance";
import { message } from "antd";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Sidebar from "./Sidebar";
import { ethers } from "ethers";
import SavingsIcon from "@mui/icons-material/Savings";
import Requests from "./Requests";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const Wallet = () => {
  const useAppState = useContext(Appstate);
  const [income, setIncome] = useState({
    totalIncome: 0,
    referIncome: 0,
    levelIncome: 0,
    growthIncome: 0,
    withdrawableIncome: 0,
    royaltyIncome: 0,
    generationIncome: 0,
  });
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [amtBtch, setAmtBtch] = useState(0);
  const [change, setChange] = useState(1);
  const [priceLoading, setPriceLoading] = useState(false);
  const { showSidebar } = useContext(Appstate);

//   useEffect(() => {
//     async function getData() {
//       let income = await useAppState.contract.income(useAppState.walletAddress);
//       setIncome({
//         totalIncome: useAppState.convert(income.totalIncome),
//         referIncome: useAppState.convert(income.referIncome),
//         levelIncome: useAppState.convert(income.levelIncome),
//         growthIncome: useAppState.convert(income.growthIncome),
//         royaltyIncome: useAppState.convert(income.royaltyIncome),
//         generationIncome: useAppState.convert(income.generationIncome),
//         withdrawableIncome: useAppState.convert(income.withdrawableIncome),
//       });
//     }
//     getData();
//   }, [useAppState.walletAddress, useAppState.change]);

  useEffect(() => {
    async function getData() {
      setPriceLoading(true);
      if (amount !== "") {
        let _price = await useAppState.swapContract.callStatic.getQuoteInBTCH(
          ethers.utils.parseUnits(amount, "mwei")
        );
        setAmtBtch(useAppState.convert(_price));
      }
      setPriceLoading(false);
    } 
    getData();
  }, [change]);

  const withdraw = async () => {
    setLoading(true);
    try {
      let tx = await useAppState.contract.getHelp(
        ethers.utils.parseUnits(amount, "mwei")
      );
      await tx.wait();
      message.success("Get Help Request Sent");
      useAppState.setChange(useAppState.change + 1);
    } catch (error) {
      message.error(error.reason);
    }
    setLoading(false);
  };

  return (
    <div className="flex h-screen">
      {showSidebar && <Sidebar />}
      <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-900 flex justify-center p-4 w-full">
        <div className="w-full">
          {" "}
          {/* <Requests /> */} <Header />
          <Balance />
          <div className=" mt-6 w-full bg-white px-2 py-2 rounded-lg shadow-xl wallet">
            <p className="w-full text-center font-bold text-lg">
              {" "}
              Basic Wallet{" "}
            </p>{" "}
            <div className=" mt-2 w-full flex justify-between items-center  px-2 py-2 rounded-lg shadow-xl wallet">
              <span className="flex items-center">
                <span className=" font-semibold mr-2 text-black bg-gray-500 bg-opacity-20 rounded-2xl flex justify-center items-center px-2 py-1">
                  <CreditScoreIcon />
                </span>
                Total Income{" "}
              </span>{" "}
              <span> $ {income.totalIncome} </span>{" "}
            </div>{" "}
            <div className=" mt-2 w-full flex justify-between items-center  px-2 py-2 rounded-lg shadow-xl wallet">
              <span className="flex items-center">
                <span className="font-semibold mr-2 text-black bg-gray-500 bg-opacity-20 rounded-2xl flex justify-center items-center px-2 py-1">
                  <GroupAddIcon />
                </span>
                Refer Income{" "}
              </span>{" "}
              <span> $ {income.referIncome} </span>{" "}
            </div>{" "}
            <div className=" mt-2 w-full flex justify-between items-center  px-2 py-2 rounded-lg shadow-xl wallet">
              <span className="flex items-center">
                <span className="font-semibold mr-2 text-black bg-gray-500 bg-opacity-20 rounded-2xl flex justify-center items-center px-2 py-1">
                  <LayersIcon />
                </span>
                Level Income{" "}
              </span>{" "}
              <span> $ {income.levelIncome} </span>{" "}
            </div>{" "}
            <div className=" mt-2 w-full flex justify-between items-center  px-2 py-2 rounded-lg shadow-xl wallet">
              <span className="flex items-center">
                <span className="font-semibold mr-2 text-black bg-gray-500 bg-opacity-20 rounded-2xl flex justify-center items-center px-2 py-1">
                  <MilitaryTechIcon />
                </span>
                Roaylty Income{" "}
              </span>{" "}
              <span> $ {income.royaltyIncome} </span>{" "}
            </div>{" "}
            <div className=" mt-2 w-full flex justify-between items-center  px-2 py-2 rounded-lg shadow-xl wallet">
              <span className="flex items-center">
                <span className="font-semibold mr-2 text-black bg-gray-500 bg-opacity-20 rounded-2xl flex justify-center items-center px-2 py-1">
                  <CameraIcon />
                </span>
                Generation Income{" "}
              </span>{" "}
              <span> $ {income.generationIncome} </span>{" "}
            </div>{" "}
            <div className=" mt-2 w-full flex justify-between items-center  px-2 py-2 rounded-lg shadow-xl wallet">
              <span className="flex items-center">
                <span className="font-semibold mr-2 text-black bg-gray-500 bg-opacity-20 rounded-2xl flex justify-center items-center px-2 py-1">
                  <LeaderboardIcon />
                </span>
                Growth Income{" "}
              </span>{" "}
              <span> $ {income.growthIncome} </span>{" "}
            </div>{" "}
          </div>
          {/* Requestable */}{" "}
          <div className="bg-white mt-6 w-full px-2 py-2 rounded-lg shadow-xl wallet">
            <p className="w-full text-center font-bold text-lg">
              {" "}
              Get Help Wallet{" "}
            </p>{" "}
            <div className=" mt-2 w-full flex justify-between items-center  px-2 py-2 rounded-lg shadow-xl wallet">
              <span className="flex items-center">
                <span className="font-semibold mr-2 text-black bg-gray-500 bg-opacity-20 rounded-2xl flex justify-center items-center px-2 py-1">
                  <SavingsIcon />
                </span>
                Withdrawable Income{" "}
              </span>{" "}
              <span> $ {income.withdrawableIncome} </span>{" "}
            </div>
            <div className="items-center py-3">
              <div className="flex justify-between items-center">
                <input
                  className=" w-3/4 bg-gray-700 bg-opacity-20 p-2 rounded-lg font-mono outline-none"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setChange(change + 1);
                  }}
                  placeholder="Enter Amount"
                />
                <p className="text-white mr-2 ml-2">
                  {" "}
                  {amount == "" ? null : (
                    <p>
                      {" "}
                      {amtBtch}
                      BTCH{" "}
                    </p>
                  )}
                </p>
              </div>{" "}
              <button
                onClick={withdraw}
                className="bg-lime-500 w-full mt-2 flex justify-center font-semibold p-2 rounded-lg"
              >
                {" "}
                {loading ? (
                  <TailSpin height={22} color="white" />
                ) : (
                  "GET HELP"
                )}{" "}
              </button>{" "}
            </div>{" "}
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Wallet;