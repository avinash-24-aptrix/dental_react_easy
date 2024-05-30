import React from "react";
import { twMerge } from "tailwind-merge";
import { RiExpandUpDownFill } from "react-icons/ri";

const TableHeading = ({ scope, className, children }) => {
  return (
    <>
      <th
        scope={scope}
        className={twMerge(
          "px-6  text-left text-xs font-medium  text-gray-800 bg-[#D1D5DB] h-[40px] uppercase tracking-wider font-bold",
          className
        )}
      >
        <span className="flex items-center cursor-pointer">
          {children}
          <RiExpandUpDownFill className="" />
        </span>
      </th>
    </>
  );
};

export default TableHeading;
