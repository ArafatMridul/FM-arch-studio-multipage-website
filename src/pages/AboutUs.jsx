import { motion } from "motion/react";
import Hero from "../components/AboutUs/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heritage from "../components/AboutUs/Heritage";
import Leaders from "../components/AboutUs/Leaders";

const AboutUs = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <Navbar />
            <Hero />
            <Heritage />
            <Leaders />
            <Footer />
        </motion.div>
    );
};

export default AboutUs;
