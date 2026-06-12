"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function HomeCard() {
    const textGlowEffect =
        "transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]";

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
                delayChildren: 0.1,
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
                damping: 15,
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
                damping: 15,
                delay: 0.4,
            },
        },
    };

    const techBadges = [
        { name: "Java & DSA", color: "from-amber-500 to-red-500" },
        { name: "Python & Databases", color: "from-blue-500 to-cyan-500" },
        { name: "Next.js & React", color: "from-purple-500 to-indigo-500" },
        { name: "TypeScript", color: "from-blue-600 to-indigo-600" },
        { name: "FastAPI", color: "from-emerald-500 to-teal-500" },
    ];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-6xl mx-auto bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-purple-500/20"
        >
            <div className="flex flex-col lg:flex-row items-stretch justify-center">
                <motion.div
                    variants={itemVariants}
                    className="w-full lg:w-3/5 flex justify-center flex-col items-start p-8 sm:p-12 md:p-16 text-left"
                >
                
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 font-sans text-white leading-tight">
                        Hi, I&apos;m{" "}
                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                            Daksh Singh
                        </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg text-gray-300 mb-8 font-sans leading-relaxed">
                        Currently on a gap year dedicated to mastering computer science foundations. 
                        I specialize in building elegant, robust, and modern web applications with 
                        Next.js, Python, and Java, driven by a passion for solving complex architectural problems.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {techBadges.map((badge, idx) => (
                            <span 
                                key={idx} 
                                className={`text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 shadow-[0_2px_10px_rgba(0,0,0,0.2)]`}
                            >
                                {badge.name}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                        >
                            View Projects
                            <FaArrowRight size={14} />
                        </Link>
                        <Link
                            href="/contact-me"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-sm transition-all duration-300"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                <div className="hidden lg:block w-px bg-white/10 my-16"></div>

                <motion.div
                    variants={imageVariants}
                    className="w-full lg:w-2/5 flex justify-center items-center p-8 sm:p-12 md:p-16 bg-radial from-purple-900/10 via-transparent to-transparent"
                >
                    <motion.div
                        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-3xl blur-xl opacity-35 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black/40">
                            <Image
                                src="/daksh/daksh.png"
                                fill
                                alt="Daksh Singh"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
