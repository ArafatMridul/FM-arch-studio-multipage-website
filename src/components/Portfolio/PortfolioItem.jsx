import { Link } from "react-router-dom";

const PortfolioItem = ({ dek, tab, mob, name, date }) => {
    return (
        <div>
            <div className="relative cursor-pointer">
                <Link to="#">
                    <picture>
                        <source media="(min-width: 64rem)" srcSet={dek} />
                        <source media="(min-width: 40rem)" srcSet={tab} />
                        <img src={mob} alt="" className="h-full w-full" />
                    </picture>
                    <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20">
                        <h2 className="text-[2rem] leading-[40px] text-white font-bold capitalize">
                            {name}
                        </h2>
                        <p className="text-[1.125rem] leading-[24px] font-medium text-white capitalize">
                            {date}
                        </p>
                    </div>
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-b/60 to-transparent z-10" />
            </div>
        </div>
    );
};

export default PortfolioItem;
