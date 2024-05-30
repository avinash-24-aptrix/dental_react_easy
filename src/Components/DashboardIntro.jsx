import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "../Components/Button";

const DashboardIntro = ({ className = "bg-white", pageName = "Dashboard" }) => {
  const displayRenderedComponent = () => {
    switch (pageName) {
      case "suppeliers":
        return (
          <div>
            {pageName} <Button className="bg-[#1956DA]">Add Supplier + </Button>
          </div>
        );
      // Add more cases as needed
      default:
        return <div className="capitalize">{pageName}</div>;
    }
  };
  return (
    <>
      <div
        className={twMerge(
          "flex items-center h-[74px] text-[20px] font-medium pl-[48px] capitalize",
          className
        )}
      >
        {displayRenderedComponent()}
      </div>
    </>
  );
};

export default DashboardIntro;
