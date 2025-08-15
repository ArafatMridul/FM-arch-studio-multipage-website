import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorn, setErrorn] = useState(false);
    const [errore, setErrore] = useState(false);
    const [errorm, setErrorm] = useState(false);

    function isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    function handleSubmit() {
        if (name === "") {
            setErrorn(true);
        } else {
            setErrorn(false);
        }

        if (email === "" || !isValidEmail(email)) {
            setErrore(true);
        } else {
            setErrore(false);
        }

        if (message === "") {
            setErrorm(true);
        } else {
            setErrorm(false);
        }
    }

    return (
        <div className="relative sm:mt-3 lg:pt-30">
            <div className="relative">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="text-[1.5rem] tracking-[-0.31px] font-bold text-b placeholder:text-g-2 py-6 focus:outline-0 border-b-1 border-b px-9 w-full cursor-pointer"
                />
                <AnimatePresence mode="wait">
                    {errorn && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute bottom-0 right-0 text-r font-bold text-[1.125rem] tracking-[-0.28px]"
                        >
                            Can't be empty
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
            <div className="relative">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="text-[1.5rem] tracking-[-0.31px] font-bold text-b placeholder:text-g-2 py-6 focus:outline-0 border-b-1 border-b px-9 w-full cursor-pointer"
                />
                <AnimatePresence mode="wait">
                    {errore && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute bottom-0 right-0 text-r font-bold text-[1.125rem] tracking-[-0.28px]"
                        >
                            {email === "" ? "Can't be empty" : "Invalid email"}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
            <div className="relative">
                <textarea
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    rows={2}
                    className="text-[1.5rem] tracking-[-0.31px] font-bold text-b2 placeholder:text-g-2 py-6 focus:outline-0 border-b-1 border-b px-9 w-full resize-none overflow-scroll cursor-pointer"
                />
                <AnimatePresence mode="wait">
                    {errorm && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute bottom-2 right-0 text-r font-bold text-[1.125rem] tracking-[-0.28px]"
                        >
                            Can't be empty
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
            <div
                onClick={handleSubmit}
                className="absolute -bottom-19.5 lg:-bottom-19.5 right-0 px-7 py-8 bg-b cursor-pointer transition-all duration-500 hover:bg-g-4 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                    <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke="#ffffff"
                        stroke-width="2"
                    >
                        <path d="M15 1l9 9-9 9M0 10h24" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Form;
