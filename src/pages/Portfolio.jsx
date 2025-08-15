import { motion } from "motion/react";
import PortfolioItem from "../components/Portfolio/PortfolioItem";
import { pictures } from "../components/Portfolio/Pictures";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="wrapper relative px-8 sm:px-0 pt-14 sm:pt-0">
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 pb-33 sm:pb-50 lg:pb-40">
                        {pictures.map(
                            ({ dek, tab, mob, name, date }, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: (index + 1) * 0.3,
                                    }}
                                >
                                    <PortfolioItem
                                        key={index}
                                        dek={dek}
                                        tab={tab}
                                        mob={mob}
                                        name={name}
                                        date={date}
                                    />
                                </motion.div>
                            )
                        )}
                    </div>
                    <div className="absolute hidden sm:flex items-center gap-12 rotate-90 top-10 sm:-left-62 lg:-left-73 z-50">
                        <div className="w-26 h-0.5 bg-g-2" />
                        <div>
                            <p className="uppercase text-g-2 text-[1.2rem] tracking-[18px]">
                                portfolio
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default Portfolio;
