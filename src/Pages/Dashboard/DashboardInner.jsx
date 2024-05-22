import React from 'react';
import DashboardBox from './DashboardBox';

const DashboardInner = () => {

    // represeting total number of dashboard boxes and their name and data
    const totalDashboardBox = [
        { name: 'Products', innerData: 1099 },
        { name: 'Department', innerData: 24 },
        { name: 'Suppeliers', innerData: 23 },
        { name: 'Invoices', innerData: 3447 },
    ]
    return (
        <div className="p-4 -mt-16 min-h-screen bg-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/*  rendering the component with name and data */}
                {totalDashboardBox.map((e) => (
                    <DashboardBox name={e.name} innerData={e.innerData} />
                ))}

            </div>
        </div>

    )
}

export default DashboardInner