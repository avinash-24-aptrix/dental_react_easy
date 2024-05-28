import React from "react";
import DashboardBox from "../../Components/DashboardBox";
import DashboardTable from "./DashboardTable";

const DashboardInner = () => {
  // represeting total number of dashboard boxes and their name and data
  const totalDashboardBox = [
    { name: "Products", innerData: 1099 },
    { name: "Department", innerData: 24 },
    { name: "Suppeliers", innerData: 23 },
    { name: "Invoices", innerData: 347 },
  ];
  return (
    <>
      <div className="py-4 bg-[#F3F4F6]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] px-[48px]">
          {/*  rendering the component with name and data */}
          {totalDashboardBox.map((e, index) => (
            <div key={index}>
              <DashboardBox name={e.name} innerData={e.innerData} />
            </div>
          ))}
        </div>
      </div>
      {/* <DashboardTable /> */}
    </>
  );
};

export default DashboardInner;
