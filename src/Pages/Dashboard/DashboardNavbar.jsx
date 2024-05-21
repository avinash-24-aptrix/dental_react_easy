import React from 'react';
import DashboardNavigation from '../../Components/DashboardNavigation'
import Button from '../../Components/Button';

const DashboardNavbar = () => {
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="relative pt-6 pb-16 sm:pb-24">
                <nav
                    className="relative flex items-center justify-between sm:h-10 md:justify-center"
                    aria-label="Global"
                >
                    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="#">
                                <span className="sr-only">Company Name</span>
                                <img
                                    className="w-auto h-8 sm:h-10"
                                    src="https://www.svgrepo.com/show/448244/pack.svg"
                                    loading="lazy"
                                    width={202}
                                    height={40}
                                />
                            </a>
                            <div className="flex items-center -mr-2 md:hidden">
                                <button
                                    className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                                    type="button"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex md:space-x-10 list-none">
                        <DashboardNavigation path='dashboard'>Dashboard</DashboardNavigation>
                        <DashboardNavigation path='suppeliers'>Suppeliers</DashboardNavigation>
                        <DashboardNavigation path='department'>Department</DashboardNavigation>
                        <DashboardNavigation path='stocks'>Stocks</DashboardNavigation>
                        <DashboardNavigation path='transition'>Transition</DashboardNavigation>
                        <DashboardNavigation path='slips'>Slips</DashboardNavigation>
                        <DashboardNavigation path='invoices'>Invoices</DashboardNavigation>
                    </div>
                    <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                        <div className="">
                            <Button >Sign Out</Button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default DashboardNavbar