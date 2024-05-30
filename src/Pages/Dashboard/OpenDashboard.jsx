import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardIntro from "../../Components/DashboardIntro";
import DashboardTable from "./DashboardTable";
import DashboardInner from "./DashboardInner";

const OpenDashboard = () => {
  return (
    <>
      
      <DashboardInner />
      <DashboardTable />
    </>
  );
};

export default OpenDashboard;
