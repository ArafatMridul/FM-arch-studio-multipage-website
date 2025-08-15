import React from "react";
import Leader from "./Leader";
import l1 from "/assets/about/desktop/avatar-jake.jpg";
import l2 from "/assets/about/desktop/avatar-thompson.jpg";
import l3 from "/assets/about/desktop/avatar-jackson.jpg";
import l4 from "/assets/about/desktop/avatar-maria.jpg";

const leaders = [
    { img: l1, name: "Jake Richards", pos: "Chief Architect" },
    { img: l2, name: "Thompson Smith", pos: "Head of Finance" },
    { img: l3, name: "Jackson Rourke", pos: "Lead Designer" },
    { img: l4, name: "Maria Simpson", pos: "Senior Architect" },
];

const Leaders = () => {
    return (
        <section className="wrapper px-8 sm:px-0 pb-42 sm:pb-59 lg:pb-39 lg:grid lg:grid-cols-[auto_1fr] lg:gap-36">
            <div>
                <div>
                    <h2 className="text-[3rem] sm:text-[4.5rem] leading-[52px] sm:leading-[64px] tracking-[-1.2px] sm:tracking-[-2px] font-bold text-b sm:mb-14 lg:mb-14">
                        The
                        <br /> Leaders
                    </h2>
                </div>
            </div>
            <div className="mt-12 lg:mt-0 grid sm:grid-cols-2 gap-20 sm:gap-2 sm:gap-y-24 lg:gap-8 lg:gap-y-16">
                {leaders.map(({ img, name, pos }, index) => (
                    <Leader key={index} img={img} name={name} pos={pos} />
                ))}
            </div>
        </section>
    );
};

export default Leaders;
