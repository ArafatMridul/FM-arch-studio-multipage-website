import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Button = ({ children, path, className }) => {
    return (
        <Link
            to={`/${path}`}
            className={twMerge(
                "text-[1.1rem] w-fit capitalize text-g-1 bg-b transition-all duration-500 hover:bg-g-4",
                className
            )}
        >
            {children}
        </Link>
    );
};

export default Button;
