"use client";

import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const EducationCard = ({
    title,
    subtitle,
    year,
    details,
    color,
    index,
}: {
    title: string;
    subtitle: string;
    year: string;
    details: { label: string; value: string }[];
    color: "cyan" | "violet";
    index: number;
}) => {
    const glowColor =
        color === "cyan"
            ? "hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
            : "hover:shadow-[0_0_30px_rgba(167,139,250,0.3)]";
    const bulletColor = color === "cyan" ? "bg-cyan-400" : "bg-violet-400";

    return (
        <motion.div
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`relative w-full md:w-1/2 bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 p-8 transition-shadow duration-300 ${glowColor}`}
        >
            <div className="absolute top-6 right-6 bg-white/10 px-3 py-1 rounded-full text-sm font-medium text-white">
                {year}
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-md text-gray-400 mb-6">{subtitle}</p>
            <ul className="space-y-3">
                {details.map((item, i) => (
                    <li key={i} className="flex items-start">
                        <div
                            className={`w-2 h-2 ${bulletColor} rounded-full mt-2 mr-4 shrink-0`}
                        ></div>
                        <div>
                            <span className="font-semibold text-gray-200">
                                {item.label}:
                            </span>
                            <span className="text-gray-300 ml-2">
                                {item.value}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default function EducationTimeline() {
    const educationData = [
        {
            title: "Secondary Education",
            subtitle: "10th Grade - CBSE Board",
            year: "2023",
            details: [
                { label: "School", value: "Shri Gulab Rai Montessori" },
                { label: "Aggregate Score", value: "89.8%" },
                {
                    label: "Key Subjects Score (Best of 5)",
                    value: "93.8%",
                },
            ],
            color: "cyan" as "cyan" | "violet",
        },
        {
            title: "Higher Secondary Education",
            subtitle: "12th Grade - CBSE Board",
            year: "2025",
            details: [
                { label: "School", value: "Shri Gulab Rai Montessori" },
                { label: "Aggregate Score", value: "91.0%" },
                {
                    label: "Stream",
                    value: "Science (PCM with Computer Science)",
                },
            ],
            color: "violet" as "cyan" | "violet",
        },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto py-16 px-4">
            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-white mb-12"
            >
                My Education
            </motion.h2>
            <div className="flex flex-col md:flex-row gap-8">
                {educationData.map((edu, i) => (
                    <EducationCard key={i} {...edu} index={i} />
                ))}
            </div>
        </div>
    );
}
