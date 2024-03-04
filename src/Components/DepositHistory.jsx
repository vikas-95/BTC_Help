import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Appstate } from "../App";
import { message } from "antd";
import { ThreeDots } from "react-loader-spinner";
import Requests from "./Requests";

const DepositHistory = () => {
  const useAppState = useContext(Appstate);
  const { showSidebar } = useContext(Appstate);
  const [orders, setOrders] = useState([
    {
      sno: 0,
      amount: 0,
      reward: 0,
      start: 0,
      end: 0,
      claimed: false,
      isPayable: false,
      payableAmt: 0,
      wasInactive: false,
      isBlocked: false,
      isUnFreezed: false,
      curROI: 0,
    },
  ]);
  const [loading, setLoading] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     setOrders([]);
  //     setLoading([]);
  //     let len = await useAppState.contract.getDepositLength(
  //       useAppState.walletAddress
  //     );
  //     if (Number(len) > 0) {
  //       for (let i = Number(len) - 1; i >= 0; i--) {
  //         let order = await useAppState.contract.depositHistory(
  //           useAppState.walletAddress,
  //           i
  //         );
  //         let _curROI = await useAppState.contract.getCurROI(
  //           useAppState.walletAddress,
  //           i
  //         );
  //         let _isBlocked = await useAppState.contract.isOrderBlocked(
  //           useAppState.walletAddress,
  //           i
  //         );
  //         setOrders((prev) => [
  //           ...prev,
  //           {
  //             sno: i + 1,
  //             amount: useAppState.convert(order.amount),
  //             reward: useAppState.convert(order.reward),
  //             start: Number(order.start) * 1000,
  //             end: Number(order.end) * 1000,
  //             claimed: order.isClaimed,
  //             isPayable: false,
  //             payableAmt:
  //               Number(useAppState.convert(order.toPay)) -
  //               Number(useAppState.convert(order.amtPaid)),
  //             wasInactive: order.wasInactive,
  //             isBlocked: _isBlocked,
  //             isUnFreezed: order.isUnFreezed,
  //             curROI: useAppState.convert(_curROI),
  //           },
  //         ]);
  //         setLoading((prev) => [...prev, false]);
  //       }
  //     }
  //   }
  //   getData();
  // }, [useAppState.walletAddress, useAppState.change]);

  const claimReward = async (_order, _index) => {
    let _load = [...loading];
    _load[_index] = true;
    setLoading(_load);
    try {
      let tx = await useAppState.contract.claimReward(_order - 1);
      await tx.wait();

      let _orders = [...orders];
      let order = await useAppState.contract.depositHistory(
        useAppState.walletAddress,
        _order - 1
      );
      let _curROI = await useAppState.contract.getCurROI(
        useAppState.walletAddress,
        _order - 1
      );
      let _isBlocked = await useAppState.contract.isOrderBlocked(
        useAppState.walletAddress,
        _order - 1
      );
      _orders[_index] = {
        sno: _orders[_index].sno,
        amount: useAppState.convert(order.amount),
        reward: useAppState.convert(order.reward),
        start: Number(order.start) * 1000,
        end: Number(order.end) * 1000,
        claimed: order.isClaimed,
        isPayable: false,
        payableAmt:
          Number(useAppState.convert(order.toPay)) -
          Number(useAppState.convert(order.amtPaid)),
        wasInactive: order.wasInactive,
        isBlocked: _isBlocked,
        isUnFreezed: order.isUnFreezed,
        curROI: useAppState.convert(_curROI),
      };
      setOrders(_orders);

      message.success("Sucessfully Claimed");
    } catch (error) {
      message.error(error.reason);
    }
    let _load2 = [...loading];
    _load2[_index] = false;
    setLoading(_load2);
  };

  return (
    <div className="flex h-screen">
      {showSidebar && <Sidebar />}
      <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-900 flex justify-center p-4 w-full">
        <div className="w-full">
          {" "}
          {/* <Requests /> */} <Header />
          <p className="mt-6 font-bold text-lg text-lime-300">
            {" "}
            Order <span className="text-white"> History </span>
          </p>
          <div id="last-users" className="mt-4">
            <div class="overflow-x-scroll">
              <table class="rounded-lg bg-white w-full whitespace-nowrap">
                <thead class="border-b border-black">
                  <th class="text-left py-3 px-2 rounded-l-lg"> SNo. </th>{" "}
                  <th class="text-left py-3 px-2"> Amount </th>{" "}
                  <th class="text-left py-3 px-2"> Freezing </th>{" "}
                  <th class="text-left py-3 px-2"> Payable </th>{" "}
                  <th class="text-left py-3 px-2"> Start </th>{" "}
                  <th class="text-left py-3 px-2"> Reward </th>{" "}
                  <th class="text-left py-3 px-2"> Status </th>{" "}
                  <th class="text-left py-3 px-2"> End </th>{" "}
                </thead>{" "}
                {orders.map((e, i) => {
                  return (
                    <tr key={i} class="border-b border-gray-700">
                      <td class="py-3 px-2 font-bold">
                        <div class="inline-flex space-x-3 items-center">
                          <div
                            className={`rounded-full bg-white flex justify-center items-center h-10 w-10 font-semibold`}
                          >
                            {" "}
                            {e.sno}{" "}
                          </div>{" "}
                        </div>{" "}
                      </td>{" "}
                      <td class="py-3 px-2"> $ {e.amount} </td>{" "}
                      <td class="py-3 px-2">
                        {" "}
                        {e.isBlocked ? (
                          <p className="text-red-700"> Blocked </p>
                        ) : !e.isUnFreezed ? (
                          <p className="text-blue-700">Freezed</p>
                        ) : (
                          <p className="text-lime-700"> Unfreezed </p>
                        )}
                      </td>
                      <td class="py-3 px-2 cursor-pointer">
                        {" "}
                        $ {e.payableAmt}{" "}
                      </td>{" "}
                      <td class="py-3 px-2">
                        {" "}
                        {new Date(e.start).toLocaleString()}{" "}
                      </td>{" "}
                      <td class="py-3 px-2">
                        {" "}
                        {e.claimed ? (
                          <p> $ {e.reward} </p>
                        ) : (
                          <p>${e.curROI}</p>
                        )}{" "}
                      </td>{" "}
                      <td class="py-3 px-2">
                        {" "}
                        {e.isBlocked ? (
                          <p className="text-red-700"> Blocked </p>
                        ) : e.wasInactive ? (
                          <p className="text-orange-700">InActive</p>
                        ) : (
                          <p className="text-lime-700"> Active </p>
                        )}
                      </td>
                      <td class="py-3 px-2">
                        {" "}
                        {e.end > 0 ? (
                          new Date(e.end).toLocaleString()
                        ) : loading[i] ? (
                          <ThreeDots color="white" height={8} />
                        ) : (
                          <p
                            onClick={() => claimReward(e.sno, i)}
                            className="text-black cursor-pointer"
                          >
                            Claim
                          </p>
                        )}{" "}
                      </td>{" "}
                    </tr>
                  );
                })}{" "}
              </table>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default DepositHistory;
