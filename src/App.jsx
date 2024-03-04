import { React, createContext, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Teams from "./Components/Teams";
import DownlineUsers from "./Components/DownlineUsers";
import DepositHistory from "./Components/DepositHistory"
import Wallet from "./Components/wallet"
import Swap from "./Components/Swap";
import "./App.css";

const Appstate = createContext();

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Appstate.Provider value={{ showSidebar, toggleSidebar }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />{" "}
          <Route path="/register" element={<Register />} />{" "}
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          <Route path="/teams" element={<Teams />} />{" "}
          <Route path="/downlineusers" element={<DownlineUsers />} />{" "}
          <Route path="/deposithistory" element={<DepositHistory />} />{" "}
          <Route path="/wallet" element={<Wallet />} />{" "}
          <Route path="/swap" element={<Swap />} />{" "}
        </Routes>
      </BrowserRouter>
    </Appstate.Provider>
  );
};

export default App;
export { Appstate }; 