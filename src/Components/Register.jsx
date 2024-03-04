import React, { useState, useEffect, useContext } from "react";
import {
  useSearchParams,
  useLocation,
  Link,
  useNavigate,
} from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { TailSpin } from "react-loader-spinner";
import { Appstate } from "../App";
import { message } from "antd";
import RegisterLogo from '../Images/registerlogo.png'

const Register = () => {
//   const useAppState = useContext(Appstate);
//   const { ethereum } = window;
//   const router = useLocation();
//   const Navigate = useNavigate();
//   const [referrer, setReferrer] = useState("");
  const [address, setAddress] = useState("");
//   const [searchParams] = useSearchParams();
//   const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setAddress(accounts[0]);
  };

//   useEffect(() => {
//     async function getData() {
//       let _user = await useAppState.contract.userInfo(address);
//       if (Number(_user.start) > 0) {
//         Navigate("/dashboard");
//         message.success("Signed up");
//       }
//     }
//     getData();
//   }, [address]);

//   useEffect(() => {
//     let ref = searchParams.get("ref");
//     if (ref !== null) {
//       setReferrer(ref);
//     } else {
//       setReferrer(useAppState.defaultRefer);
//     }
//     connectWallet();
//   }, [router]);

//   const register = async () => {
//     setLoading(true);
//     try {
//       let tx = await useAppState.contract.register(referrer);
//       await tx.wait();
//       message.success("Sucessfully Registered");
//       Navigate("/dashboard");
//     } catch (error) {
//       message.error(error.reason);
//     }
//     setLoading(false);
//   };

  return (
    <div className="text-center p-4 w-full register">
      <img
        src="https://wallpapercave.com/dwp2x/wp9295928.png"
        className="fixed w-full h-screen hidden md:block left-0 md:top-0 -z-10 top-0 opacity-70"
      />
      <img
        src="/mobregister.png"
        className="fixed block md:hidden left-0 md:top-0 -z-10 top-0 opacity-70"
      />
      <p className="text-gradient text-4xl font-bold">Register </p>{" "}
      <div className="w-full flex md:flex-row flex-col items-center justify-center">
        <div className="bg-gray-700 mt-12 h-[340px] flex flex-col items-center mr-0 md:mr-8 w-full md:w-1/3 rounded-lg bg-opacity-25 p-4">
          <img src={RegisterLogo} className="h-28" />
          <p
            className="bg-gray-300 flex items-center py-3 px-4 bg-opacity-70 mt-4 rounded-full"
            // onClick={connectWallet}
          >
            <AdminPanelSettingsIcon fontSize="medium" color="success" />{" "}
            {address === ""
              ? "Connect Wallet"
              : address.slice(0, 6) + "..." + address.slice(38)}{" "}
          </p>{" "}
          <p className="break-all mt-4 font-medium">
            {" "}
            Referrer: <span className="text-gray-300"> {/* {referrer} */} </span>
          </p>
          <button
            // onClick={register}
            className="button-82-pushable w-full mt-4 bg-lime-500 p-3 font-bold rounded-xl"
          >
            {" "}
           {/*  {loading ? ( */}
              <p className="flex justify-center">
                {" "}
                <TailSpin color="white" height={22} />
              </p>
            {/* ) : ( */}
              Register
            {/* )}{" "} */}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Register;
