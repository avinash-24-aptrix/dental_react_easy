import React, { useState } from "react";
import TableHeading from "../../Components/TableHeading";
import { FaRegEye } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import DeleteConfirmation from "../../Components/DeleteConfirmation";

const DashboardTable = () => {
  const data = [
    {
      id: 1000,
      company: "Tech Jungle",
      dueDate: "14 Sep 2022",
      status: "unpaid",
      amount: 973,
    },
    {
      id: 1002,
      company: "Tech Jungle",
      dueDate: "14 Sep 2022",
      status: "paid",
      amount: 973,
    },
    {
      id: 1003,
      company: "Tech Jungle",
      dueDate: "14 Sep 2022",
      status: "unpaid",
      amount: 973,
    },
    {
      id: 1004,
      company: "Tech Jungle",
      dueDate: "14 Sep 2022",
      status: "unpaid",
      amount: 973,
    },
    // Add more rows as needed
  ];

  // table head data dynamically
  const tableHeadingData = [
    "Invoice",
    "Company",
    "Due Date",
    "Status",
    "Amount",
    "Action",
  ];

  const [deleteToogle, setDeleteToogle] = useState("");

  const finallyDelete = () => {
    setDeleteToogle(true);
  };
  return (
    <div className="px-[48px] bg-[#F3F4F6]">
      <div className="container  ">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md ">
                <table className="min-w-full divide-y divide-gray-200 rounded-md">
                  <thead>
                    <tr>
                      {tableHeadingData.map((e, index) => (
                        <TableHeading
                          className="bg-[#E8EBF0] rounded-md"
                          key={index}
                        >
                          {e}
                        </TableHeading>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 rounded-md">
                    {data.map((item) => (
                      <tr
                        key={item.id}
                        className={twMerge(
                          "text-gray-800",
                          item.id === item.id && "hover:bg-gray-100"
                        )}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center">
                          <span className="pr-2">
                            <input type="checkbox" />
                          </span>
                          {item.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm  font-bold">
                          {item.company}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                          {item.dueDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                          <span
                            className={twMerge(
                              " rounded-[40px] px-4 py-1.5 text-[12px] text-gray-800",
                              item.status === "paid"
                                ? "bg-green-100"
                                : "bg-red-100"
                            )}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm   ">
                          $ {item.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm   ">
                          <span className="flex space-x-6 opacity-90">
                            <FaRegEye className="text-black h-[20px] w-[20px]" />
                            <FaEdit className="text-[#5E68C9] h-[20px] w-[20px]" />
                            <RiDeleteBin6Line
                              toggle={deleteToogle}
                              onClick={finallyDelete}
                              className="text-red-600 h-[20px] w-[20px]"
                            />
                            {deleteToogle && (
                              <DeleteConfirmation deletePop={setDeleteToogle} />
                            )}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
