import Hero from "../components/Home/Hero";
import Welcome from "../components/Home/Welcome";
import Ideas from "../components/Home/Ideas";
import Featured from "../components/Home/Featured";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <Navbar />
            <Hero />
            <Welcome />
            <Ideas />
            <Featured />
            <Footer />
        </motion.div>
    );
};

export default Home;
