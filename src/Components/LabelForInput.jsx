import React, { Children } from 'react'

const LabelForInput = ({ htmlFor, className }) => {
    return (
        <label htmlFor={htmlFor} className="block font-medium text-sm text-gray-700">{Children}</label>
    )
}

export default LabelForInput