import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import PersonOffIcon from "@mui/icons-material/PersonOff";
// import { Carousel, message } from "antd";
// import { Modal } from "antd";
import "./Homepage.css";
import background from "../../Images/background.png";
import mobbg from "../../Images/mobbg.png";
import logo from "../../Images/logo.png";
import bubble from "../../Images/bubble.png";
import planet from "../../Images/planet.png";
import ContentSlider from "./SimpleSlider";
import { ethers } from "ethers";
import { Carousel, message } from "antd";

const Homepage = () => {
  const login = async () => {
    // try {
    //   let user = await useAppState.contract.userInfo(useAppState.walletAddress);
    //   if (
    //     Number(user.referrer) == "0x0000000000000000000000000000000000000000"
    //   ) {
    //     message.warning("Register First");
    //   } else {
    //     message.success("Sucessfully Login");
    //     navigate("/dashboard");
    //   }
    // } catch (error) {
    //   message.error(error.reason);
    // }
    message.success("Sucessfully Logged in");
  };

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum); // connecting with metamask and behind the scenes multiple networks are connected with infura(etc mediater) rpc profile
    const signer = provider.getSigner();
    provider.send("eth_requestAccounts", []);
  }, []);
  return (
    <div className="relative bg-[#18191a] h-screen overflow-x-hidden">
      <header className="flex bg-[#18191a] z-40 shadow-lg p-5 justify-between items-center w-full h-[70px] sticky top-0">
        <h1 className="text-3xl font-bold">
          {" "}
          <span className="text-red-400"> BTC </span>
          <span className="ml-1 text-cyan-300">help</span>{" "}
        </h1>{" "}
        <div className="flex justify-center items-center">
          <Link
            to={"/dashboard"}
            onClick={login}
            className="bg-lime-500 py-2 px-6 cursor-pointer font-semibold text-sm rounded-md"
          >
            Login
          </Link>{" "}
        </div>{" "}
      </header>
      <div className="relative bg-[#18191a] flex justify-center h-screen items-center">
        <img
          src={background}
          className="absolute top-0 hidden md:block h-full w-full"
        />
        <img
          src={mobbg}
          className="absolute block md:hidden -top-12 h-full w-full"
        />
        <img
          src={bubble}
          className="rotate360 absolute h-[400px] rotate mb-[130px] md:mb-[80px]"
        />
        <img
          src={logo}
          className="absolute h-[180px] mb-[130px] md:mb-[80px] animate-pulse"
        />
      </div>
      <div className="relative bg-[#18191a] mt-9 flex justify-start items-center h-[400px] md:h-[700px] -translate-y-16">
        <img
          src={planet}
          className="absolute top-8 -right-24 md:right-0 h-full opacity-70 md:opacity-100 -z-30"
        />
        <div className="w-full md:w-1/2 md:mt-0 mt-[600px] text-gray-200 px-5 text-xl font-semibold">
          <span className="text-red-300"> BTChelp </span> is an innovative
          decentralized network platform that leverages the transformative
          potential of smart contracts to redefine the dynamics of modern
          marketing. Built on a foundation of{" "}
          <span className="text-red-300">blockchain technology</span> ,{" "}
          <span className="text-red-300"> BTChelp </span> creates a secure and
          transparent ecosystem.{" "}
          <Link
            to={"/register"}
            className="mt-3 bg-blue-500 w-32 flex justify-center items-center rounded-lg p-3 hover:bg-blue-600 text-sm cursor-pointer"
          >
            {" "}
            Register Now{" "}
          </Link>{" "}
          <div className="mt-16 md:mt-0 flex flex-col md:flex-row justify-between w-full p-5 md:absolute -bottom-0 md:-bottom-14">
            <div className="flex flex-col items-center md:w-1/3 w-full bg-slate-800 rounded-xl p-5">
              <EmojiEventsIcon fontSize="large" />
              <p> Rewards </p>{" "}
              <p className="text-sm text-gray-500 mt-3 text-center">
                {" "}
                Our decentralized platform offers a variety of rewards for users
                who contribute to our ecosystem.{" "}
              </p>{" "}
            </div>{" "}
            <div className="mt-4 md:mt-0 ml-0 md:ml-4 flex flex-col bg-slate-800 items-center md:w-1/3 w-full blackbg rounded-xl p-5">
              <VpnLockIcon fontSize="large" />
              <p> Secure </p>{" "}
              <p className="text-sm text-gray-500 mt-3 text-center">
                {" "}
                Our platform is built on smart contracts, providing a high level
                of security for all users.{" "}
              </p>{" "}
            </div>{" "}
            <div className="mt-4 md:mt-0 ml-0 md:ml-4 mr-0 md:mr-5 bg-slate-800 flex flex-col items-center md:w-1/3 w-full blackbg rounded-xl p-5">
              <PersonOffIcon fontSize="large" />
              <p> No Admin </p>{" "}
              <p className="text-sm text-gray-500 mt-3 text-center">
                {" "}
                Smart contracts operate without the need for admin, as they are
                self - executing.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Carousel autoplay>
        <ContentSlider />
      </Carousel>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Homepage;
