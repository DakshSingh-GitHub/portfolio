"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import React from "react";

export default function HomeCard() {
    const textGlowEffect =
        "transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_8px_rgba(124,58,237,1.0)]";

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                staggerChildren: 0.3,
                delayChildren: 0.2,
                ease: "easeOut",
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const imageVariants: Variants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-[95%] max-w-360 mx-auto bg-black/10 backdrop-blur-xl rounded-3xl border border-purple-700/30 overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.15)] hover:shadow-[0_0_60px_rgba(124,58,237,0.3)] transition-shadow duration-500"
        >
            <div className="flex flex-col md:flex-row items-center justify-center h-full">
                <motion.div
                    variants={itemVariants}
                    className="w-full md:w-1/2 flex justify-center flex-col items-center p-8 md:p-16 text-center md:text-left"
                >
                    <h1
                        className={`text-5xl md:text-6xl font-bold mb-6 font-sans`}
                    >
                        Hi, I&apos;m{" "}
                        <span className="bg-linear-to-r from-pink-400 to-violet-800 bg-clip-text text-transparent">
                            Daksh Singh
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 font-sans leading-relaxed">
                        Currently on a gap year, I am dedicating my time to
                        building a robust foundation in computer science. My
                        focus is on advanced problem-solving and programming
                        with Java, Python, and JavaScript, all driven by a
                        passion for creating modern and intuitive web
                        experiences.
                    </p>
                    <ul className="list-none space-y-4 text-left w-full max-w-lg">
                        <li className="flex items-start">
                            <span
                                className={`font-bold w-32 shrink-0 ${textGlowEffect}`}
                            >
                                Java:
                            </span>
                            <span className="text-gray-200">
                                Mastering data structures and algorithms while
                                building robust console applications.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span
                                className={`font-bold w-32 shrink-0 ${textGlowEffect}`}
                            >
                                Python:
                            </span>
                            <span className="text-gray-200">
                                Applying Python for complex problem-solving and
                                efficient database management.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span
                                className={`font-bold w-32 shrink-0 ${textGlowEffect}`}
                            >
                                JavaScript:
                            </span>
                            <span className="text-gray-200">
                                Crafting dynamic, responsive web solutions with
                                modern frameworks like Next.js and React.
                            </span>
                        </li>
                    </ul>
                </motion.div>

                <div className="hidden md:block h-64 w-px bg-purple-700/30 self-center"></div>

                <motion.div
                    variants={imageVariants}
                    className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-16"
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 8,
                        // repeat: None,
                        ease: "easeInOut",
                    }}
                >
                    <motion.div
                        className="relative w-72 h-72 md:w-96 md:h-96"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="../daksh/daksh.png"
                            fill
                            alt="Daksh Singh"
                            className={`rounded-2xl shadow-2xl object-cover ${textGlowEffect}`}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
