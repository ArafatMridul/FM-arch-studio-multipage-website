import welcome from "/assets/home/desktop/image-welcome.jpg";

const Welcome = () => {
    return (
        <section className="relative wrapper px-8 sm:px-0 pt-36 sm:pt-62 lg:pt-68 pb-28 sm:pb-58 lg:pb-51.5 lg:pl-47">
            <div className="hidden sm:block absolute top-22 lg:top-26 left-0">
                <p className="text-[154px] lg:text-[250px] leading-[200px] font-semibold tracking-[-2px] lg:tracking-[-5px] lg:font-bold text-g-1 select-none">
                    Welcome
                </p>
            </div>
            <div className="hidden lg:block absolute top-48 right-0 -z-10">
                <img src={welcome} alt="" />
            </div>
            <div className="relative lg:w-[446px] lg:h-[483px]">
                <h2 className="text-[3rem] sm:text-[4.5rem] sm:max-w-[10ch] font-bold leading-[52px] sm:leading-[64px] tracking-[-1.71px] sm:tracking-[-2px]">
                    Welcome to Arch Studio
                </h2>
                <div className="pt-5.25 sm:pt-11 lg:pt-10">
                    <p className="text-[1.125rem] leading-[24px] text-g-4">
                        We have a unique network and skillset to help bring your
                        projects to life. Our small team of highly skilled
                        individuals combined with our large network put us in a
                        strong position to deliver exceptional results.
                    </p>
                    <p className="text-[1.125rem] leading-[24px] text-g-4 mt-5 sm:mt-6">
                        Over the past 10 years, we have worked on all kinds of
                        projects. From stations to high-rise buildings, we
                        create spaces that inspire and delight.
                    </p>
                    <p className="text-[1.125rem] leading-[24px] text-g-4 mt-6">
                        We work closely with our clients so that we understand
                        the intricacies of each project. This allows us to work
                        in harmony the surrounding area to create truly stunning
                        projects that will stand the test of time.
                    </p>
                </div>
                <div className="absolute sm:hidden h-[1px] w-[65px] bg-g-2 left-0 -top-[68px]" />
            </div>
        </section>
    );
};

export default Welcome;
