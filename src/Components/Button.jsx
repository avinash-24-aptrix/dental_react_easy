import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = (props) => {
    const buttonVariants = {
        primary: "blue-500",
        secondary: "green",
        third: "yellow"
    };

    // Check if variant exists in buttonVariants, default to 'primary' if not
    const variant = props.variant in buttonVariants ? props.variant : 'primary';

    const btnStyle = twMerge(
        `inline-flex items-center px-4 ml-4 py-2 bg-${buttonVariants[variant]}-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150`,
        props.className
    );

    return (
        <button type="submit" className={btnStyle}>
            {props.children}
        </button>
    );
};

export default Button;
