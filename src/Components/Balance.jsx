import React, { useContext, useEffect, useState } from "react";
import { Appstate } from "../App";
import { ethers } from "ethers";
import USDT from "../Images/usdt.png";
import MATICTOKEN from "../Images/matictoken.png";
import Logo from '../Images/logo.png'

const Balance = () => {
  const useAppState = useContext(Appstate);
  const [bal, setBal] = useState({
    matic: 0,
    usdt: 0,
    btch: 0,
  });

  /* useEffect(() => {
    async function getData() {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let bal = await useAppState.tokenContract.balanceOf(
        useAppState.walletAddress
      );
      let bal2 = await provider.getBalance(useAppState.walletAddress);
      let bal3 = await useAppState.tokenContract2.balanceOf(
        useAppState.walletAddress
      );
      setBal({
        matic: Number(ethers.utils.formatEther(bal2.toString())).toFixed(2),
        usdt: parseInt(useAppState.convert(bal)),
        btch: parseInt(useAppState.convert(bal3)),
      });
    }
    getData();
  }, [useAppState.walletAddress, useAppState.change]); */

  return (
    <div className="bg-white mt-6 w-full flex justify-end items-center bg-[#8080821a] px-2 py-2 rounded-2xl shadow-lg profile">
      <div className="flex">
        {" "}
        <span className="font-semibold text-black bg-gray-500 bg-opacity-20 rounded-2xl flex justify-center items-center px-2 py-1">
          {" "}
          <img src={USDT} className="h-6 mr-2" /> $ {/* {bal.usdt} */}0{" "}
        </span>
      </div>
      <div className="flex">
        {" "}
        <span className="ml-2 font-semibold text-black bg-gray-500 bg-opacity-20 rounded-2xl flex justify-center items-center px-2 py-1">
          {" "}
          <img src={MATICTOKEN} className="h-6 mr-2" /> $ 0 {/* {bal.matic} */}{" "}
        </span>
      </div>
      <div className="flex">
        {" "}
        <span className="ml-2 font-semibold text-black bg-gray-500 bg-opacity-20 rounded-2xl flex justify-center items-center px-2 py-1">
          {" "}
          <img src={Logo} className="h-6 mr-2" /> $ 0.00{/* {bal.btch.toFixed(2)} */}{" "}
        </span>
      </div>
    </div>
  );
};

export default Balance;
