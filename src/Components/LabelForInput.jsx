import React from 'react'
import { twMerge } from 'tailwind-merge'

const LabelForInput = ({ className, children }) => {
    return (
        <label className={twMerge("block font-medium text-sm text-gray-700", className)}>
            {children}
        </label>
    )
}

export default LabelForInput