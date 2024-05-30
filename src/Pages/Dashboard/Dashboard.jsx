import React from "react";
import { useParams } from "react-router-dom";
import Suppelier from "../Suppelier/Suppelier";
import DashboardInner from "./DashboardInner";
import DashboardNavbar from "./DashboardNavbar";
import DashboardIntro from "../../Components/DashboardIntro";
import DashboardTable from '../Dashboard/DashboardTable';

const Dashboard = () => {
  //using useparams hook to get data from URL
  const params = useParams();
  const openParameter = params.params;
  return (
    <div>
      <DashboardNavbar />
      <DashboardIntro pageName={openParameter} />
      <DashboardInner />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
