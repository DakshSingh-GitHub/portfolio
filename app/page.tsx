"use client";

import HomeCard from "@/components/pagecomponent/HomeCard";
import Projects from "./projects/page";
import EducationTimeline from "@/components/pagecomponent/EducationTimeline";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/animations";

export default function Home() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="container mx-auto px-4 md:px-8 py-8 md:py-16 space-y-16 md:space-y-24"
        >
            {/* Home Card Hero Section */}
            <section className="w-full">
                <HomeCard />
            </section>

            {/* Education Timeline Section */}
            <section className="w-full">
                <EducationTimeline />
            </section>

            {/* Projects Section */}
            <motion.section variants={fadeInUp} className="w-full space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        Featured Works
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        A collection of projects spanning system level utilities, CLI tools, libraries, and full-stack web applications.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
                </div>
                <Projects />
            </motion.section>
        </motion.div>
    );
}
