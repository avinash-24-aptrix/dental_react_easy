import React from 'react'

// dashboard component rendering data dynamically
const DashboardBox = ({ name = "products", innerData = 0 }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">{name}</h2>
            <p>{innerData}</p>
        </div>
    )
}

export default DashboardBox