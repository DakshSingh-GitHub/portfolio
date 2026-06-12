"use client";

import Link from "next/link";

import { staggerContainer, bounceIn, fadeInUp } from "@/components/animations";
import { motion, Variants } from "framer-motion";

import Card from "@/components/global/Card";
import Certificate from "@/components/pagecomponent/Certificate";


const schoolList = [
    {
        name: "Shri Gulab Rai Montessori School",
        image: "./education/schl.jpg",
        desc: "Secondary and Senior Secondary Education from Shri Gulab Rai Montessori school",
        href: "https://grmschool.com/Default.aspx",
        key: 0,
    },
];

export default function AboutPage() {
    const headerVariants: Variants = {
        hidden: { scale: 0.95, opacity: 0, y: 20 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const schoolMap = schoolList.map((school) => (
        <motion.div key={school.key} variants={bounceIn} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link
                href={school.href}
                target="_blank"
                className="flex justify-center"
            >
                <Card
                    image={school.image}
                    text={school.name}
                    paragraph={school.desc}
                    board={true}
                />
            </Link>
        </motion.div>
    ));

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto px-4 py-8 md:py-16 cursor-default space-y-12 md:space-y-16"
        >
            <motion.div 
                className="text-left bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-purple-500/20"
                variants={headerVariants}
            >
                <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
                    Get to know me better :)
                </h1>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed font-sans space-y-4">
                    Since you&apos;ve made it here, I&apos;d like to take this
                    opportunity to share a bit about my educational background.
                    I completed both my Secondary (10th Grade) and Senior
                    Secondary (12th Grade) education at&nbsp;
                    <span
                        className="font-semibold text-purple-300 hover:text-purple-200 transition-colors duration-300"
                    >
                        Shri Gulab Rai Montessori School
                    </span>
                    , which is affiliated with the CBSE Board. My time at this
                    institution has been instrumental in shaping my academic
                    journey and personal growth. I am proud to have achieved
                    commendable scores in both examinations, reflecting my
                    dedication and hard work throughout these formative years.
                    <br /><br />
                    As I continue to pursue my interests and career goals, I
                    carry forward the values and knowledge imparted to me during
                    my schooling. Since childhood, I have been deeply
                    passionate about technology and I&apos;ve started to learn
                    about them at a young age. This passion has driven me to
                    explore various facets of the tech world, from software
                    development to understanding the latest advancements. I am excited to continue this journey,
                    leveraging my educational foundation to further my skills
                    and contribute meaningfully to the tech community.
                </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></motion.div>

            <motion.div variants={fadeInUp} className="schoolList space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Education</h2>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">Where my formal studies and foundational learnings took shape.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    {schoolMap}
                </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></motion.div>

            <motion.div variants={fadeInUp} className="space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Certifications</h2>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">Specialized programs and skill verifications completed online.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-evenly h-full w-full mt-10 gap-4 md:gap-0">
                    <Certificate />
                </div>
            </motion.div>
        </motion.div>
    );
}
