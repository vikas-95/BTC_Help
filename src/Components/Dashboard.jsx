import { useContext, useState, useEffect /* useRef */ } from "react";
import Header from "./Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Appstate } from "../App";
import CopyToClipboard from "react-copy-to-clipboard";
import { message } from "antd";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Balance from "./Balance";
import { Link } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
// import ProvideHelp from "./ProvideHelp";
import Sidebar from "./Sidebar";
import BlockIcon from "@mui/icons-material/Block";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { TailSpin } from "react-loader-spinner";
import { useTimer } from "react-timer-hook";
import Requests from "./Requests";
import { ethers } from "ethers";
import moment from "moment";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import USDT from "../Images/usdt.png";
import Logo from "../Images/logo.png";
import CYCLES from "../Images/cycles.png";
import JRMR from "../Images/jrmr.png";
import GENERATION from "../Images/generation.png";
import BGV from '../Images/lotter-background.png';

// function MyTimer2({ expiryTimestamp }) {
//   const { seconds, minutes, hours, days } = useTimer({
//     expiryTimestamp,
//   });

//   return (
//     <p>
//       {" "}
//       <span>
//         {" "}
//         {days.toString()}
//         Days{" "}
//       </span>
//       , <span>{hours.toString().padStart(2, "0")}</span>:{" "}
//       <span> {minutes.toString().padStart(2, "0")} </span>:
//       <span>{seconds.toString().padStart(2, "0")}</span>{" "}
//     </p>
//   );
// }

// function MyTimer({ expiryTimestamp }) {
//   const { seconds, minutes, hours } = useTimer({
//     expiryTimestamp,
//   });

//   return (
//     <p>
//       {" "}
//       <span> {hours.toString().padStart(2, "0")} </span>:
//       <span>{minutes.toString().padStart(2, "0")}</span>:{" "}
//       <span> {seconds.toString().padStart(2, "0")} </span>
//     </p>
//   );
// }

const Dashboard = () => {
  const { showSidebar } = useContext(Appstate);
  
  //   const useAppState = useContext(Appstate);
  //   const [time, setTime] = useState(0);
  //   const [user, setUser] = useState({
  //     start: 0,
  //     referrer: "",
  //     rank: 0,
  //     generation: false,
  //     currentPackage: 0,
  //     growthIncome: 0,
  //     totalFreezed: 0,
  //     lostBonus: 0,
  //     active: false,
  //   });
  //   const [isRankAvl, setIsRankAvl] = useState(false);
  //   const [rankLoading, setRankLoading] = useState(false);
  //   const [genAvl, setGenAvl] = useState(false);
  //   const [genLoading, setGenLoading] = useState(false);
  //   const [royaltyTime, setRoyaltyTime] = useState([0, 0]);
  //   const [royaltyShow, setRoyaltyShow] = useState([false, false]);
  //   const [roaylty, setRoyalty] = useState([0, 0]);
  //   const [lastDist, setLastDist] = useState([0, 0]);
  //   const [price, setPrice] = useState(0);
  //   const [txLoading, setTxLoading] = useState(false);
  //   const [roi, setRoi] = useState(0);
  //   const intervalRef = useRef(null);
  //   const incomeCap = 2;

  //   function calPer(a, b) {
  //     let per = parseInt((a * 100) / b);
  //     return per > 100 ? 100 : per;
  //   }

  //   useEffect(() => {
  //     async function getData() {
  //       let _price = await useAppState.swapContract.callStatic.getQuoteInUSDT(
  //         ethers.utils.parseUnits("1", "mwei")
  //       );
  //       setPrice(useAppState.convert(_price));

  //       let _user = await useAppState.contract.userInfo(
  //         useAppState.walletAddress
  //       );
  //       if (Number(_user.start > 0)) {
  //         let _income = await useAppState.contract.income(
  //           useAppState.walletAddress
  //         );
  //         let _len = await useAppState.contract.getDepositLength(
  //           useAppState.walletAddress
  //         );
  //         let _active = await useAppState.contract.isOrderBlocked(
  //           useAppState.walletAddress,
  //           Number(_len) - 1
  //         );
  //         setUser({
  //           start: Number(_user.start),
  //           referrer: _user.referrer,
  //           rank: Number(_user.rank),
  //           generation: _user.generation,
  //           currentPackage: Number(useAppState.convert(_user.currentPackage)),
  //           growthIncome: Number(useAppState.convert(_income.growthIncome)),
  //           totalFreezed: Number(useAppState.convert(_user.totalFreezed)),
  //           lostBonus: Number(useAppState.convert(_income.lostGenBonus)),
  //           active: _active ? false : true,
  //         });

  //         let _rankAvl = await useAppState.contract.isUpdateRankAvl(
  //           useAppState.walletAddress
  //         );
  //         let _genAvl = await useAppState.contract.isUpdateGenerationAvl(
  //           useAppState.walletAddress
  //         );
  //         setGenAvl(_genAvl);
  //         setIsRankAvl(_rankAvl);

  //         let len = await useAppState.contract.getDepositLength(
  //           useAppState.walletAddress
  //         );
  //         if (Number(len) > 0) {
  //           for (let i = Number(len) - 1; i >= 0; i--) {
  //             let order = await useAppState.contract.depositHistory(
  //               useAppState.walletAddress,
  //               i
  //             );
  //             if (!order.isClaimed) {
  //               let _curROI = await useAppState.contract.getCurROI(
  //                 useAppState.walletAddress,
  //                 i
  //               );
  //               setRoi((prev) => prev + Number(useAppState.convert(_curROI)));
  //             }
  //           }
  //         }
  //       } else {
  //         setUser({ ...user, referrer: _user.referrer });
  //       }

  //       let active = await useAppState.contract.activeRoyalty();
  //       let global = await useAppState.contract.globalRoyalty();
  //       setRoyalty([useAppState.convert(active), useAppState.convert(global)]);

  //       let activeLastDist = await useAppState.contract.activeRoyaltyLastDist();
  //       let globalLastDist = await useAppState.contract.globalRoyaltyLastDist();
  //       setLastDist([
  //         Number(activeLastDist) * 1000,
  //         Number(globalLastDist) * 1000,
  //       ]);

  //       let time = await useAppState.contract.getRoyaltyTimeRemaining();
  //       setRoyaltyTime([Number(time[0]) * 1000, Number(time[1]) * 1000]);
  //       setRoyaltyShow([true, true]);
  //     }
  //     getData();
  //   }, [useAppState.walletAddress, useAppState.change]);

  //   useEffect(() => {
  //     intervalRef.current = setInterval(() => {
  //       if (Number(user.start) > 0) {
  //         setTime(Date.now() - Number(user.start) * 1000);
  //       } else {
  //         setTime(0);
  //       }
  //     }, 10);
  //     return () => clearInterval(intervalRef.current);
  //   }, [user.start, useAppState.change, useAppState.walletAddress]);

  //   const formatTime = (time) => {
  //     const sec = Math.floor((time / 1000) % 60);
  //     const min = Math.floor((time / 60000) % 60);
  //     const hr = Math.floor((time / 3600000) % 24);
  //     const days = Math.floor(time / 86400000);
  //     return (
  //       `${days.toString().padStart(2, "0")} Days, ` +
  //       `${hr.toString().padStart(2, "0")} : ` +
  //       `${min.toString().padStart(2, "0")} : ` +
  //       `${sec.toString().padStart(2, "0")}`
  //     );
  //   };

  //   const updateRank = async () => {
  //     setRankLoading(true);
  //     try {
  //       let tx = await useAppState.contract.updateRank(useAppState.walletAddress);
  //       await tx.wait();
  //       message.success("Rank Updated");
  //       useAppState.setChange(useAppState.change + 1);
  //     } catch (error) {
  //       message.error(error.reason);
  //     }
  //     setRankLoading(false);
  //   };

  //   const updateGeneration = async () => {
  //     setGenLoading(true);
  //     try {
  //       let tx = await useAppState.contract.updateGeneration(
  //         useAppState.walletAddress
  //       );
  //       await tx.wait();
  //       message.success("Generation Bonus Updated");
  //       useAppState.setChange(useAppState.change + 1);
  //     } catch (error) {
  //       message.error(error.reason);
  //     }
  //     setGenLoading(false);
  //   };

  //   const payPH = async (_index) => {
  //     setTxLoading(true);
  //     try {
  //       let tx = await useAppState.contract.provideHelp(_index);
  //       await tx.wait();
  //       message.success("Sucessfully Paid");
  //       useAppState.setChange(useAppState.change + 1);
  //     } catch (error) {
  //       message.error(error.reason);
  //     }
  //     setTxLoading(false);
  //   };

  //   const claimReward = async (_index) => {
  //     setTxLoading(true);
  //     try {
  //       let tx = await useAppState.contract.requestClaim(_index);
  //       await tx.wait();
  //       message.success("Sucessfully Claimed");
  //       useAppState.setChange(useAppState.change + 1);
  //     } catch (error) {
  //       message.error(error.reason);
  //     }
  //     setTxLoading(false);
  //   };

  //   const payLeftAmt = async (_index) => {
  //     setTxLoading(true);
  //     try {
  //       let tx = await useAppState.contract.payLeftAmt(_index);
  //       await tx.wait();
  //       message.success("Sucessfully Paid");
  //       useAppState.setChange(useAppState.change + 1);
  //     } catch (error) {
  //       message.error(error.reason);
  //     }
  //     setTxLoading(false);
  //   };

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <div className=" bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-900 flex justify-center p-4 w-full">
        <div className="w-full">
          <Requests />
          <Header />
          <Balance />
          <div className="bg-white mt-4 w-full flex flex-col md:flex-row items-center bg-[#8080821a] px-4 py-8 md:px-6 rounded-2xl shadow-lg profile">
            <img /* src={`b${user.rank}.png`} */ className=" h-32" />
            <div className="ml-0 md:ml-12 mt-4 md:mt-0">
              <p className="mt-2 text-lime-600 font-semibold">
                {" "}
                1 BTCH:{" "}
                <span className="font-semibold text-black bg-gray-500 bg-opacity-20 rounded-2xl px-3">
                  {" "}
                  {/* {price} */}
                  USDT{" "}
                </span>
              </p>
              <p className="mt-2 text-lime-600 font-semibold">
                {" "}
                Account:{" "}
                <span className="font-semibold text-white bg-gray-500 bg-opacity-20 rounded-2xl px-3">
                  {" "}
                  {/*  {useAppState.walletAddress.slice(0, 6)}...
                  {useAppState.walletAddress.slice(38)} -{" "}
                  {user.active ? ( */}
                  <span className="text-gray-900 ">
                    {" "}
                    {/*  Active{" "} */}{" "}
                    0x83B1b3f5269ef2A0198bB8de1D08a7969Bda00e3
                  </span>
                  {/* ) : ( */}
                  <span className="text-red-500 animate-pulse">InActive</span>
                  {/*  )} */}{" "}
                </span>
              </p>
              <p className="mt-2 text-lime-600 font-semibold">
                {" "}
                Current Package:{" "}
                <span className="font-semibold text-gray-900 bg-gray-500 bg-opacity-20 rounded-2xl px-3">
                  {" "}
                  {/*  $ {user.currentPackage}{" "} */} $0
                </span>
              </p>
              <div className="mt-2 font-semibold">
                {" "}
                <span className="text-lime-600 font-medium"> Member: </span>
                Since{" "}
                <span className="text-gray-900 bg-gray-500 bg-opacity-20 rounded-2xl px-3">
                  {/*  {formatTime(time)} */} 00 Days, 00 : 00 : 00 by ...
                </span>{" "}
                by{" "}
                <span className="text-gray-900 bg-gray-500 bg-opacity-20 rounded-2xl px-3">
                  {" "}
                  ...
                  {/*  {user.referrer.slice(0, 6) +
                    "..." +
                    user.referrer.slice(38)}{" "} */}
                </span>
              </div>
              <p className="font-semibold break-all mt-2">
                {" "}
                <span className="text-lime-600 font-medium"> Refer Link: </span>
                <span className="bg-gray-900 text-gray-900 bg-opacity-20 rounded-2xl px-2">
                  btchelp.live/register ? ref ={" "}
                  {/* {useAppState.walletAddress.slice(0, 6)}...
                  {useAppState.walletAddress.slice(38)}{" "} */}
                </span>{" "}
                <CopyToClipboard
                  text={`https://btchelp.live/register?ref=0x83B1b3f5269ef2A0198bB8de1D08a7969Bda00e3`}
                >
                  <FileCopyIcon
                    onClick={() => message.success("Copied")}
                    fontSize="small"
                    color="primary"
                    className="ml-2 mr-2 cursor-pointer"
                  />
                </CopyToClipboard>{" "}
              </p>{" "}
            </div>{" "}
          </div>
          <div class="bg-white  mt-6 cursor-pointer w-full flex justify-between items-center bg-[#8080821a] px-4 py-2 rounded-2xl shadow-lg wallet">
            <div class="font-bold w-full pb-1 flex justify-between">
              <p class="text-sm flex items-center">
                <img src={Logo} class="h-6 mr-2" /> BTCH Token Info
              </p>
              <p class="text-sm animate-pulse">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-colorInfo MuiSvgIcon-fontSizeMedium css-1hm3tfm"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="InfoIcon"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                </svg>
              </p>
            </div>
          </div>
          {/* Pending Requests */} {/* {useAppState.req.map((e, i) => { */}
          {/*  return ( */}
          <div className="bg-white  mt-6 w-full flex justify-between items-center bg-[#8080821a] px-4 py-2 rounded-2xl shadow-lg autopool">
            <div class="font-bold w-full pb-1">
              <p class="text-sm">Growth Income Limit ($0/$0)</p>
              <p class="w-full bg-gray-400 h-2 mt-1 rounded-xl">
                <p class="max-w-full w-[NaN%] bg-lime-600 h-full rounded-xl"></p>
              </p>
            </div>
          </div>
          <div className="bg-white  mt-4 w-full flex flex-col md:flex-row items-center bg-[#8080821a] px-4 py-4 md:px-6 rounded-2xl shadow-lg">
            <div className="flex flex-col-reverse md:flex-row w-full mt-3">
              <div className="w-full md:w-3/5 mt-8 md:mt-0">
                <div className="flex justify-between py-3 px-4 bg-gray-500 bg-opacity-20 rounded-xl">
                  <p className="flex flex-col items-center">
                    <span className="text-lg font-bold flex justify-center items-center">
                      20
                      <img src={USDT} className="h-5 ml-2" />
                    </span>
                    <span className="">Minimum Helping</span>
                  </p>
                  <p className="flex flex-col items-center">
                    <span className="text-lg font-bold flex justify-center items-center">
                      10,000
                      <img src={USDT} className="h-5 ml-2" />
                    </span>
                    <span className="">Maximum Helping</span>
                  </p>
                </div>
                <p className="text-sm mt-6 px-5">
                  You cannot deposit a smaller amount in the current round
                  compared to the previous round.
                </p>
                <p className="flex  justify-between items-end px-2 md:px-4 py-3 rounded-lg mt-6">
                  <input
                    className="text-lg   outline-none font-medium"
                    placeholder="Enter amount in USDT"
                    style={{ background: "none",color:"black" }}
                    spellcheck="false"
                    data-ms-editor="true"
                    type="number"
                  />
                  <span class="text-black">Provide Help Amount</span>
                </p>
                <div class="border border-[#0c0e0f] w-full mt-2"></div>
                <div class="mt-6 w-full flex justify-center">
                  <button class="ml-4 px-16 py-4 text-sm font-semibold rounded-md bg-[#0ddc85] text-black">
                    Confirm
                  </button>
                </div>
              </div>
              <div class="w-full flex flex-col items-center md:w-2/5 ml-0 md:ml-6">
                <h1 class="mont text-lg text-black font-bold">
                  BTCHelp Helping Rule
                </h1>
                <img src={CYCLES} class="h-72 mt-4" />
              </div>
            </div>
          </div>
          {/* ROI Income */} {/* {user.lostBonus > 0 ? ( */}
          {/*   ) : null} */}
          {/* Lost Gen Bonus */} {/* {user.lostBonus > 0 ? ( */}
          {/* ) : null} */}
          {/*  <ProvideHelp /> */}
          {/* Manager Update */}{" "}
          <div class="flex flex-col md:flex-row justify-between mt-5">
            <div class="bg-white  w-full md:w-1/2 p-4 bg-[#8080821a] rounded-lg shadow-lg wallet">
              <p class="font-bold">
                Next
                <span class="text-white"> Manager Rank</span>
              </p>
              <div class="flex mt-2 items-center justify-between">
                <img src={JRMR} class=" h-32" />
                <p>
                  <span class="px-8 md:px-16 py-4 text-sm font-semibold rounded-md bg-[#e5573e] text-white flex justify-center items-center cursor-not-allowed">
                    Unqualified
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ml-3 css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="BlockIcon"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path>
                    </svg>
                  </span>
                </p>
              </div>
            </div>
            <div class="bg-white md:mt-0 mt-4 md:ml-4 ml-0 w-full md:w-1/2 p-4 bg-[#8080821a] rounded-lg shadow-lg wallet">
              <p class="font-bold">
                Update
                <span class="text-white"> Generation Bonus</span>
              </p>
              <div class="flex mt-2 items-center justify-between">
                <img src={GENERATION} class=" h-32" />
                <p>
                  <span class="px-8 md:px-16 py-4 text-sm font-semibold rounded-md bg-[#e5573e] text-white flex justify-center items-center cursor-not-allowed">
                    Unqualified
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ml-3 css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="BlockIcon"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path>
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Royalty */}{" "}
          <div class="flex mb-6 flex-col md:flex-row justify-between mt-6">
            <div class="bg-white flex flex-col items-center relative  h-44 w-full rounded-xl md:w-1/2">
              <img
                src={BGV}
                class="absolute top-0 h-full w-full rounded-xl -z-10"
              />
              <p class="text-md text-black font-semibold mt-3">Active Royalty Pool</p>
              <p class="text-3xl text-white font-bold flex justify-center items-center">
                $0
                <img src={USDT} class="h-6 ml-2" />
              </p>
              <p class="text-xs mt-1 text-black font-semibold">
                Time Remaining
              </p>
              <p class="text-3xl font-mono font-bold"></p>
              <p class="text-xs mt-1 text-black font-semibold">
                Last Distributed on 1/1/1970, 5:30:00 AM
              </p>
            </div>
            <div class="bg-white mt-6 md:mt-0 ml-0 md:ml-4 flex flex-col justify-center rounded-xl items-center relative  h-44 w-full md:w-1/2">
              <img
                src={BGV}
                class="absolute top-0 -z-10 h-full w-full rounded-xl"
              />
              <p class="text-md text-black font-bold">Global Royalty Pool</p>
              <p class="text-3xl text-white font-bold flex justify-center items-center">
                $0
                <img src={USDT} class="h-6 ml-2" />
              </p>
              <p class="text-xs mt-1 text-black font-semibold">
                Time Remaining
              </p>
              <p class="text-3xl font-mono font-bold"></p>
              <p class="text-xs mt-1 text-black font-semibold">
                Last Distributed on 1/1/1970, 5:30:00 AM
              </p>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Dashboard;
