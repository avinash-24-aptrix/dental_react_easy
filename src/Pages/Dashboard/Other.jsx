import React from 'react'

const Other = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                            </div>
                            {/* dashboard navigation */}
                            <div className='flex items-center '>
                                <DashboardNavigation >Dashboard</DashboardNavigation>
                                <DashboardNavigation redirect='suppliers' >Suppliers</DashboardNavigation>
                            </div>
                            {/* <div className=" space-x-8 sm:-my-px sm:ms-10 sm:flex">
                        <p className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none border-indigo-400 text-gray-900 focus:border-indigo-700">Suppeliers</p>
                    </div> */}
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <div className="relative">
                                    <div>
                                        <span className="inline-flex rounded-md">
                                            <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                                Avinash shiyani
                                                <svg className="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-me-2 flex items-center sm:hidden">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    <path className="hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <a href="http://127.0.0.1:8000/dashboard" className="w-full flex items-start ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 text-base font-medium focus:outline-none transition duration-150 ease-in-out">Dashboard</a>
                    </div>
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">Avinash shiyani</div>
                            <div className="font-medium text-sm text-gray-500">avinash@gmail.com</div>
                        </div>
                        <div className="mt-3 space-y-1">
                            <a href="http://127.0.0.1:8000/profile" className="w-full flex items-start ps-3 pe-4 py-2 border-l-4 border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 text-base font-medium focus:outline-none transition duration-150 ease-in-out">Profile</a>
                            <button className="w-full flex items-start ps-3 pe-4 py-2 border-l-4 border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 text-base font-medium focus:outline-none transition duration-150 ease-in-out">Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
                </div>
            </header>
            <main>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">You're logged in!</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Other

{/* <div className="px-4 mx-auto max-w-7xl sm:px-6">
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
            <li>
                <a
                    href="#"
                    className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                    target=""
                >
                    Pricing
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                    target=""
                >
                    Gallary
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                    target="_blank"
                >
                    Blog
                </a>
            </li>
        </div>
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <div className="inline-flex rounded-full shadow">
                <div
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 "
                >
                    Sign out
                </div>
            </div>
        </div>
    </nav>
</div>
</div> */}