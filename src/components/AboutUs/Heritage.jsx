import React from "react";
import heritage from "/assets/about/desktop/image-heritage.jpg";

const Heritage = () => {
    return (
        <section>
            <div className="wrapper lg:grid lg:grid-cols-2 lg:gap-8 pb-28 sm:pb-58 lg:pb-52">
                <div className="relative pt-20 sm:pt-16 lg:pt-22 px-8 sm:px-0">
                    <h2 className="text-[3rem] sm:text-[4.5rem] leading-[52px] sm:leading-[64px] tracking-[-1.2px] sm:tracking-[-2px] font-bold text-b sm:mb-14 lg:mb-14">
                        Our
                        <br /> Heritage
                    </h2>
                    <div className="lg:pr-24">
                        <p className="text-[1.125rem] leading-[24px] tracking-[0px] font-medium mt-5 text-g-4">
                            Founded in 2007, we started as a trio of architects.
                            Our complimentary skills and relentless attention to
                            detail turned Arch into one of the most sought after
                            boutique firms in the country.
                        </p>
                        <p className="text-[1.125rem] leading-[24px] tracking-[0px] font-medium mt-6 text-g-4">
                            Speciliazing in Urban Design allowed us to focus on
                            creating exceptional structures that live in harmony
                            with their surroundings. We consider every detail
                            from every surrounding element to inform our
                            designs.
                        </p>
                        <p className="text-[1.125rem] leading-[24px] tracking-[0px] font-medium mt-6 text-g-4">
                            Our small team of world-class professionals provides
                            input on every project.
                        </p>
                    </div>
                    <div className="absolute h-[1px] w-[65px] bg-g-4 top-2 lg:top-2 z-30" />
                </div>
                <div className="hidden lg:block">
                    <img src={heritage} alt="" className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default Heritage;
