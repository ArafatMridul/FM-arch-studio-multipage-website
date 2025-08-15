import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import mobParamour from "/assets/home/mobile/image-hero-paramour.jpg";
import tabParamour from "/assets/home/tablet/image-hero-paramour.jpg";
import dekParamour from "/assets/home/desktop/image-hero-paramour.jpg";
import dekParamour2 from "/assets/home/desktop/image-hero-seraph.jpg";
import dekParamour3 from "/assets/home/desktop/image-hero-federal.jpg";
import dekParamour4 from "/assets/home/desktop/image-hero-trinity.jpg";
import Button from "../Button";

const deskBgInfo = [
    {
        img: dekParamour,
        heading: "project paramour",
        description:
            "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    },
    {
        img: dekParamour2,
        heading: "Seraph Station",
        description:
            "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    },
    {
        img: dekParamour3,
        heading: "Federal II Tower",
        description:
            "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    },
    {
        img: dekParamour4,
        heading: "Trinity Bank Tower",
        description:
            "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    },
];

const Hero = () => {
    const [selected, setSelected] = useState(0);
    const info = deskBgInfo[selected];
    return (
        <section>
            <div className="wrapper">
                <div className="relative">
                    <picture>
                        <source media="(min-width: 64rem)" srcSet={info.img} />
                        <source
                            media="(min-width: 40rem)"
                            srcSet={tabParamour}
                        />
                        <img
                            src={mobParamour}
                            alt=""
                            className="h-full w-full"
                        />
                    </picture>
                    <div className="absolute hidden sm:flex items-center gap-12 rotate-90 -top-10 sm:-left-48 lg:-left-58 z-50">
                        <div className="w-30 h-0.5 bg-g-2" />
                        <div>
                            <p className="uppercase text-g-2 text-[1.2rem] tracking-[18px]">
                                home
                            </p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-b/60 to-transparent" />
                    <div className="hidden absolute bottom-0 -left-19 lg:flex items-center justify-center">
                        {[...Array(4)].map((_, index) => (
                            <div
                                key={index + 1}
                                onClick={() => setSelected(index)}
                                className={twMerge(
                                    "px-7.25 py-6 bg-white cursor-pointer transition-all duration-500 hover:bg-g-1 hover:text-b",
                                    selected === index &&
                                        "bg-b text-g-1 hover:pointer-events-none"
                                )}
                            >
                                <p
                                    className={twMerge(
                                        "text-g-4 text-[1.3rem] transition-all duration-500",
                                        selected === index && "text-g-1"
                                    )}
                                >
                                    0{index + 1}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-28 left-8 sm:top-47 sm:left-14 lg:left-48">
                        <h1 className="text-[4rem] sm:text-[5.5rem] font-bold text-white leading-[0.78] tracking-tight sm:tracking-wide sm:leading-[0.85] capitalize lg:w-[544px]">
                            {info.heading}
                        </h1>
                        <p className="text-white text-[1.1rem] sm:text-[1.12rem] lg:text-[1.2rem] leading-[1.4] mt-2 sm:mt-3 sm:pr-16 lg:w-[544px] lg:pr-18">
                            {info.description}
                        </p>
                        <div className="mt-21 sm:mt-10">
                            <Button
                                className="flex items-center gap-8 pl-10 pr-7 py-5.5 group"
                                path="portfolio"
                            >
                                see our portfolio
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="20"
                                    className="group-hover:translate-x-2 transition-all duration-500"
                                >
                                    <g
                                        fill="none"
                                        fillRule="evenodd"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                    >
                                        <path d="M15 1l9 9-9 9M0 10h24" />
                                    </g>
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
