import logo from "/assets/logo.svg";
import hamburger from "/assets/icons/icon-hamburger.svg";
import close from "/assets/icons/icon-close.svg";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import LinkItem from "./Home/LinkItem";

const Navbar = () => {
    const { scrollY } = useScroll();

    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-transparent backdrop-blur-2xl sticky top-0 left-0 right-0 z-30"
            >
                <div className="wrapper flex items-center justify-between p-8 sm:px-0 sm:py-14 ">
                    <div>
                        <NavLink to="/">
                            <img
                                src={logo}
                                alt="Arch Studio"
                                className="w-[77px] h-[32.03px] sm:w-[96.16px] sm:h-10"
                            />
                        </NavLink>
                    </div>
                    <div
                        onClick={() => setIsOpen((curr) => !curr)}
                        className="sm:hidden"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen ? (
                                <motion.img
                                    key="open"
                                    initial={{ opacity: 0, rotate: 45 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 45 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    src={close}
                                    alt=""
                                />
                            ) : (
                                <motion.img
                                    key="close"
                                    initial={{ opacity: 0, rotate: -45 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -45 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    src={hamburger}
                                    alt=""
                                />
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="flex-1 hidden sm:flex items-center gap-14 pl-20 lg:pl-24">
                        <LinkItem>portfolio</LinkItem>
                        <LinkItem>about us</LinkItem>
                        <LinkItem>contact</LinkItem>
                    </div>
                </div>
            </motion.header>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            className="fixed sm:hidden bg-g-1 top-24 left-8 right-0 z-50"
                        >
                            <div className="grid gap-2 px-12 py-9.5">
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    to="portfolio"
                                    className="capitalize text-[2rem] font-bold text-b"
                                >
                                    portfolio
                                </Link>
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    to="about"
                                    className="capitalize text-[2rem] font-bold text-b"
                                >
                                    about us
                                </Link>
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    to="contact"
                                    className="capitalize text-[2rem] font-bold text-b"
                                >
                                    contact
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            className="fixed top-24 left-0 right-0 bottom-0 z-30 bg-b/50"
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
