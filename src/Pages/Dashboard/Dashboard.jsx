import React from "react";
import { useParams } from "react-router-dom";
import Suppelier from "../Suppelier/Suppelier";
import DashboardInner from "./DashboardInner";
import DashboardNavbar from "./DashboardNavbar";
import DashboardIntro from "../../Components/DashboardIntro";

const Dashboard = () => {
  //using useparams hook to get data from URL
  const params = useParams();
  const openParameter = params.params;

  // if (openParameter == "suppeliers") {
  //   <Suppelier />;
  // }

  return (
    <div>
      <DashboardNavbar />
      <DashboardIntro pageName={openParameter} />
      <DashboardInner />
    </div>
  );
};

export default Dashboard;
