"use client";

import { motion, Variants } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
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
    const shadowColor =
        color === "cyan"
            ? "rgba(56,189,248,0.15)"
            : "rgba(167,139,250,0.15)";
    const glowBorder =
        color === "cyan"
            ? "hover:border-cyan-500/50"
            : "hover:border-violet-500/50";
    const iconColor = color === "cyan" ? "text-cyan-400" : "text-violet-400";
    const badgeBg = color === "cyan" ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" : "bg-violet-500/10 text-violet-300 border-violet-500/20";

    return (
        <motion.div
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover={{
                boxShadow: `0 15px 30px ${shadowColor}`,
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className={`relative w-full md:w-1/2 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8 transition-colors duration-300 ${glowBorder}`}
        >
            <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${iconColor}`}>
                    {index === 0 ? <FaSchool size={22} /> : <FaGraduationCap size={22} />}
                </div>
                <div className={`px-3.5 py-1 rounded-full text-xs font-semibold border ${badgeBg}`}>
                    {year}
                </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white tracking-tight mb-1">{title}</h3>
            <p className="text-sm font-medium text-gray-400 mb-6">{subtitle}</p>
            
            <div className="space-y-4 border-t border-white/5 pt-4">
                {details.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm">
                        <span className="font-semibold text-gray-400 uppercase tracking-wider text-[10px]">
                            {item.label}
                        </span>
                        <span className="text-gray-200 font-medium sm:text-right">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
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
                className="text-3xl md:text-4xl font-bold text-center tracking-tight text-white mb-12"
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
