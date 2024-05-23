import React from 'react'
import { twMerge } from 'tailwind-merge'

const TableDataCell = ({ className, children }) => {
    return (
        <>
            <td className={twMerge("px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", className)}>{children}</td>
        </>
    )
}

export default TableDataCell