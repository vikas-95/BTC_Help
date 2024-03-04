import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import { Appstate } from "../App";
import Sidebar from "../Components/Sidebar";
import Requests from "../Components/Requests";
import TEAMS from '../Images/teams.png';
import DIRECT from '../Images/direct.png';
import PASSUP from '../Images/passup.png';
import STRLEG from '../Images/strongleg.png';
import DRCTBUS from '../Images/directbusiness.png';
import USDT from '../Images/3dusdt.png';
import GEN from '../Images/generation.png';
import JRMR from '../Images/jrmr.png';
import B0 from '../Images/b0.png';
import B1 from '../Images/b1.png';
import B2 from '../Images/b2.png';
import B3 from '../Images/b3.png';
import B4 from '../Images/b4.png';

const imagesArray = [B0, B1, B2, B3, B4 ];

const Teams = () => {
  const useAppState = useContext(Appstate);
  const [data, setData] = useState({
    directTeam: 0,
    totalTeam: 0,
    directManagers: 0,
    strongLegTeam: 0,
    otherLegTeam: 0,
    totalBusiness: 0,
    directBusiness: 0,
  });
  // const [generation, setGeneration] = useState({
  //   totalTeam: 1,
  //   strongLegTeam: 1,
  //   otherLegTeam: 0
  // })
  // const [manager, setManager] = useState({
  //   directTeam: 1,
  //   directBusiness: 500
  // })
  // const [rankRequired, setRankRequired] = useState([
  //   {
  //     directManagers: 1,
  //     totalTeam: 3
  //   },
  //   {
  //     directManagers: 1,
  //     totalTeam: 6
  //   },
  //   {
  //     directManagers: 1,
  //     totalTeam: 8
  //   },
  //   {
  //     directManagers: 1,
  //     totalTeam: 10
  //   },
  //   {
  //     directManagers: 1,
  //     totalTeam: 12
  //   }
  // ])
  const [generation, setGeneration] = useState({
    totalTeam: 700,
    strongLegTeam: 400,
    otherLegTeam: 300,
  });
  const [manager, setManager] = useState({
    directTeam: 10,
    directBusiness: 1000,
  });
  const [rankRequired, setRankRequired] = useState([
    {
      directManagers: 2,
      totalTeam: 50,
    },
    {
      directManagers: 4,
      totalTeam: 100,
    },
    {
      directManagers: 6,
      totalTeam: 500,
    },
    {
      directManagers: 8,
      totalTeam: 1000,
    },
    {
      directManagers: 10,
      totalTeam: 10000,
    },
  ]);

  const { showSidebar } = useContext(Appstate);

  function calPer(a, b) {
    let per = parseInt((a * 100) / b);
    return per > 100 ? 100 : per;
  }
  
//   useEffect(() => {
//     async function getData() {
//       let _user = await useAppState.contract.userInfo(
//         useAppState.walletAddress
//       );
//       let _teamInfo = await useAppState.contract.getUserTeamInfo(
//         useAppState.walletAddress
//       ); // [strong, other, total, directManagers]
//       setData({
//         strongLegTeam: Number(_teamInfo[0]),
//         otherLegTeam: Number(_teamInfo[1]),
//         totalTeam: Number(_teamInfo[2]),
//         directManagers: Number(_teamInfo[3]),
//         directTeam: Number(_user.directTeam),
//         totalBusiness: useAppState.convert(_user.totalBusiness),
//         directBusiness: useAppState.convert(_user.directBusiness),
//       });
//     }
//     getData();
//   }, [useAppState.walletAddress, useAppState.change]);

  return (
    <div className="flex ">
      {showSidebar && <Sidebar />}
      <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-900 flex justify-center p-4 w-full">
        <div className="w-full">
          {" "}
          {/* <Requests /> */} <Header />
          <div className="flex justify-between">
            <div className="bg-white mt-4 w-full mt-6 w-full flex justify-between items-center bg-[#8080821a] px-4 py-2 rounded-2xl shadow-lg profile">
              <div className="font-bold">
                <p className=""> Total Teams </p>{" "}
                <p className="text-xl"> {data.totalTeam} </p>{" "}
              </div>{" "}
              <img src={TEAMS} className="h-20" />
            </div>
            <div className="bg-white mt-4 w-full ml-4 mt-6 w-full flex justify-between items-center bg-[#8080821a] px-4 py-2 rounded-2xl shadow-lg profile">
              <div className="font-bold">
                <p className=""> Direct Teams </p>{" "}
                <p className="text-xl"> {data.directTeam} </p>{" "}
              </div>{" "}
              <img src={DIRECT} className="h-20" />
            </div>{" "}
          </div>
          <div className="flex justify-between">
            <div className="bg-white mt-4 w-full mt-6 w-full flex justify-between items-center bg-[#8080821a] px-4 py-2 rounded-2xl shadow-lg profile">
              <div className="font-bold">
                <p className=""> Direct Managers </p>{" "}
                <p className="text-xl"> {data.directManagers} </p>{" "}
              </div>{" "}
              <img src={PASSUP} className="h-16" />
            </div>
            <div className="bg-white mt-4 w-full ml-4 mt-6 w-full flex justify-between items-center bg-[#8080821a] px-4 py-2 rounded-2xl shadow-lg profile">
              <div className="font-bold">
                <p className=""> Strong Leg </p>{" "}
                <p className="text-xl"> {data.strongLegTeam} </p>{" "}
              </div>{" "}
              <img src={STRLEG} className="h-20" />
            </div>{" "}
          </div>
          <div className="flex justify-between">
            <div className="bg-white mt-4 w-full mt-6 w-full flex justify-between items-center bg-[#8080821a] px-4 py-2 rounded-2xl shadow-lg profile">
              <div className="font-bold">
                <p className=""> Total Business </p>{" "}
                <p className="text-xl"> $ {data.totalBusiness} </p>{" "}
              </div>{" "}
              <img src={USDT} className="h-16" />
            </div>
            <div className="bg-white mt-4 w-full ml-4 mt-6 w-full flex justify-between items-center bg-[#8080821a] px-4 py-2 rounded-2xl shadow-lg profile">
              <div className="font-bold">
                <p className=""> Direct Business </p>{" "}
                <p className="text-xl"> $ {data.directBusiness} </p>{" "}
              </div>{" "}
              <img src={DRCTBUS} className="h-20" />
            </div>{" "}
          </div>
          <p className="mt-6 font-bold text-lg text-lime-300">
            {" "}
            Achievement <span className="text-white"> Progress </span>
          </p>
          {/* Generation */}{" "}
          <div className="bg-white mt-4 w-full mt-6 w-full flex justify-between items-center bg-[#8080821a] px-4 py-2 rounded-2xl shadow-lg wallet">
            <div className="font-bold w-2/3">
              <p className="text-sm">
                {" "}
                Strong Leg Team({data.strongLegTeam}/{generation.strongLegTeam})
              </p>
              <p className="w-full bg-gray-400 h-1 mt-1 rounded-xl">
                {" "}
                <p
                  style={{
                    width: `${calPer(
                      data.strongLegTeam,
                      generation.strongLegTeam
                    )}%`,
                  }}
                  className={`max-w-full w-[${calPer(
                    data.strongLegTeam,
                    generation.strongLegTeam
                  )}%] bg-green-500 h-full rounded-xl`}
                >
                  {" "}
                </p>
              </p>
              <p className="text-sm mt-2">
                {" "}
                Other Leg Team({data.otherLegTeam}/{generation.otherLegTeam})
              </p>
              <p className="w-full bg-gray-400 h-1 mt-1 rounded-xl">
                {" "}
                <p
                  style={{
                    width: `${calPer(
                      data.otherLegTeam,
                      generation.otherLegTeam
                    )}%`,
                  }}
                  className={`max-w-full w-[${calPer(
                    data.otherLegTeam,
                    generation.otherLegTeam
                  )}%] bg-green-500 h-full rounded-xl`}
                >
                  {" "}
                </p>
              </p>
              <p className="text-sm mt-2">
                {" "}
                Total Team({data.totalTeam}/{generation.totalTeam})
              </p>
              <p className="w-full bg-gray-400 h-1 mt-1 rounded-xl">
                {" "}
                <p
                  style={{
                    width: `${calPer(data.totalTeam, generation.totalTeam)}%`,
                  }}
                  className={`max-w-full w-[${calPer(
                    data.totalTeam,
                    generation.totalTeam
                  )}%] bg-green-500 h-full rounded-xl`}
                >
                  {" "}
                </p>
              </p>
            </div>{" "}
            <img src={GEN} className="h-28" />
          </div>
          {/* Ranks */}{" "}
          <div className="bg-white mt-4 w-full mt-6 w-full flex justify-between items-center bg-[#8080821a] px-4 py-2 rounded-2xl shadow-lg autopool">
            <div className="font-bold w-2/3">
              <p className="text-sm">
                {" "}
                Direct Team({data.directTeam}/{manager.directTeam})
              </p>
              <p className="w-full bg-gray-400 h-1 mt-1 rounded-xl">
                {" "}
                <p
                  style={{
                    width: `${calPer(data.directTeam, manager.directTeam)}%`,
                  }}
                  className={`max-w-full w-[${calPer(
                    data.directTeam,
                    manager.directTeam
                  )}%] bg-green-500 h-full rounded-xl`}
                >
                  {" "}
                </p>
              </p>
              <p className="text-sm mt-2">
                {" "}
                Direct Business($ {data.directBusiness}
                /${manager.directBusiness})
              </p>
              <p className="w-full bg-gray-400 h-1 mt-1 rounded-xl">
                {" "}
                <p
                  style={{
                    width: `${calPer(
                      data.directBusiness,
                      manager.directBusiness
                    )}%`,
                  }}
                  className={`max-w-full w-[${calPer(
                    data.directBusiness,
                    manager.directBusiness
                  )}%] bg-green-500 h-full rounded-xl`}
                >
                  {" "}
                </p>
              </p>
            </div>{" "}
            <img src={JRMR} className="h-28" />
          </div>
          {rankRequired.map((e, i) => {
            return (
              <div
                id={i}
                className="bg-white mt-4 w-full mt-6 w-full flex justify-between items-center bg-[#8080821a] px-4 py-2 rounded-2xl shadow-lg autopool"
              >
                <div className="font-bold w-2/3">
                  <p className="text-sm">
                    {" "}
                    Direct Managers({data.directManagers}/{e.directManagers})
                  </p>
                  <p className="w-full bg-gray-400 h-1 mt-1 rounded-xl">
                    {" "}
                    <p
                      style={{
                        width: `${calPer(
                          data.directManagers,
                          e.directManagers
                        )}%`,
                      }}
                      className={`max-w-full w-[${calPer(
                        data.directManagers,
                        e.directManagers
                      )}%] bg-green-500 h-full rounded-xl`}
                    >
                      {" "}
                    </p>
                  </p>
                  <p className="text-sm mt-2">
                    {" "}
                    Total Team({data.totalTeam}/{e.totalTeam})
                  </p>
                  <p className="w-full bg-gray-400 h-1 mt-1 rounded-xl">
                    {" "}
                    <p
                      style={{
                        width: `${calPer(data.totalTeam, e.totalTeam)}%`,
                      }}
                      className={`max-w-full w-[${calPer(
                        data.totalTeam,
                        e.totalTeam
                      )}%] bg-green-500 h-full rounded-xl`}
                    >
                      {" "}
                    </p>
                  </p>
                </div>{" "}
                <img src={imagesArray[i]} className="h-28" />
              </div>
            );
          })}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Teams;