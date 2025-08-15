import dekdelsol from "/assets/portfolio/desktop/image-del-sol.jpg";
import tabdelsol from "/assets/portfolio/tablet/image-del-sol.jpg";
import mobdelsol from "/assets/portfolio/mobile/image-del-sol.jpg";

import dektower from "/assets/portfolio/desktop/image-228b.jpg";
import tabtower from "/assets/portfolio/tablet/image-228b.jpg";
import mobtower from "/assets/portfolio/mobile/image-228b.jpg";

import dekproto from "/assets/portfolio/desktop/image-prototype.jpg";
import tabproto from "/assets/portfolio/tablet/image-prototype.jpg";
import mobproto from "/assets/portfolio/mobile/image-prototype.jpg";
import FeatureItem from "./FeatureItem";
import Button from "../Button";

const Featured = () => {
    return (
        <section className="wrapper px-8 sm:px-0 pt-19 sm:pt-51 pb-33 sm:pb-48">
            <div className="flex items-center justify-between">
                <h2 className="text-[3rem] sm:text-[4.5rem] leading-[52px] tracking-[-1.71px] font-bold">
                    Featured
                </h2>
                <Button
                    className="sm:flex items-center gap-8 pl-10 pr-7 py-5.5 group justify-center hidden"
                    path="portfolio"
                >
                    See All
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="20"
                        className="group-hover:translate-x-2 transition-all duration-500"
                    >
                        <g
                            fill="none"
                            fill-rule="evenodd"
                            stroke="#ffffff"
                            stroke-width="2"
                        >
                            <path d="M15 1l9 9-9 9M0 10h24" />
                        </g>
                    </svg>
                </Button>
            </div>
            <div className="mt-11 sm:mt-21 lg:mt-16 grid lg:grid-cols-3 gap-6">
                <FeatureItem
                    mob={mobdelsol}
                    tab={tabdelsol}
                    dek={dekdelsol}
                    index={1}
                    name="Project Del Sol"
                />
                <FeatureItem
                    mob={mobtower}
                    tab={tabtower}
                    dek={dektower}
                    index={2}
                    name="228B Tower"
                />
                <FeatureItem
                    mob={mobproto}
                    tab={tabproto}
                    dek={dekproto}
                    index={3}
                    name="Le Prototype"
                />
                <Button
                    className="flex items-center gap-8 pl-10 pr-7 py-5.5 group justify-center w-full sm:hidden"
                    path="portfolio"
                >
                    See All
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="20"
                        className="group-hover:translate-x-2 transition-all duration-500"
                    >
                        <g
                            fill="none"
                            fill-rule="evenodd"
                            stroke="#ffffff"
                            stroke-width="2"
                        >
                            <path d="M15 1l9 9-9 9M0 10h24" />
                        </g>
                    </svg>
                </Button>
            </div>
        </section>
    );
};

export default Featured;
