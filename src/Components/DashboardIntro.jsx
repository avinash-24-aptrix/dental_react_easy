import React from "react";
import { twMerge } from "tailwind-merge";

const DashboardIntro = ({ className = "bg-white", pageName = "Dashboard" }) => {
  return (
    <div
      className={twMerge(
        "flex items-center h-[74px] text-[20px] font-medium bg-gray-300 pl-[48px]",
        className
      )}
    >
      <span className="capitalize">{pageName}</span>
    </div>
  );
};

export default DashboardIntro;
