import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const DashboardNavigation = ({ className, children, redirect = "dashboard" }) => {
    return (
        <>
            <Link to={`/${redirect}`}>
                <div className=" space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <span className={twMerge("inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none border-indigo-400 text-gray-900 focus:border-indigo-700", className)}>{children}</span>
                </div>
            </Link>
        </>
    )
}

export default DashboardNavigation