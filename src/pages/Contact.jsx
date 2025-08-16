import { motion } from "motion/react";
import Hero from "../components/Contact/Hero";
import Details from "../components/Contact/Details";
import Map from "../components/Contact/Map";
import Connect from "../components/Contact/Connect";
import Reveal from "../components/Reveal";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <Hero />
            <Details />
            <Map />
            <Connect />
        </motion.div>
    );
};

export default Contact;
