/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { staggerContainer } from "@/components/animations";

export default function PortfolioPage() {
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

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div 
            className="container mx-auto px-4 sm:px-6 py-10 text-white"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            <motion.div 
                className="text-center mb-12 bg-black/20 backdrop-blur-xl rounded-3xl border border-purple-700/30 p-8 md:p-12 shadow-[0_0_30px_rgba(124,58,237,0.1)] hover:shadow-[0_0_50px_rgba(124,58,237,0.2)] transition-shadow duration-500"
                variants={headerVariants}
            >
                <Link href="/">
                    <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-purple-200 to-purple-400 hover:opacity-80 transition-opacity duration-300">
                        My Portfolio Website
                    </h1>
                </Link>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    A personal portfolio website built with Next.js and Tailwind CSS, designed to showcase my skills, projects, and professional journey in a modern, interactive format.
                </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center mb-16">
                <div className="relative rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-[0_0_40px_rgba(124,58,237,0.2)] hover:border-purple-500/60 transition-all duration-500 group">
                    <Image
                        src="../projects/portfolio.png"
                        alt="Portfolio"
                        height={400}
                        width={800}
                        className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </motion.div>

            <motion.div
                className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg mb-12 hover:border-purple-500/50 transition-colors duration-300"
                variants={itemVariants}
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
                    <span className="text-purple-400">✨</span> Project Overview
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    This portfolio serves as a central hub for my professional identity. It's not just a collection of links, but a demonstration of my ability to build performant, accessible, and aesthetically pleasing web applications. Built with modern technologies, it emphasizes user experience and clean code architecture.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                    className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg hover:border-purple-500/50 transition-colors duration-300 h-full"
                    variants={itemVariants}
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-purple-400">🚀</span> Key Features
                    </h3>
                    <ul className="space-y-4">
                        {[
                            { title: "Project Showcase", desc: "Detailed pages for each project with descriptions, tech stacks, and links." },
                            { title: "About Me", desc: "A dedicated section highlighting my background, skills, and education." },
                            { title: "Contact Information", desc: "Easy access to my contact details and social media profiles." },
                            { title: "Responsive Design", desc: "Fully optimized for an optimal viewing experience across all devices." }
                        ].map((feature, index) => (
                            <li key={index} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors duration-300">
                                <span className="block font-semibold text-purple-300 mb-1">{feature.title}</span>
                                <span className="text-gray-400 text-sm">{feature.desc}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg hover:border-purple-500/50 transition-colors duration-300 h-full"
                    variants={itemVariants}
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-purple-400">🛠</span> Technologies Used
                    </h3>
                    <ul className="space-y-4">
                        {[
                            { icon: "▲", title: "Next.js", desc: "React framework for server-side rendering and static generation." },
                            { icon: "📘", title: "TypeScript", desc: "Typed superset of JavaScript for enhanced code quality." },
                            { icon: "🎨", title: "Tailwind CSS", desc: "Utility-first CSS framework for rapid and custom UI design." },
                            { icon: "🌐", title: "GitHub Pages", desc: "Platform for hosting and scaling the application." }
                        ].map((tech, index) => (
                            <li key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                                <span className="text-2xl">{tech.icon}</span>
                                <div>
                                    <span className="block font-semibold text-purple-300">{tech.title}</span>
                                    <span className="text-gray-400 text-sm">{tech.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            <motion.div
                className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg mb-16 hover:border-purple-500/50 transition-colors duration-300"
                variants={itemVariants}
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">
                    Folder Structure
                </h2>
                <div className="bg-black/50 p-6 rounded-xl border border-white/10 font-mono text-sm text-gray-300 overflow-x-auto">
                    <pre>{`/app
├── /about
│   └── page.tsx
├── /contact-me
│   └── page.tsx
├── /projects
│   ├── /hotel-management
│   │   └── page.tsx
│   ├── /library-management
│   │   └── page.tsx
│   ├── /mathematics-helper
│   │   └── page.tsx
│   └── /portfolio
│       └── page.tsx
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.tsx

/components
├── /global
│   ├── Card.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
├── /pagecomponent
│   ├── Certificate.tsx
│   ├── HomeCard.tsx
│   ├── ProjectCards.tsx
│   └── ReachMeOut.tsx
└── styles.tsx

/public
├── /projects
│   ├── hotel_management.png
│   ├── library_management.png
│   └── mathshelpjava.png
└── ...`}</pre>
                </div>
            </motion.div>

            <motion.div className="text-center mb-12" variants={itemVariants}>
                <a
                    href="https://github.com/DakshSingh-GitHub/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300 hover:scale-105 hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                </a>
            </motion.div>
        </motion.div>
    );
}
