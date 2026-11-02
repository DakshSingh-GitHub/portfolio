"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaDiscord,
    FaArrowRight,
    FaTerminal,
    FaCode,
    FaGraduationCap,
    FaLayerGroup,
    FaNetworkWired,
    FaDatabase,
    FaExternalLinkAlt,
    FaCheck,
} from "react-icons/fa";

type CategoryFilter = "all" | "systems" | "stack" | "academic" | "contact";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("daksh.singh.2407@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const projectsList = [
        {
            title: "CodeCartofy",
            category: "AST & Cartography",
            highlight: "Interactive AST Codebase Cartography",
            desc: "Browser-native codebase cartography and AST dependency graphing platform. Directly parses JavaScript, TypeScript, and JSX with Babel into an interactive D3 force-directed graph with O(V+E) DFS cycle detection and AI architecture health scores.",
            tags: ["TypeScript", "Babel AST", "D3-Force", "Next.js", "Web Workers"],
            href: "/projects/code-cartofy",
            status: "Featured System",
        },
        {
            title: "Coal-Me-Later",
            category: "Edge AI & Governance",
            highlight: "Subterranean Mine Safety Infrastructure",
            desc: "Autonomous compliance monitoring & geotechnical slope stability AI platform engineered for India's coal mining ecosystem. Implements zero-data-loss subterranean edge persistence via IndexedDB with automated multipart surface sync under DGMS regulations.",
            tags: ["Python", "IndexedDB", "Edge Sync", "FastAPI", "Next.js"],
            href: "/projects/coal-me-later",
            status: "SIH Hackathon",
        },
        {
            title: "Vlyxir",
            category: "Cloud IDE & Judge",
            highlight: "Sub-millisecond Online Judge Ecosystem",
            desc: "Industrial-grade competitive coding platform featuring a sub-millisecond execution pool across 295+ algorithmic challenges. Integrates Pyodide WebAssembly in-browser sandboxing, real-time 1v1 code duels, and multi-model AI code intelligence.",
            tags: ["Python", "WebAssembly", "Docker", "Next.js", "PostgreSQL"],
            href: "/projects/vlyxir",
            status: "Core Platform",
        },
        {
            title: "AI Assist",
            category: "Desktop Automation",
            highlight: "Voice-driven System Agent",
            desc: "Command-driven personal automation agent designed for desktop task execution, browser orchestration, voice-based operation, and modular skill pipelines.",
            tags: ["Python", "Voice Processing", "OS Automation", "CLI"],
            href: "/projects/ai-assist",
            status: "Tooling",
        },
        {
            title: "Library Management CLI",
            category: "Systems & Algorithms",
            highlight: "Data Structure Inventory Engine",
            desc: "Command-line and web-based management engine for book tracking, cataloging, dynamic search, and persistent record management designed with clean data structure primitives.",
            tags: ["Python", "Data Structures", "File I/O", "CLI Design"],
            href: "/projects/library-management",
            status: "Utility",
        },
        {
            title: "Mathematics Helper",
            category: "Computational Java",
            highlight: "Object-Oriented Math Library",
            desc: "Java computation suite engineered for matrix algebra, equation solvers, calculus derivatives, and high-precision numeric evaluation.",
            tags: ["Java", "OOP", "Linear Algebra", "Calculus"],
            href: "/projects/mathematics-helper",
            status: "Library",
        },
    ];

    const techArsenal = [
        {
            category: "Languages & Runtimes",
            items: ["Java", "Python", "TypeScript", "JavaScript", "C/C++", "SQL"],
            detail: "Object-oriented architectures in Java, algorithms & scripting in Python, full-stack systems in TypeScript.",
        },
        {
            category: "Web & API Frameworks",
            items: ["Next.js", "React", "FastAPI", "Node.js", "Tailwind CSS"],
            detail: "Server components, microservices, reactive user interfaces, and minimal responsive design systems.",
        },
        {
            category: "Systems, Tools & Edge",
            items: ["Babel AST", "Pyodide (Wasm)", "Docker", "Git", "Linux", "IndexedDB"],
            detail: "Abstract syntax tree parsing, in-browser WebAssembly sandboxing, containerized workloads, and edge storage.",
        },
        {
            category: "Engineering Focus",
            items: ["Distributed Data", "AST Cartography", "DFS/BFS Graph Physics", "Offline-First Sync"],
            detail: "Building robust developer infrastructure, graph visualization engines, and resilient offline architectures.",
        },
    ];

    const academicMilestones = [
        {
            institution: "Newton School of Technology, Rishihood University",
            role: "B.Tech in Computer Science & Engineering (AI)",
            period: "Undergraduate",
            desc: "Undergraduate program emphasizing data structures, algorithms, software engineering, systems design, and applied artificial intelligence.",
            badge: "Higher Education",
            link: "https://rishihood.edu.in/",
        },
        {
            institution: "Shri Gulab Rai Montessori School",
            role: "Senior Secondary & Secondary (CBSE)",
            period: "Completed",
            desc: "Academic foundation with primary focus on Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
            badge: "Schooling",
            link: "https://grmschool.com/Default.aspx",
        },
    ];

    return (
        <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-12 sm:space-y-16">
            {/* HERO & IDENTITY CARD */}
            <section className="relative rounded-3xl bg-neutral-950/80 border border-neutral-800/90 p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden">
                {/* Subtle top indicator bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-neutral-800/80">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Available for engineering roles & internships</span>
                    </div>
                    <div className="text-xs font-mono text-neutral-400">
                        portfolio.daksh.systems
                    </div>
                </div>

                {/* Profile Information */}
                <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <div className="space-y-1">
                            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                                Engineer & Systems Builder
                            </span>
                            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                                Daksh Singh
                            </h1>
                        </div>

                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                            Computer Science & AI undergraduate at Newton School of Technology, Rishihood University.
                            Specialized in building full-stack platforms, AST dependency graphers, subterranean edge sync
                            systems, and sub-millisecond execution tools. Driven by minimalistic architecture and performant code.
                        </p>

                        <div className="flex flex-wrap items-center gap-2 pt-1">
                            <span className="text-xs px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono">
                                Java & DSA
                            </span>
                            <span className="text-xs px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono">
                                Python & Backend
                            </span>
                            <span className="text-xs px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono">
                                TypeScript & Next.js
                            </span>
                            <span className="text-xs px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono">
                                AST & Compilers
                            </span>
                        </div>
                    </div>

                    {/* Minimalist Profile Picture Card */}
                    <div className="relative shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/80 shadow-inner">
                        <Image
                            src="https://i.pinimg.com/736x/0d/00/60/0d00602699272d50087f09e99ae8a764.jpg"
                            alt="Daksh Singh"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Grouped Action Buttons Bar */}
                <div className="mt-8 pt-8 border-t border-neutral-800/80 flex flex-wrap items-center gap-3">
                    <div className="inline-flex flex-wrap p-1 rounded-2xl sm:rounded-full bg-neutral-900/90 border border-neutral-800 w-full sm:w-auto">
                        <button
                            onClick={() => {
                                setSelectedCategory("systems");
                                scrollToSection("section-systems");
                            }}
                            className="flex-1 sm:flex-initial px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <FaCode size={13} />
                            <span>Explore Systems</span>
                        </button>
                        <button
                            onClick={() => {
                                setSelectedCategory("stack");
                                scrollToSection("section-stack");
                            }}
                            className="flex-1 sm:flex-initial px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <FaTerminal size={13} />
                            <span>Technical Stack</span>
                        </button>
                        <button
                            onClick={() => {
                                setSelectedCategory("academic");
                                scrollToSection("section-academic");
                            }}
                            className="flex-1 sm:flex-initial px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <FaGraduationCap size={13} />
                            <span>Education</span>
                        </button>
                        <button
                            onClick={() => {
                                setSelectedCategory("contact");
                                scrollToSection("section-contact");
                            }}
                            className="flex-1 sm:flex-initial px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <FaNetworkWired size={13} />
                            <span>Connect</span>
                        </button>
                    </div>

                    <Link
                        href="/about"
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs sm:text-sm font-medium text-neutral-200 hover:text-white transition-colors text-center inline-flex items-center justify-center gap-2"
                    >
                        <span>Full Biography</span>
                        <FaArrowRight size={11} />
                    </Link>
                </div>

                {/* Key Summary Stats Grid */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 text-left">
                        <div className="text-xl font-bold text-white font-mono">03</div>
                        <div className="text-xs text-neutral-400 mt-0.5">Flagship Systems</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 text-left">
                        <div className="text-xl font-bold text-white font-mono">08+</div>
                        <div className="text-xs text-neutral-400 mt-0.5">Projects Delivered</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 text-left">
                        <div className="text-xl font-bold text-white font-mono">SIH &apos;24</div>
                        <div className="text-xs text-neutral-400 mt-0.5">Hackathon Finalist</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 text-left">
                        <div className="text-xl font-bold text-white font-mono">CS + AI</div>
                        <div className="text-xs text-neutral-400 mt-0.5">Academic Degree</div>
                    </div>
                </div>
            </section>

            {/* CATEGORY SWITCHER / GROUPED FILTER CONTROLS */}
            <section className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 border-y border-neutral-800/70">
                <div className="flex items-center gap-2">
                    <FaLayerGroup className="text-neutral-400" size={14} />
                    <span className="text-xs uppercase tracking-widest font-semibold text-neutral-300">
                        Category Index
                    </span>
                </div>

                {/* Grouped Category Buttons */}
                <div className="inline-flex flex-wrap p-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs">
                    {(
                        [
                            { id: "all", label: "All Categories" },
                            { id: "systems", label: "01. Systems" },
                            { id: "stack", label: "02. Technical Arsenal" },
                            { id: "academic", label: "03. Education" },
                            { id: "contact", label: "04. Direct Channels" },
                        ] as const
                    ).map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => {
                                setSelectedCategory(cat.id);
                                if (cat.id !== "all") {
                                    scrollToSection(`section-${cat.id}`);
                                }
                            }}
                            className={`px-3 py-1.5 rounded-full transition-all duration-200 font-medium ${
                                selectedCategory === cat.id
                                    ? "bg-neutral-800 text-white border border-neutral-700 shadow-sm"
                                    : "text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* CATEGORY 1: FLAGSHIP WORKS & SYSTEMS */}
            {(selectedCategory === "all" || selectedCategory === "systems") && (
                <section id="section-systems" className="space-y-6 scroll-mt-24">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-800/80 pb-4">
                        <div>
                            <span className="text-xs font-mono text-neutral-400">CATEGORY 01</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                Flagship Systems & Software
                            </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
                            Architectural briefs of production-grade systems and tools. Direct documentation and code repositories.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {projectsList.map((project) => (
                            <div
                                key={project.title}
                                className="flex flex-col justify-between rounded-3xl bg-neutral-950/70 border border-neutral-800/90 p-6 sm:p-7 hover:border-neutral-700 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] group"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800">
                                            {project.category}
                                        </span>
                                        <span className="text-[11px] font-mono text-neutral-400">
                                            {project.status}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-neutral-100 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs font-mono text-neutral-400 mt-1">
                                            {project.highlight}
                                        </p>
                                    </div>

                                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-900 text-neutral-400 border border-neutral-800/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                                    <Link
                                        href={project.href}
                                        className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-neutral-300 transition-colors"
                                    >
                                        <span>View System Specification</span>
                                        <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center pt-2">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs sm:text-sm font-medium text-white transition-colors"
                        >
                            <span>Browse All Projects in Dedicated Directory</span>
                            <FaArrowRight size={12} />
                        </Link>
                    </div>
                </section>
            )}

            {/* CATEGORY 2: TECHNICAL ARSENAL */}
            {(selectedCategory === "all" || selectedCategory === "stack") && (
                <section id="section-stack" className="space-y-6 scroll-mt-24">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-800/80 pb-4">
                        <div>
                            <span className="text-xs font-mono text-neutral-400">CATEGORY 02</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                Technical Arsenal & Stack
                            </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
                            Category-wise breakdown of competencies across languages, runtimes, systems, and architectural patterns.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {techArsenal.map((item) => (
                            <div
                                key={item.category}
                                className="rounded-3xl bg-neutral-950/70 border border-neutral-800/90 p-6 sm:p-7 space-y-4 hover:border-neutral-700 transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    <FaDatabase className="text-neutral-400" size={13} />
                                    <h3 className="text-base font-bold text-white font-sans">
                                        {item.category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {item.items.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-xs text-neutral-400 leading-relaxed border-t border-neutral-800/80 pt-3">
                                    {item.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* CATEGORY 3: ACADEMIC FOUNDATION & MILESTONES */}
            {(selectedCategory === "all" || selectedCategory === "academic") && (
                <section id="section-academic" className="space-y-6 scroll-mt-24">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-800/80 pb-4">
                        <div>
                            <span className="text-xs font-mono text-neutral-400">CATEGORY 03</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                Academic Milestones
                            </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
                            Institutional education, curriculum rigor, and foundational preparation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {academicMilestones.map((edu) => (
                            <div
                                key={edu.institution}
                                className="rounded-3xl bg-neutral-950/70 border border-neutral-800/90 p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-colors"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400">
                                            {edu.badge}
                                        </span>
                                        <span className="text-xs font-mono text-neutral-400">
                                            {edu.period}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-white font-sans">
                                            {edu.institution}
                                        </h3>
                                        <p className="text-xs font-mono text-neutral-400 mt-1">
                                            {edu.role}
                                        </p>
                                    </div>

                                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                                        {edu.desc}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-neutral-800/80">
                                    <Link
                                        href={edu.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors"
                                    >
                                        <span>Institution Portal</span>
                                        <FaExternalLinkAlt size={10} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* CATEGORY 4: DIRECT CHANNELS & CONNECT */}
            {(selectedCategory === "all" || selectedCategory === "contact") && (
                <section id="section-contact" className="space-y-6 scroll-mt-24">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-800/80 pb-4">
                        <div>
                            <span className="text-xs font-mono text-neutral-400">CATEGORY 04</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                Direct Channels & Connect
                            </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
                            Direct communications for engineering opportunities, code reviews, and project collaborations.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-neutral-950/70 border border-neutral-800/90 p-6 sm:p-10 space-y-6">
                        <div className="max-w-xl space-y-2">
                            <h3 className="text-lg font-bold text-white">Let&apos;s build something impactful.</h3>
                            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                                Available for software engineering internships, technical collaborations, and systems architecture consultations. Reach out via email or verified developer handles.
                            </p>
                        </div>

                        {/* Grouped Action Buttons for Contact */}
                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href="mailto:daksh.singh.2407@gmail.com"
                                className="px-4 py-2.5 rounded-full bg-neutral-100 hover:bg-white text-black font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
                            >
                                <FaEnvelope size={13} />
                                <span>Send Direct Email</span>
                            </a>

                            <button
                                onClick={handleCopyEmail}
                                className="px-4 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs sm:text-sm font-medium text-neutral-200 hover:text-white transition-colors inline-flex items-center gap-2"
                            >
                                {copiedEmail ? <FaCheck className="text-emerald-400" size={13} /> : <FaTerminal size={13} />}
                                <span>{copiedEmail ? "Copied to Clipboard" : "Copy Email Address"}</span>
                            </button>

                            <Link
                                href="/contact-me"
                                className="px-4 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs sm:text-sm font-medium text-neutral-200 hover:text-white transition-colors inline-flex items-center gap-2"
                            >
                                <span>Contact Form & Details</span>
                                <FaArrowRight size={11} />
                            </Link>
                        </div>

                        {/* Grouped Social Media Pills */}
                        <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-2">
                            <span className="text-xs font-mono text-neutral-400 mr-2">Verified Profiles:</span>
                            <a
                                href="https://github.com/DakshSingh-GitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2"
                            >
                                <FaGithub size={13} />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/daksh-singh-116566331/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2"
                            >
                                <FaLinkedin size={13} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://discord.com/users/daksh_dtlz_465"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2"
                            >
                                <FaDiscord size={13} />
                                <span>Discord</span>
                            </a>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
