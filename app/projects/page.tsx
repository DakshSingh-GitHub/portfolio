"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const projectDetails = {
    hotelManagement: [
        "Developed a console-based application using Python to manage hotel operations.",
        "Implemented features such as room booking, customer management, and billing.",
        "Utilized file handling for data storage and retrieval.",
    ],
    libraryManagement: [
        "Created a command-line interface (CLI) application / Also Web Based application in Python for library management.",
        "Implemented functionalities like book issuance, return, and inventory management.",
        "Used data structures to efficiently manage and search for books.",
    ],
    mathematicsHelper: [
        "Developed a Java library to assist students with mathematical computations.",
        "Included classes for various mathematical concepts such as algebra, and geometry.",
        "Provided methods for solving equations, calculating derivatives, and performing matrix operations.",
    ],
    portfolio: [
        "A personal portfolio website built with Next.js and Tailwind CSS.",
        "Showcases my skills and projects in an organized manner.",
        "Features a responsive design for optimal viewing on all devices.",
    ],
    projectJudge: [
        "Developing a Code Judge using flask and react for analysis of codes",
        "Implemented Basic API fetching, and code execution environment.",
        "Integration of a scoring system to streamline the evaluation process will be added soon",
    ],
    aiAssist: [
        "Building an AI-powered desktop assistant to automate tasks and enhance productivity.",
        "Implemented voice command processing, system-level controls, and modular skill execution.",
        "Advanced contextual understanding, learning-based responses, and deeper system integration are planned next.",
    ],
};

const ProjectDesc = [
    {
        title: "Code Judge",
        desc: "A web-based code judge system built with FastAPI and NextJS, designed to evaluate and score programming assignments efficiently.",
        href: "projects/code-judge",
        img: "./projects/code_judge.png",
        key: 4,
        details: projectDetails.projectJudge,
    },
    {
        title: "Library Management",
        desc: "A simple CLI based Library Management Software, has all the management functionalities.",
        href: "projects/library-management",
        img: "./projects/library_management.png",
        key: 1,
        details: projectDetails.libraryManagement,
    },
    {
        title: "AI Assist",
        desc: "A simple AI based assistant which has the capability to control basic controls, such as opening browser and websites",
        href: "projects/ai-assist",
        img: "./projects/ai_assist.png",
        key: 5,
        details: projectDetails.aiAssist,
    },
    {
        title: "Hotel Management",
        desc: "Python Application, Single Filed, for a software of Hotel Management, This was made as my school project during my 12th Grade",
        href: "projects/hotel-management",
        img: "./projects/hotel_management.png",
        key: 0,
        details: projectDetails.hotelManagement,
    },
    {
        title: "Mathematics Helper",
        desc: "Java Library/Project where, Many of the mathematical objects are compiled to classes for, Help of students of our beloved Mathematics Stream. I'll keep on Adding new classes as I learn.",
        href: "projects/mathematics-helper",
        img: "./projects/mathshelpjava.png",
        key: 2,
        details: projectDetails.mathematicsHelper,
    },
    {
        title: "Portfolio",
        desc: "This is the website you are currently on. It's my personal portfolio, built with Next.js and Tailwind CSS, showcasing my projects and skills.",
        href: "projects/portfolio",
        img: "./projects/portfolio.png",
        key: 3,
        details: projectDetails.portfolio,
    },
];

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

export default function Projects() {
    return (
        <div className="w-full max-w-7xl mx-auto py-20 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {ProjectDesc.map((project, i) => (
                    <motion.div
                        key={project.key}
                        variants={cardVariants}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Link href={project.href}>
                            <motion.div 
                                className="h-full bg-black/40 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden relative"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                                variants={{
                                    rest: { y: 0, scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" },
                                    hover: { 
                                        y: -8, 
                                        scale: 1.01,
                                        boxShadow: "0 20px 50px rgba(124, 58, 237, 0.3)", // Purple shadow
                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                    }
                                }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={project.img}
                                        fill
                                        alt={project.title}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-8 relative z-10">
                                    <motion.h3 
                                        className="text-3xl font-bold text-white mb-3"
                                        variants={{
                                            rest: { color: "#ffffff" },
                                            hover: { color: "#c4b5fd" } // violet-300
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>
                                <motion.div
                                    className="absolute inset-0 border-2 border-transparent rounded-3xl pointer-events-none"
                                    variants={{
                                        rest: { borderColor: "rgba(255, 255, 255, 0.1)" },
                                        hover: { borderColor: "rgba(124, 58, 237, 0.5)" } // Purple border
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
