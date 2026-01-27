"use client";

import ProjectCards from "@/components/pagecomponent/ProjectCards";
import Link from "next/link";

import { motion } from "framer-motion";
import { staggerContainer, bounceIn } from "@/components/animations";

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


export default function Projects() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center mt-0 md:mt-10 w-full overflow-hidden"
        >
            {ProjectDesc.map((project) => (
                <motion.div key={project.key} variants={bounceIn} className="w-full" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link href={project.href} className="w-full">
                        <ProjectCards
                            image={project.img}
                            text={project.title}
                            paragraph={project.desc}
                            details={project.details}
                        />
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}