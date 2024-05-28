import React from "react";
import { Link } from "react-router-dom";
// import DashboardNavigation from "../../Components/DashboardNavigation";
// import Button from "../../Components/Button";
import ApplicationLogo from "../../Components/ApplicationLogo";

const DashboardNavbar = () => {
  // sending data in array
  const navigationItems = [
    { path: "dashboard", label: "Dashboard" },
    { path: "suppeliers", label: "Suppliers" },
    { path: "product", label: "Product" },
    { path: "invoices", label: "Invoices" },
    // { path: "stocks", label: "Stocks" },
    // { path: "transition", label: "Transition" },
    // { path: "slips", label: "Slips" },
  ];

  return (
    <div className="grid">
      <div className="flex ">
        {/* navbar */}
        <nav className="flex  items-center h-[74px]  w-full">
          {/* application logo */}
          <div className="flex justify-center items-center">
            <ApplicationLogo className="text-[#1F2937] h-[36px] w-[36px] ml-[48px]" />
          </div>
          {/* navbar links */}
          <div className="flex h-full pl-[62px] space-x-[62px]">
            {navigationItems.map((data, index) => (
              <div
                key={index}
                className="h-full flex justify-center items-center "
              >
                <Link
                  className="flex items-center border-b-2 border-[#5E68C9] h-full "
                  to={`/${data.path}`}
                >
                  {data.label}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNavbar;
