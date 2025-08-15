import dekSml from "/assets/home/desktop/image-small-team.jpg";
import tabSml from "/assets/home/tablet/image-small-team.jpg";
import mobSml from "/assets/home/mobile/image-small-team.jpg";
import Button from "../Button";

const Ideas = () => {
    return (
        <section className="relative wrapper">
            <div className="relative">
                <picture>
                    <source media="(min-width: 64rem)" srcset={dekSml} />
                    <source media="(min-width: 40rem)" srcset={tabSml} />
                    <img src={mobSml} alt="" className="h-full" />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-b/70 to-transparent" />
            </div>
            <div className="absolute top-46 left-8 right-16 sm:top-43 sm:left-14 sm:right-20 lg:left-48 lg:right-140">
                <h2 className="text-[3rem] sm:text-[4.5rem] leading-[52px] sm:leading-[60px] tracking-[-1.71px] font-bold text-g-1">
                    Small team, big ideas
                </h2>
                <div className="mt-5 sm:mt-7">
                    <Button
                        className="flex items-center gap-8 pl-10 pr-7 py-5.5 group"
                        path="about"
                    >
                        About Us
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
            </div>
        </section>
    );
};

export default Ideas;
