import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = (props) => {
    const buttonVariants = {
        primary: "bg-gray-700 ",
        delete: "bg-red-700",
        edit: "bg-blue-700",
        update: "bg-green-700",
        read: "bg-indigo-700",
        insert: "bg-teal-700"
    };


    const variant = props.variant in buttonVariants ? props.variant : 'primary';


    const btnStyle = twMerge(
        `inline-flex items-center px-4 ml-4 py-2 ${buttonVariants[variant]} border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:opacity-80 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150`,
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
