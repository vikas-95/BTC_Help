import React, { useContext, useEffect, useState } from "react";
import { Drawer } from "antd";
import { Appstate } from "../App";
import { useTimer } from "react-timer-hook";
import { message } from 'antd';
import moment from "moment";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours } = useTimer({ expiryTimestamp });

  return (
    <p>
      <span>{hours.toString().padStart(2, '0')}</span>:
      <span>{minutes.toString().padStart(2, '0')}</span>:
      <span>{seconds.toString().padStart(2, '0')}</span>
    </p>
  );
}

const Requests = () => {
  const useAppState = useContext(Appstate);
  const [req, setReq] = useState([{
    isAuto: false,
    sno: 0,
    donar: "",
    receiver: "",
    amount: 0,
    start: 0,
    isCompleted: false,
    depositIndex: 0,
    globalIndex: 0,
    endTime: 0,
    amtPaid: false,
  }]);

 /*  useEffect(() => {
    async function getData() {
      setReq([]);
      useAppState.setReq([]);
      let len = await useAppState.contract.getDepositLength(useAppState.walletAddress);
      
      if (Number(len) > 0) {
        for (let i = Number(len) - 1; i >= 0; i--) {
          let order = await useAppState.contract.isAutoPaymentsAvl(useAppState.walletAddress, i);
          
          if (order[0]) {
            if (order[1].isCompleted && moment().valueOf() > Number(order[1].endTime) * 1000) {
              setReq((prev) => [...prev, {
                isAuto: true,
                sno: i,
                donar: order[1].donar,
                receiver: order[1].receiver,
                amount: useAppState.convert(order[1].amount),
                start: Number(order[1].start) * 1000,
                isCompleted: order[1].isCompleted,
                depositIndex: Number(order[1].depositIndex),
                globalIndex: Number(order[1].globalIndex),
                endTime: Number(order[1].endTime) * 1000,
                amtPaid: order.amtPaid,
              }]);
            }

            if (!order[1].isCompleted) {
              useAppState.setReq((prev) => [...prev, {
                isAuto: true,
                sno: i,
                donar: order[1].donar,
                receiver: order[1].receiver,
                amount: useAppState.convert(order[1].amount),
                start: Number(order[1].start) * 1000,
                isCompleted: order[1].isCompleted,
                depositIndex: Number(order[1].depositIndex),
                globalIndex: Number(order[1].globalIndex),
                endTime: Number(order[1].endTime) * 1000,
                amtPaid: order.amtPaid,
              }]);
            }
          }
        }
      }

      let reqLength = await useAppState.contract.getRequestsLength(useAppState.walletAddress);
      if (Number(reqLength) > 0) {
        for (let i = Number(reqLength - 1); i >= 0; i--) {
          let _index = await useAppState.contract.userRequests(useAppState.walletAddress, i);
          let request = await useAppState.contract.globalRequests(_index);
          
          if (request.isCompleted) {
            setReq((prev) => [...prev, {
              isAuto: false,
              sno: i,
              donar: request.donar,
              receiver: request.receiver,
              amount: useAppState.convert(request.amount),
              start: Number(request.start) * 1000,
              isCompleted: request.isCompleted,
              depositIndex: Number(request.depositIndex),
              globalIndex: Number(request.globalIndex),
              endTime: Number(request.endTime) * 1000,
              amtPaid: request.isAmtPaid,
            }]);
          }

          if (!request.isCompleted) {
            useAppState.setReq((prev) => [...prev, {
              isAuto: false,
              sno: i,
              donar: request.donar,
              receiver: request.receiver,
              amount: useAppState.convert(request.amount),
              start: Number(request.start) * 1000,
              isCompleted: request.isCompleted,
              depositIndex: Number(request.depositIndex),
              globalIndex: Number(request.globalIndex),
              endTime: Number(request.endTime) * 1000,
              amtPaid: request.isAmtPaid,
            }]);
          }
        }
      }
    }
    getData();
  }, [useAppState.walletAddress, useAppState.change]); */

  return (
    <Drawer
      style={{
        background: "black",
        opacity: "85%",
        color: "white",
      }} 
      className="bg-gray-100"
      // onClose={() => useAppState.setOpen(false)}
      /* open={useAppState.open} */
      // closeIcon={false}
      /* width={useAppState.isPc ? 380 : 280} */
    >
      <p
        // onClick={() => useAppState.setOpen(false)}
        className="text-lg absolute top-4 right-4 cursor-pointer "
      >
        ❌
      </p>
      <p className="text-lg absolute top-4 left-4 font-mono font-semibold text-blue-500">
        GH / PH History
      </p>
      <div className="mt-4">
        {/* {req.map((e, i) => ( */}
          <div /* key={i} */ className='mt-4 rounded-lg p-2 border-lime-500 border-2 font-mono border-opacity-60 bg-[#8080821a]'>
            <p className='text-center font-medium'>
             {/*  {useAppState.walletAddress.toLowerCase() == e.donar.toLowerCase() ? ( */}
                <p className="text-cyan-500">Provide Help</p>
              {/* ) : ( */}
                <p className="text-pink-500">Get Help</p>
              {/* )} */}
            </p>
            <div className='p-2'>
              <p className='text-lime-500'>Amount: <span className='text-white'>${/* {e.amount} */}</span></p>
              <p className='text-lime-500'>Donar: <span className='text-white break-all'>{/* {e.donar} */}</span></p>
              <p className='text-lime-500'>Receiver: <span className='text-white break-all'>{/* {e.receiver} */}</span></p>
              <p className='text-lime-500'>Started: <span className='text-white'>{/* {new Date(e.start).toLocaleString()} */}</span></p>
              <p className='text-lime-500'>Status: <span className='text-white'>
                {/* {e.amtPaid ? "Success" : (moment().valueOf() > e.endTime ? "Expired" : "Pending")} */}
              </span></p>
            </div>
          </div>
        {/* ))} */}
      </div>
    </Drawer>
  );
};

export default Requests;