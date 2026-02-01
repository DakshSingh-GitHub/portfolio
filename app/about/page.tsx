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
            className="p-4 md:p-10 cursor-default"
        >
            <motion.div 
                className="text-center mb-12 bg-black/20 backdrop-blur-xl rounded-3xl border border-purple-700/30 p-8 md:p-12"
                style={{ boxShadow: "0 0 30px rgba(124,58,237,0.1)" }}
                whileHover={{ 
                    boxShadow: "0 0 50px rgba(124,58,237,0.2)",
                    transition: { duration: 0.5, ease: "easeInOut" }
                }}
                variants={headerVariants}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-purple-200 to-purple-400">
                    Get to know me better :)
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-left md:text-justify">
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
                    As I continue to pursue my interests and career goals, I
                    carry forward the values and knowledge imparted to me during
                    my schooling. Since childhood, I have been deeply
                    passionate about technology and I&apos;ve started to learn
                    about them at a young age. This passion has driven me to
                    explore various facets of the tech world, from software
                    development to understanding the latest advancements in

                    technology. I am excited to continue this journey,
                    leveraging my educational foundation to further my skills
                    and contribute meaningfully to the tech community.
                </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent my-12"></motion.div>

            <motion.div variants={fadeInUp} className="schoolList mt-10 px-2 md:px-0 mb-10">
                <h1
                    className="text-4xl md:text-5xl font-bold mb-8 text-center"
                >
                    Education...
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-evenly h-full w-full mt-10 gap-4 md:gap-0">
                    {schoolMap}
                </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent my-12"></motion.div>

            <motion.div variants={fadeInUp} className="mt-10 px-2 md:px-0">
                <h1
                    className="text-4xl md:text-5xl font-bold mb-8 text-center"
                >
                    Certifications of Mine...
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-evenly h-full w-full mt-10 gap-4 md:gap-0">
                    <Certificate />
                </div>
            </motion.div>
        </motion.div>
    );
}
