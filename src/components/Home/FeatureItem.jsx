import React from "react";

const FeatureItem = ({ mob, tab, dek, name, index }) => {
    return (
        <div className="relative overflow-clip">
            <picture>
                <source media="(min-width: 64rem)" srcset={dek} />
                <source media="(min-width: 40rem)" srcset={tab} />
                <img src={mob} alt="" className="h-full w-full" />
            </picture>
            <div className="absolute bottom-6 left-6 z-30">
                <h2 className="text-[2rem] font-bold text-g-1 leading-[40px]">
                    {name}
                </h2>
                <p className="text-[1.25rem] text-g-1 leading-[24px]">
                    View All Projects
                </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-b/60 to-transparent z-10 " />
            <div className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 lg:top-36 lg:-right-3 z-20">
                <p className="text-[250px] leading-[200px] tracking-[-5px] font-bold text-white/60">
                    {index}
                </p>
            </div>
        </div>
    );
};

export default FeatureItem;
