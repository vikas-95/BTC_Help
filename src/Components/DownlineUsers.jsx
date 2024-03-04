import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Appstate } from "../App";
import Requests from "./Requests";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import { Modal } from "antd";
import { useParams } from "react-router-dom";

const DownlineUsers = () => {
  const useAppState = useContext(Appstate);
  const { level } = useParams();
  const [layer, setLayer] = useState(1);
  const [teams, setTeams] = useState([
    {
      address: "",
      sno: 0,
      start: 0,
      donated: 0,
      rank: "",
      pendingTx: "",
      active: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const [userLoading2, setUserLoading2] = useState([]);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    address: "",
    start: 0,
    donated: 0,
    rank: 0,
    pendingTx: 0,
    active: 0,
  });
  const { showSidebar } = useContext(Appstate);

  // useEffect(() => {
  //   setLayer(level);
  //   getData();
  // }, [layer, useAppState.change, useAppState.walletAddress]);

  const getData = async () => {
    setLoading(true);
    setTeams([]);
    let len = await useAppState.contract.getLayerTeamLength(
      useAppState.walletAddress,
      layer - 1
    );
    if (len > 0) {
      for (let i = Number(len) - 1; i >= 0; i--) {
        let curUser = await useAppState.contract.teamUsers(
          useAppState.walletAddress,
          layer - 1,
          i
        );
        let _pendingTx = await useAppState.contract.getUsersRequestCount(
          curUser
        );
        setTeams((prev) => [
          ...prev,
          {
            sno: i + 1,
            address: curUser,
            pendingTx: Number(_pendingTx),
            start: 0,
            donated: 0,
            rank: "...",
            active: "",
          },
        ]);

        setUserLoading2((prev) => [...prev, false]);
        setLoading(false);
      }
    }
    setLoading(false);
  };

  const viewDetails = async (address) => {
    setUserLoading(true);
    setShow(true);
    let _user = await useAppState.contract.userInfo(address);
    let _pendingTx = await useAppState.contract.getUsersRequestCount(address);
    let _len = await useAppState.contract.getDepositLength(address);
    let _isBlocked = await useAppState.contract.isOrderBlocked(
      address,
      Number(_len) - 1
    );
    setUser({
      address: address,
      start: Number(_user.start) * 1000,
      donated: useAppState.convert(_user.totalDeposit),
      rank: Number(_user.rank),
      pendingTx: Number(_pendingTx),
      active: _isBlocked ? false : true,
    });
    setUserLoading(false);
  };

  const viewDetailsInTable = async (address, Index) => {
    let prevLoading = [...userLoading2];
    let prevData = [...teams];
    prevLoading[Index] = true;
    setUserLoading2(prevLoading);
    let _user = await useAppState.contract.userInfo(address);
    let _pendingTx = await useAppState.contract.getUsersRequestCount(address);
    let _len = await useAppState.contract.getDepositLength(address);
    let _isBlocked = await useAppState.contract.isOrderBlocked(
      address,
      Number(_len) - 1
    );
    prevData[Index] = {
      address: address,
      sno: prevData[Index].sno,
      start: Number(_user.start) * 1000,
      donated: useAppState.convert(_user.totalDeposit),
      rank: useAppState.rank[Number(_user.rank)],
      pendingTx: Number(_pendingTx),
      active: _isBlocked ? false : true,
    };
    setTeams(prevData);
    prevLoading[Index] = false;
    setUserLoading2(prevLoading);
  };

  return (
    <div className="flex h-screen">
      {showSidebar && <Sidebar />}
      <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-900 flex justify-center p-4 w-full">
        <div className="w-full">
          <Header />
          {/* <Requests /> */}
          <div>
            {/* Modal */}
            <Modal
              open={show}
              footer={null}
              onCancel={() => setShow(false)}
              title="User Details"
            >
              {userLoading ? (
                <div className="flex justify-center">
                  <ThreeDots />
                </div>
              ) : (
                <div className=" flex flex-col justify-center items-center">
                  <div className="rounded-full bg-blue-500 text-white flex justify-center items-center h-12 w-12 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                  </div>
                  <div className="mt-3">
                    <p className="break-all font-medium text-green-500">
                      Address:{" "}
                      <span className="text-black">{user.address}</span>
                    </p>
                    <p className="break-all font-medium text-green-500">
                      Rank:{" "}
                      <span className="text-black">
                        {/* {useAppState.rank[user.rank]} */}
                      </span>
                    </p>
                    <p className="break-all font-medium text-green-500">
                      Start:{" "}
                      <span className="text-black">
                        {new Date(user.start).toLocaleString()}
                      </span>
                    </p>
                    <p className="break-all font-medium text-green-500">
                      Donated:{" "}
                      <span className="text-black">${user.donated}</span>
                    </p>
                    <p className="break-all font-medium text-green-500">
                      Pending PH:{" "}
                      <span className="text-black">{user.pendingTx}</span>
                    </p>
                    <p className="break-all font-medium text-green-500">
                      Status:{" "}
                      <span className="text-black">
                        {user.active ? "Active" : "InActive"}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </Modal>

            <p className="mt-6 font-bold text-lg text-lime-300">
              Select <span className="text-white">Layer</span>
            </p>
            <div className="flex overflow-y-auto mt-3">
              {[...Array(21).keys()].map((num) => (
                <a
                  key={num + 1}
                  href={`/downlineusers/${num + 1}`}
                  className={`cursor-pointer font-medium px-4 mt-2 py-2 rounded-sm ${
                    layer === num + 1 ? "bg-gray-300" : "bg-white"
                  } ml-${num === 0 ? "0" : "2"}`}
                >
                  {num + 1} 
                </a>
              ))}
            </div>

            <div id="last-users" className="mt-4 w-full">
              <div class="overflow-x-scroll w-full">
                {loading ? (
                  <div className="mt-6 flex justify-center items-center">
                    <TailSpin color="white" height={30} />
                  </div>
                ) : (
                  <table class="w-full whitespace-nowrapm bg-white rounded-xl">
                    <thead class="border-b border-black">
                      <th class="text-left py-3 px-2 rounded-l-lg">SNo.</th>
                      <th class="text-left py-3 px-2">Address</th>
                      <th class="text-left py-3 px-2">Detail</th>
                      <th class="text-left py-3 px-2">Started</th>
                      <th class="text-left py-3 px-2">Rank</th>
                      <th class="text-left py-3 px-2">Donated</th>
                      <th class="text-left py-3 px-2">Pending PH</th>
                      <th class="text-left py-3 px-2">Status</th>
                    </thead>
                    {teams.map((e, i) => (
                      <tr key={i} class="border-b border-gray-700">
                        <td
                          onClick={() => viewDetails(e.address)}
                          class="py-3 px-2 font-bold"
                        >
                          <div class="inline-flex space-x-3 items-center">
                            <div
                              className={`rounded-lg flex justify-center items-center h-10 w-10 font-semibold`}
                            >
                              {e.sno}
                            </div>
                          </div>
                        </td>
                        <td
                          onClick={() => viewDetails(e.address)}
                          class="py-3 px-2"
                        >
                          <p>
                            {e.address.slice(0, 8)}...{e.address.slice(37)}{" "}
                            {e.pendingTx > 0 ? (
                              <p className="ml-2 animate-pulse text-red-500">
                                ({e.pendingTx})
                              </p>
                            ) : null}
                          </p>
                        </td>
                        <td class="py-3 px-2">
                          <button
                            className="bg-white rounded-lg px-3 py-1 font-medium font-mono cursor-pointer"
                            onClick={() => viewDetailsInTable(e.address, i)}
                          >
                            {userLoading2[i] ? "Loading..." : "View"}
                          </button>
                        </td>
                        <td class="py-3 px-2">
                          {Number(e.start) > 0
                            ? new Date(e.start).toLocaleString()
                            : "..."}
                        </td>
                        <td class="py-3 px-2">{e.rank}</td>
                        <td class="py-3 px-2">
                          {Number(e.donated) > 0 ? `$${e.donated}` : "..."}
                        </td>
                        <td class="py-3 px-2 text-red-500">{e.pendingTx}</td>
                        <td class="py-3 px-2">
                          {e.active !== "" ? (
                            e.active ? (
                              <p className="text-lime-500">Active</p>
                            ) : (
                              <p className="text-red-500">InActive</p>
                            )
                          ) : (
                            "..."
                          )}
                        </td>
                      </tr>
                    ))}
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownlineUsers;
