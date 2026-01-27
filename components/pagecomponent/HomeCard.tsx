"use client";

import Image from "next/image";
import { classNames } from "@/components/styles";
import { motion } from "framer-motion";
import { staggerContainer, blurIn, scaleIn } from "@/components/animations";


export default function HomeCard() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="homecard"
        >
            <div className="cardparent flex flex-col md:flex-row items-center justify-center h-full">
                <motion.div variants={blurIn} className={`${classNames.cardparent_divisions}`}>
                    <h1
                        className={`${classNames.cardparent_division_h1} ${classNames.textGlowEffect} font-sans`}
                    >
                        Hi, I&apos;m Daksh Singh
                    </h1>{" "}
                    <br />
                    <p className={`${classNames.cardparent_division_p} font-sans`}>
                        <span className={`${classNames.spanText} ${classNames.textGlowEffect}`}>Hey Everyone</span>, <br /> I  am currently taking a
                        gap year after Class 12 to build strong skills before
                        college. This year, I&apos;ve been focusing on learning
                        programming and problem-solving to create a solid
                        foundation in computer science. I work with Java and
                        Python, primarily for data structures, algorithms, and
                        console-based projects, and I&apos;m also exploring
                        JavaScript as I move towards web development
                    </p>
                    <br />
                    <ul
                        className={classNames.cardparent_list}
                    >
                        <li className="flex flex-col md:flex-row mb-2">
                            <span
                                className={`${classNames.cardparent_list_span} ${classNames.textGlowEffect} md:w-1/4 md:pr-4`}
                            >
                                Java:
                            </span>
                            <span className="md:w-3/4">
                                Done it for consoles and DSA.
                            </span>
                        </li>
                        <li className="flex flex-col md:flex-row mb-2">
                            <span
                                className={`${classNames.cardparent_list_span} ${classNames.textGlowEffect} md:w-1/4 md:pr-4`}
                            >
                                Python:
                            </span>
                            <span className="md:w-3/4">
                                Problem Solving, and Database Tooling.
                            </span>
                        </li>
                        <li className="flex flex-col md:flex-row">
                            <span
                                className={`${classNames.cardparent_list_span} ${classNames.textGlowEffect} md:w-1/4 md:pr-4`}
                            >
                                JavaScript:
                            </span>
                            <span className="md:w-3/4">
                                Currently Learning NextJS
                            </span>
                        </li>
                    </ul>
                </motion.div>
                <motion.div variants={scaleIn} className={classNames.cardparent_divisions}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="./daksh/daksh.jpg"
                            width={350}
                            height={350}
                            alt="Daksh Singh"
                            className={`${classNames.textGlowEffect}`}
                            style={{ borderRadius: 20 }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
