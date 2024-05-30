import React from "react";
import { useParams } from "react-router-dom";
import Suppelier from "../Suppelier/Suppelier";
import DashboardNavbar from "./DashboardNavbar";
import DashboardIntro from "../../Components/DashboardIntro";
import OpenDashboard from "./OpenDashboard";

const Dashboard = () => {
  //using useparams hook to get data from URL
  const params = useParams();
  const openParameter = params.params;

  const viewPagefromUrl = {
    dashboard: <OpenDashboard />,
    suppeliers: <Suppelier />,
    default: "no bro no",
  };

  const openPage = viewPagefromUrl
    ? viewPagefromUrl[openParameter]
    : viewPagefromUrl.default;
  console.log(openPage);
  return (
    <div>
      <DashboardNavbar />
      <DashboardIntro pageName={openParameter} />
      {openPage}
    </div>
  );
};

export default Dashboard;
