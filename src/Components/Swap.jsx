import React, { useContext, useEffect, useState } from "react";
import Requests from "./Requests";
import Header from "./Header";
import Balance from "./Balance";
import Sidebar from "./Sidebar";
import { TailSpin } from "react-loader-spinner";
import { Appstate } from "../App";
import { message } from "antd";
import { ethers } from "ethers";
import { ThreeDots } from "react-loader-spinner";
import { useTimer } from "react-timer-hook";
import moment from "moment";
import USDT from "../Images/usdt.png";
import TOKEN from "../Images/token.png";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours } = useTimer({ expiryTimestamp });

  return (
    <p>
      <span>{hours.toString().padStart(2, "0")}</span>:
      <span>{minutes.toString().padStart(2, "0")}</span>:
      <span>{seconds.toString().padStart(2, "0")}</span>
    </p>
  );
}

const Swap = () => {
  const useAppState = useContext(Appstate);
  const [bal, setBal] = useState([0, 0]);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [amtBtch, setAmtBtch] = useState("");
  const [change, setChange] = useState(0);
  const [priceLoading, setPriceLoading] = useState(true);
  const feePercent = 90;
  const swapTime = 24;
  const [avlTime, setAvlTime] = useState(0);
  const [show, setShow] = useState(false);
  const { showSidebar } = useContext(Appstate);

  useEffect(() => {
    async function getData() {
      setPriceLoading(true);
      if (amount !== "") {
        let _price = await useAppState.swapContract.callStatic.getQuoteInUSDT(
          ethers.utils.parseUnits(amount, "mwei")
        );
        setAmtBtch(
          ((Number(useAppState.convert(_price)) * feePercent) / 100).toFixed(2)
        );
      }
      setPriceLoading(false);
    }
    getData();
  }, [change]);

//   useEffect(() => {
//     async function getData() {
//       setShow(false);
//       let bal1 = await useAppState.tokenContract.balanceOf(
//         useAppState.walletAddress
//       );
//       let bal2 = await useAppState.tokenContract2.balanceOf(
//         useAppState.walletAddress
//       );
//       setBal([
//         Number(useAppState.convert(bal1)).toFixed(2),
//         Number(useAppState.convert(bal2)).toFixed(2),
//       ]);
//       let _time = await useAppState.swapContract.lastSwapped(
//         useAppState.walletAddress
//       );
//       let finalTime =
//         Number(_time) * 1000 + moment(0).add(swapTime, "hours").valueOf();
//       setAvlTime(finalTime);
//       setShow(true);
//     }
//     getData();
//   }, [useAppState.change, useAppState.walletAddress]);

  const swap = async () => {
    setLoading(true);
    try {
      let _allowance2 = await useAppState.tokenContract2.allowance(
        useAppState.walletAddress,
        useAppState.swapAddr
      );
      if (Number(useAppState.convert(_allowance2)) <= 0) {
        let _tx = await useAppState.tokenContract2.approve(
          useAppState.swapAddr,
          ethers.utils.parseUnits("100000000", "mwei")
        );
        await _tx.wait();
        message.success("Successfully Approved, wait for confirmation...");
      }

      let tx = await useAppState.swapContract.swapBTCH(
        ethers.utils.parseUnits(amount, "mwei")
      );
      await tx.wait();
      message.success("Successfully Swapped");
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
          <Requests />
          <Header />
          <Balance />
          <div className="bg-white flex flex-col justify-center items-center mt-6 w-full bg-[#8080821a] px-6 py-8 rounded-lg shadow-lg wallet">
            <h1 className="text-xl text-black font-bold">
              Powered By <span className="txtgradient text-red-500">@Uniswap</span>
            </h1>
            {show ? (
              <h1 className="text-sm text-white mt-2 flex items-center bg-gray-900 bg-opacity-30 px-2 py-1">
                Swap Available In :{" "}
                <span className="ml-3 txtgradient">
                  <MyTimer expiryTimestamp={avlTime} />
                </span>
              </h1>
            ) : null}
            <p className="mt-6 font-bold text-lg float-left w-full ml-1">
              You <span className="text-white">Pay</span>{" "}
              <span className="text-sm">
                - {(Number(bal[1] * 25) / 100).toFixed(2)} BTCH MAX
              </span>
            </p>
            <div className="w-full flex mt-2 font-mono">
              <input
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setChange(change + 1);
                }}
                className="w-5/6 rounded-l-xl outline-none px-4 py-3 bg-gray-500 text-lg bg-opacity-20"
                placeholder="Enter BTCH Amount"
              />
              <div className="flex flex-col justify-center items-center py-2 px-2 bg-gray-500 bg-opacity-20 rounded-r-xl">
                <img className="h-8" src={TOKEN} />
                <p>Bal: {bal[1]}</p>
              </div>
            </div>
            <p className="mt-6 font-bold text-lg float-left w-full ml-1">
              You <span className="text-white">Receive</span>
            </p>
            <div className="w-full flex mt-2 font-mono">
              <p className="w-5/6 flex items-center cursor-not-allowed rounded-l-xl outline-none px-4 py-3 bg-gray-500 text-lg bg-opacity-20">
                {amount == "" ? (
                  "USDT Amount"
                ) : priceLoading ? (
                  <ThreeDots height={15} color="white" />
                ) : (
                  <span>
                    {amtBtch} USDT{" "}
                    <span className="text-sm font-mono">(Fee Included)</span>
                  </span>
                )}
              </p>
              <div className="flex flex-col justify-center items-center py-2 px-2 bg-gray-500 bg-opacity-20 rounded-r-xl">
                <img className="h-8" src={USDT} />
                <p>Bal: {bal[0]}</p>
              </div>
            </div>
            <button
              onClick={swap}
              className="flex justify-center mt-6 w-5/6 rounded-xl py-4 bg-lime-500 text-white"
            >
              {loading ? <TailSpin height={25} color="white" /> : "Swap"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
