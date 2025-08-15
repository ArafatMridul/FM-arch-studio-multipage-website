import { Link } from "react-router-dom";
import icon from "/assets/icons/icon-arrow.svg";

const Mail = ({ heading, mail, address, phone }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-1">
            <div className="pb-10 lg:pb-16">
                <h3 className="text-g-4 text-[1.125rem] leading-[35px] mb-3">
                    {heading}
                </h3>
                <p className="text-[1.125rem] leading-[24px] text-g-3">
                    Mail : {mail}
                </p>
                <p className="text-[1.125rem] leading-[24px] text-g-3">
                    Address : {address}
                </p>
                <p className="text-[1.125rem] leading-[24px] text-g-3">
                    Phone : {phone}
                </p>
            </div>
            <Link className="flex items-center gap-6 text-[1.125rem] leading-[24px] text-b font-bold cursor-pointer group pl-1.5 lg:pl-4 sm:ml-auto lg:ml-0">
                <p className="relative after:absolute after:left-0 after:bottom-1 after:h-[2px] after:bg-g-2 after:w-0 after:transition-all after:duration-500 hover:after:w-full">
                    View on Map
                </p>
                <img
                    src={icon}
                    alt=""
                    className="group-hover:translate-x-1  transition-all duration-500"
                />
            </Link>
        </div>
    );
};

export default Mail;
