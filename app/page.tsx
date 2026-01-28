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
            className=""
        >
            {/*Home Card will be placed here*/}
            <HomeCard />
            {/*Education Timeline has been placed here*/}
            <EducationTimeline />
            <motion.div variants={fadeInUp} className="mt-10">
                <h1 className={`text-center text-4xl underline`}>
                    I&apos;ve Worked On
                </h1>
                <Projects />
            </motion.div>
        </motion.div>
    );
}
