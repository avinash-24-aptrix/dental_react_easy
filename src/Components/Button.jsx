import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = (props) => {
    const buttonVariants = {
        primary: "bg-gray-700 focus:bg-gray-700  active:bg-gray-900",
        delete: "bg-red-700 focus:bg-red-700  active:bg-red-900",
        edit: "bg-blue-700",
        update: "bg-green-700",
        read: "bg-indigo-700",
        insert: "bg-teal-700"
    };


    const variant = props.role in buttonVariants ? props.role : 'primary';


    const btnStyle = twMerge(
        `inline-flex items-center px-4 ml-4 py-2`,
        ` ${buttonVariants[variant]}`,
        `font-semibold text-xs text-white uppercase tracking-widest`,
        ` hover:opacity-80 transition ease-in-out duration-150`,
        `focus:ring-indigo-500   focus:ring-offset-2 focus:ring-2 focus:outline-none`,
        `border border-transparent rounded-md`,
        props.className
    );

    return (
        <>
            <button type="submit" className={btnStyle}>
                {props.children}
            </button>
        </>
    );
};

export default Button;
