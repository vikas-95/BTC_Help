import React, { useContext, useEffect, useState } from "react";
import { Appstate } from "../App";
import { Link, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { LIST_IGNORE } from "antd/es/upload/Upload";

const Sidebar = () => {
  const location = useLocation();
  const useAppState = useContext(Appstate);
  const [rank, setRank] = useState(0);
  const [isDownline, setIsDownline] = useState(false);

  /* useEffect(() => {
    let str = "/down";
    let path = location.pathname;
    for (let i = 0; i < str.length; i++) {
      if (path[i] === str[i]) {
        if (i === str.length - 1) {
          setIsDownline(true);
        }
      } else {
        break;
      }
    }

    async function getData() {
      let user = await useAppState.contract.userInfo(useAppState.walletAddress);
      setRank(Number(user.rank));
    }

    getData();
  }, []); */

  return (
    <aside
      id="default-sidebar"
      /*  className={`z-40 w-full md:w-64 fixed md:sticky md:top-0 bottom-0 overflow-y-auto h-screen/2 md:h-screen transition-all ${
        useAppState.show ? "visible" : "hidden"
      }`} */
      aria-label="Sidebar"
      className="bg-gray-800"
    >
      <div className="bg-gray-300 h-full px-5 py-6 transition-all md:px-3 md:py-4 overflow-y-auto rounded-lg md:rounded-none  md:bg-[#8080821a]">
        <p className="text-white text-sm mb-2 ml-1">Welcome back,</p>
        <a
          href="#"
          className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2"
        >
          <div className="rounded-full bg-orange-500 flex justify-center items-center h-12 w-12 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </div>
          <div>
            <p class="font-medium text-white group-hover:text-indigo-400 leading-4">
              0x83b1...00e3
            </p>
            <span class="text-xs text-white">Participant</span>
          </div>
        </a>
        {/* <ul className="space-y-2 font-medium">
          <Link
            onClick={() => useAppState.setShow(useAppState.isPc ? true : false)}
            to={"/dashboard"}
          >
            <li className="mt-4">
              <a
                href="#"
                className={`${
                  location.pathname === "/dashboard"
                    ? "bg-gray-500 bg-opacity-20"
                    : ""
                } flex items-center p-2 text-white rounded-lg hover:bg-gray-500 hover:bg-opacity-20 group`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-window-sidebar"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z" />
                </svg>
                <span className=" ms-3">Dashboard</span>
              </a>
            </li>
          </Link>

          <Link
            onClick={() => useAppState.setShow(useAppState.isPc ? true : false)}
            to={"/teams"}
          >
            <li className="mt-4">
              <a
                href="#"
                className={`${
                  location.pathname === "/teams"
                    ? "bg-gray-500 bg-opacity-20"
                    : ""
                } flex items-center p-2 text-white rounded-lg hover:bg-gray-500 hover:bg-opacity-20 group`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-microsoft-teams"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.35 0Zm-1.676 3.356a1.682 1.682 0 0 0-1.682 1.682v4.294a1.682 1.682 0 0 0 1.682 1.682h.004a4.207 4.207 0 0 1 4.183 4.182c0 2.334-1.896 4.23-4.228 4.23-1.788 0-3.305-1.417-3.855-3.183h-2.37a.7.7 0 0 1-.682-.716V6.822a1.682 1.682 0 0 0-1.682-1.682H.679A.68.68 0 0 0 0 5.816v7.368a.68.68 0 0 0 .679.683H2.36a.7.7 0 0 1 .682.716v2.892a.68.68 0 0 0 .679.683h7.635a5.656 5.656 0 0 0 5.648-5.647v-4.294a1.682 1.682 0 0 0-1.682-1.682ZM9.186 1.349a1.682 1.682 0 1 0 1.682 1.682 1.682 1.682 0 0 0-1.682-1.682ZM7.773.713a.677.677 0 0 0-.623.417.675.675 0 0 0-.048.215v1.866c0 .377.305.682.682.682h1.866a.675.675 0 0 0 .215-.048.676.676 0 0 0 .417-.623.68.68 0 0 0-.68-.68H8.96Z" />
                </svg>
                <span className="ms-3">Teams</span>
              </a>
            </li>
          </Link>

          <Link
            onClick={() => useAppState.setShow(useAppState.isPc ? true : false)}
            to={"/down"}
          >
            <li className="mt-4">
              <a
                href="#"
                className={`${
                  isDownline ? "bg-gray-500 bg-opacity-20" : ""
                } flex items-center p-2 text-white rounded-lg hover:bg-gray-500 hover:bg-opacity-20 group`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-diagram-3-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm11.5 5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V6.707L9.354 8.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 1 1-.708.708L12 6.707V9.5a.5.5 0 0 1-.5.5z" />
                </svg>
                <span className="ms-3">Downline</span>
              </a>
            </li>
          </Link>
        </ul> */}

        <ul class="space-y-2 font-medium">
          <Link to="/dashboard">
            <li class="mt-4">
              <a
                href="#"
                class="bg-gray-500 bg-opacity-20 flex items-center p-2 text-white rounded-lg hover:bg-gray-500 hover:bg-opacity-20 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-window-sidebar"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"></path>
                  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z"></path>
                </svg>
                <span class="ms-3">Dashboard</span>
              </a>
            </li>
          </Link>
          <Link to="/teams">
            <li class="mt-4">
              <a
                href="#"
                class=" flex items-center p-2 text-white rounded-lg hover:bg-gray-500 hover:bg-opacity-20 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-microsoft-teams"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0m-2.238 9.488-.12-.002a5.2 5.2 0 0 0 .381-2.07V6.306a1.7 1.7 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.6 2.6 0 0 1-2.598 2.598z"></path>
                  <path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.68.68 0 0 1-.682.682H.682A.68.68 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945z"></path>
                </svg>
                <span class="ms-3">Teams Info</span>
              </a>
            </li>
          </Link>
          <p>
            <li class="mt-4">
              <Link
                to="/downlineusers"
                class=" flex items-center p-2 text-white rounded-lg hover:bg-gray-500 hover:bg-opacity-20 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-layer-backward"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.354 15.854a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708l1-1a.5.5 0 0 1 .708 0l.646.647V4H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9v7.793l.646-.647a.5.5 0 0 1 .708 0l1 1a.5.5 0 0 1 0 .708z"></path>
                  <path d="M1 9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.5a.5.5 0 0 1 0 1H1v2h4.5a.5.5 0 0 1 0 1zm9.5 0a.5.5 0 0 1 0-1H15V6h-4.5a.5.5 0 0 1 0-1H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z"></path>
                </svg>
                <span class="ms-3">Downline Users</span>
              </Link>
            </li>
          </p>
          <Link to="/deposithistory">
            <li class="mt-4">
              <a
                href="#"
                class=" flex items-center p-2 text-white rounded-lg hover:bg-gray-500 hover:bg-opacity-20 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock-history"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"></path>
                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"></path>
                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"></path>
                </svg>
                <span class="ms-3">Order History</span>
              </a>
            </li>
          </Link>
          <Link to="/wallet">
            <li class="mt-4">
              <a
                href="#"
                class=" flex items-center p-2 text-white rounded-lg hover:bg-gray-500 hover:bg-opacity-20 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-wallet-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"></path>
                  <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"></path>
                </svg>
                <span class="ms-3">Wallet</span>
              </a>
            </li>
          </Link>
          <Link to="/swap">
            <li class="mt-4">
              <a
                href="#"
                class=" flex items-center p-2 text-white rounded-lg hover:bg-gray-500 hover:bg-opacity-20 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-nintendo-switch"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05 1.73.298 3.045 1.6 3.373 3.326.046.242.053.809.053 4.61 0 4.06.005 4.537-.123 4.976-.022.076-.048.15-.08.242a4.14 4.14 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013-.05-.02-.053-.752-.053-7.979m4.675.269a1.62 1.62 0 0 0-1.113-1.034 1.61 1.61 0 0 0-1.938 1.073 1.9 1.9 0 0 0-.014.935 1.63 1.63 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028.11-.285.113-.742.003-1.053M3.71 3.317c-.208.04-.526.199-.695.348-.348.301-.52.729-.494 1.232.013.262.03.332.136.544.155.321.39.556.712.715.222.11.278.123.567.133.261.01.354 0 .53-.06.719-.242 1.153-.94 1.03-1.656-.142-.852-.95-1.422-1.786-1.256"></path>
                  <path d="M3.425.053a4.14 4.14 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39.368 1.66 1.548 2.844 3.224 3.235.22.05.497.06 2.29.07 1.856.012 2.048.009 2.097-.04.05-.05.053-.69.053-7.94 0-5.374-.01-7.906-.033-7.952-.033-.06-.09-.063-2.03-.06-1.578.004-2.052.014-2.26.05Zm3 14.665-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.85 2.85 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z"></path>
                </svg>
                <span class="ms-3">BTCHSwap</span>
              </a>
            </li>
          </Link>
        </ul>
        <Link
          className="mt-6 text-lg justify-center text-white font-semibold p-2 pl-0 rounded-lg bg-[#f43f5e] hover:bg-[#fb7185]  flex items-center space-x-2 opacity-70 hover:opacity-100 transition duration-150 ease-linear"
          onClick={() => useAppState.signOut()}
          to="/"
        >
          <LogoutIcon />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
