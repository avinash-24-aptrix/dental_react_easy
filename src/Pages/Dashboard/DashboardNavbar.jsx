import React from "react";
import { Link, useParams } from "react-router-dom";
// import DashboardNavigation from "../../Components/DashboardNavigation";
// import Button from "../../Components/Button";
import ApplicationLogo from "../../Components/ApplicationLogo";
import { twMerge } from "tailwind-merge";

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

  // conditional border bottom
  const params = useParams();
  const stringedParams = params.params;
  console.log(stringedParams);

  // if(stringedParams == inde)

  return (
    <div className="grid">
      <div className="flex ">
        {/* navbar */}
        <nav className="flex  items-center h-[74px] border-2  w-full">
          {/* application logo */}
          <div className="flex justify-center items-center">
            <ApplicationLogo className="text-[#1F2937] h-[36px] w-[36px] ml-[48px]" />
          </div>
          {/* navbar links */}
          <div className="flex h-full pl-[62px]  space-x-[62px]">
            {navigationItems.map((data) => (
              <>
                <div className="h-full flex justify-center items-center ">
                  <Link
                    key={data.path}
                    className={twMerge(
                      "flex items-center  h-full",
                      stringedParams == data.path
                        ? "border-b-2 border-[#5E68C9]"
                        : ""
                    )}
                    to={`/${data.path}`}
                  >
                    {data.label}
                  </Link>
                </div>
              </>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNavbar;
