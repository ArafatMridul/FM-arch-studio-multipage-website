import { motion, useInView, useAnimation } from "motion/react";
import { useEffect, useRef } from "react";

const Reveal = ({ children }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });
    const mainControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView, mainControls]);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
