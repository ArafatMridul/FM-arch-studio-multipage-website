import dek from "/assets/about/desktop/image-hero.jpg";
import tab from "/assets/about/tablet/image-hero.jpg";
import mob from "/assets/about/mobile/image-hero.jpg";

const Hero = () => {
    return (
        <section className="pb-90 sm:pb-48">
            <div className="wrapper lg:grid lg:grid-cols-[635px_1fr]">
                <div className="relative">
                    <picture>
                        <source media="(min-width: 64rem)" srcSet={dek} />
                        <source media="(min-width: 40rem)" srcSet={tab} />
                        <img src={mob} alt="" className="h-full w-full" />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-b/60 to-transparent" />
                    <div className="absolute z-10 bg-white left-0 right-8 top-48 py-16 pl-8 sm:py-0 sm:pt-40.5 sm:left-14.5 sm:right-0 sm:bottom-0 sm:top-auto sm:pl-15 lg:left-120 lg:-right-120 lg:pl-45.5 lg:pt-56">
                        <h1 className="text-[3rem] sm:text-[4.5rem] leading-[52px] sm:leading-[64px] tracking-[-1.2px] sm:tracking-[-2px] font-bold text-b sm:mb-12 lg:mb-14">
                            Your team of professionals
                        </h1>
                        <p className="text-[1.125rem] leading-[24px] tracking-[0px] font-medium mt-6 text-g-4">
                            Our small team of world-class professionals will
                            work with you every step of the way. Strong
                            relationships are at the core of everything we do.
                            This extends to the relationship our projects have
                            with their surroundings.
                        </p>
                        <div className="hidden sm:block absolute h-[1px] w-[65px] bg-g-4 top-22 lg:top-40 z-30" />
                    </div>
                    <div className="hidden sm:block absolute top-52 right-0 z-20 lg:-right-118 lg:top-32">
                        <p className="text-[157px] lg:text-[250px] leading-[200px] tracking-[-3px] lg:tracking-[-5px] font-semibold lg:font-bold text-[#EEEFF4]">
                            About
                        </p>
                    </div>
                    <div className="absolute hidden sm:flex items-center gap-12 rotate-90 sm:top-4 sm:-left-62 lg:-left-72 z-50">
                        <div className="w-30 h-0.5 bg-g-2" />
                        <div>
                            <p className="uppercase text-g-2 text-[1.2rem] tracking-[18px]">
                                about us
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
