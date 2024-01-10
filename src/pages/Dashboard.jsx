import React from "react";
import { VerticalBarChart } from "../components/BarChart";
import Sidebar from "../components/Sidebar";
import { PieChart } from "../components/PieChart";
import { Table } from "../components/Table";
import ProgressBar from "../components/ProgressBar";
import { AllProgresData } from "./AllProgresData";

export const Dashboard = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>

        <div style={{ flex: 1, padding: "20px" }}>
          <div style={{width:"95%",margin:'auto'}}>
            <AllProgresData />
          </div>
          <div style={{ marginTop: "2%" }}>
            <VerticalBarChart />
          </div>
        </div>
      </div>
    </>
  );
};
