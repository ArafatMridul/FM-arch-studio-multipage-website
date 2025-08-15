import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import { motion, AnimatePresence } from "motion/react";
import ScrollToTop from "./ScrollTop";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <ScrollToTop />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
