import React from "react";
import DashDataImg from "../assets/dash_frame.png";

// dashboard component rendering data dynamically
const DashboardBox = ({ name = "products", innerData = 0 }) => {
  return (
    <div className="bg-white h-[84px] rounded-lg shadow-md flex justify-between items-center ">
      <div className="flex justify-between items-center  w-full px-2">
        <div className="grid items-center">
          <div className="h-[20px] text-[12px] text-[#66696D] uppercase tracking-[1px] font-semibold">
            <p>{name}</p>
          </div>

          <div className="flex items-center justify-between space-x-1.5 h-[32px]">
            <span className="text-[16px] ">{innerData}</span>
            <span className="text-center flex justify-center items-center rounded-[4px] text-[10px] bg-[#ABF2CC] w-[50px] h-[20px]">
              +10.99%
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img src={DashDataImg} />
        </div>
      </div>
    </div>
  );
};

export default DashboardBox;
