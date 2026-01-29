"use client";

import PracticeRepoCard from "@/components/pagecomponent/PracticeRepoCard";

import { motion, Variants } from "framer-motion";
import { staggerContainer, bounceIn } from "@/components/animations";

const Repositories = [
    {
        repo_key: 1,
        repo_name: "JavaScript Interview Questions",
        repo_desc: 
            "A collection of commonly asked JavaScript interview questions with answers and explanations. I practice these questions to enhance my understanding of JavaScript concepts and prepare for technical interviews.",
        repo_lang: ["JavaScript", "TypeScript", "HTML", "CSS"],
        repo_url: "https://github.com/DakshSingh-GitHub/InterviewQuestions",
    },
    {
        repo_key: 2,
        repo_name: "Python Practice Problems",
        repo_desc: "A repository containing various Python practice problems and their solutions. This repo helps me improve my problem-solving skills and gain proficiency in Python programming.",
        repo_lang: ["Python"],
        repo_url: "https://github.com/DakshSingh-GitHub/PyQuestions",
    },
    {
        repo_key: 3,
        repo_name: "TypeScript Playground",
        repo_desc: "A collection of TypeScript code snippets and exercises that I use to practice and learn TypeScript features and concepts. This repository serves as a playground for experimenting with TypeScript code.",
        repo_lang: ["TypeScript", "JavaScript"],
        repo_url: "https://github.com/DakshSingh-GitHub/TypeScript",
    },
    {
        repo_key: 4,
        repo_name: "Flask Learning",
        repo_desc: "A repository dedicated to learning Flask, a micro web framework for Python. It contains various Flask projects and examples that I work on to understand web development using Flask.",
        repo_lang: ["Python", "Flask", "HTML", "CSS"],
        repo_url: "https://github.com/DakshSingh-GitHub/Flask-learning",
    }
];

export default function PracticeCodes() {
    const headerVariants: Variants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="practice-code p-4 md:p-10 cursor-default"
        >
            <motion.div
                className="text-center mb-12 bg-black/20 backdrop-blur-xl rounded-3xl border border-purple-700/30 p-8 md:p-12 shadow-[0_0_30px_rgba(124,58,237,0.1)] hover:shadow-[0_0_50px_rgba(124,58,237,0.2)] transition-shadow duration-500"
                variants={headerVariants}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-purple-200 to-purple-400">
                    Practice Codes
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    This section will contain practice codes and exercises.
                    Repositories with practice codes will be linked here. I
                    prefer coding and sharing my progress as I learn the
                    concepts, Hence, I like to share the codes on which I
                    practice.
                </p>
            </motion.div>
            
            <div className="h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent my-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {Repositories.map((repo) => (
                    <motion.div
                        key={repo.repo_key}
                        variants={bounceIn}
                        className="h-full"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <PracticeRepoCard
                            repo_url={repo.repo_url}
                            repo_name={repo.repo_name}
                            repo_desc={repo.repo_desc}
                            repo_lang={repo.repo_lang}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
