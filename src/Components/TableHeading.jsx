import React from 'react'
import { twMerge } from 'tailwind-merge'

const TableHeading = ({ scope, className , children }) => {
    return (
        <>
            <th scope={scope} className={twMerge("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", className)}>
                {children}
            </th>
        </>
    )
}

export default TableHeading