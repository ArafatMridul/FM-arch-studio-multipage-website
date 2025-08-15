import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const LinkItem = ({ children, className }) => {
    return (
        <NavLink
            to={children === "about us" ? "/about" : `/${children}`}
            className={twMerge(
                "capitalize text-[1.1rem] font-bold text-g-3 transition-all duration-500 hover:text-b relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-[2px] after:bg-b after:transition-all after:duration-500",
                className
            )}
        >
            {children}
        </NavLink>
    );
};

export default LinkItem;
