import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';


const TextInput = forwardRef((props, ref) => {
    const { id, inputname, type, className } = props;
    return (
        <>
            <input ref={ref} id={id} name={inputname} type={type} className={twMerge(" border-[1px] border-gray-300 focus:border-red-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block p-2 w-full", className)} />
        </>
    );
});

export default TextInput; 