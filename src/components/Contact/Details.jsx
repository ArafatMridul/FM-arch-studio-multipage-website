import React from "react";
import Mail from "./Mail";
import Reveal from "../Reveal";

const Details = () => {
    return (
        <Reveal>
            <section className="pb-20 sm:pb-36 lg:pb-50">
                <div className="wrapper relative px-8 sm:px-0 pt-22 sm:pt-16 lg:pt-20 lg:grid lg:grid-cols-3">
                    <div className="">
                        <h2 className="text-[3rem] sm:text-[4.5rem] leading-[40px] sm:leading-[64px] sm:tracking-[-2px] text-b font-bold">
                            Contact <br /> Details
                        </h2>
                    </div>
                    <div className="absolute h-[1px] w-[65px] bg-g-4 top-0 sm:top-2 lg:top-2 z-30" />
                    <div className="grid gap-12 lg:grid-cols-[350px_350px] lg:gap-8 pt-12 sm:pt-9 lg:pt-0">
                        <Mail
                            heading="Main Office"
                            mail="archone@mail.com"
                            address="1892 Chenoweth Drive TN"
                            phone="123-456-3451"
                        />
                        <Mail
                            heading="Office II"
                            mail="archtwo@mail.com"
                            address="3399 Wines Lane TX"
                            phone="832-123-4321"
                        />
                    </div>
                </div>
            </section>
        </Reveal>
    );
};

export default Details;
