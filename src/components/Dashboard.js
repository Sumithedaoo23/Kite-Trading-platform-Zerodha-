import React from "react";
import { Route, Routes } from "react-router-dom";

import Orders from './Orders'; // ✅ default export
import Holdings from './Holdings'; // ✅ default export
import Positions from './Positions'; // ✅ default export
import Funds from './Funds'; // ✅ default export
import Apps from './Apps'; // ✅ default export
import WatchList from './WatchList'; // ✅ default export

import { GeneralContextProvider } from './GeneralContext'; // ✅ named export
import Summary from "./Summary";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
