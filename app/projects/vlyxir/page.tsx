"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/components/animations";
import { 
    FaBolt, 
    FaCode, 
    FaBrain, 
    FaShieldAlt, 
    FaUsers, 
    FaDesktop, 
    FaTrophy, 
    FaGraduationCap, 
    FaTerminal, 
    FaCogs, 
    FaGithub, 
    FaArrowRight, 
    FaCheckCircle, 
    FaClock, 
    FaExclamationTriangle, 
    FaTimesCircle, 
    FaLayerGroup,
    FaMicrochip
} from "react-icons/fa";

export default function VlyxirPage() {
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

    const metrics = [
        { label: "Problem Bank", value: "295+", detail: "Algorithmic Challenges" },
        { label: "Worker IPC Latency", value: "< 1ms", detail: "Sub-Millisecond Turnaround" },
        { label: "Architectural Pillars", value: "10", detail: "Interconnected Subsystems" },
        { label: "Target Platforms", value: "3", detail: "Web, PWA & Electron Desktop" },
    ];

    const pillars = [
        {
            icon: <FaBolt className="text-amber-400" />,
            title: "Online Judge Engine (Arena)",
            tag: "Pillar I",
            desc: "Sub-millisecond persistent worker pool (`runner_worker.py`) using compile-once stdin/stdout JSON IPC. Eliminates OS subprocess overhead across 100+ test cases with sub-case execution profiling.",
        },
        {
            icon: <FaTerminal className="text-emerald-400" />,
            title: "Cloud IDE & WASM Forge",
            tag: "Pillar II",
            desc: "Full in-browser WebAssembly CPython 3.11 sandbox powered by Pyodide in a dedicated WebWorker. Enables offline, zero-latency execution alongside server-backed multi-file workspaces.",
        },
        {
            icon: <FaTrophy className="text-purple-400" />,
            title: "1v1 Real-Time Code Duels",
            tag: "Pillar III",
            desc: "Multiplayer competitive arena with live matchmaking, 5-second countdown versus screens, real-time opponent keystroke & testcase progress broadcasts, live emotes, and +10/-5 ELO rating.",
        },
        {
            icon: <FaUsers className="text-blue-400" />,
            title: "Collaborative Interview Suite",
            tag: "Pillar IV",
            desc: "Technical interview suite featuring real-time synchronized Monaco editor, dual-role interviewer/candidate controls, execution lock toggles, private interviewer notes, and candidate verdict logs.",
        },
        {
            icon: <FaBrain className="text-pink-400" />,
            title: "AI Code Intelligence Tier",
            tag: "Pillar V",
            desc: "Multi-model reasoning tier combining Groq (Qwen 2.5 32B on LPUs) for sub-second Big-O complexity analysis and Google Gemini (2.5 Flash / Pro) for security audits and automated refactor diffs.",
        },
        {
            icon: <FaGraduationCap className="text-cyan-400" />,
            title: "Interactive DSA Curriculum",
            tag: "Pillar VI",
            desc: "Structured computer science curriculum spanning 16 core categories with KaTeX mathematical formulas, interactive theory, code playgrounds, and direct jump-links to related judge problems.",
        },
        {
            icon: <FaLayerGroup className="text-indigo-400" />,
            title: "Community & Discussion Forums",
            tag: "Pillar VII",
            desc: "Full community discussion platform with channel filters, markdown authoring with live split-preview, embedded challenge badges, nested comment threads, and local/cloud draft autosave.",
        },
        {
            icon: <FaShieldAlt className="text-rose-400" />,
            title: "Identity & Multi-Account Switching",
            tag: "Pillar VIII",
            desc: "Supabase JWT session architecture with a custom multi-account switcher allowing seamless transitions between personal, work, and competitive pseudonyms without re-authenticating.",
        },
        {
            icon: <FaCogs className="text-teal-400" />,
            title: "Admin Governance & Telemetry",
            tag: "Pillar IX",
            desc: "Super-admin governance portal providing real-time platform telemetry, user role hierarchy moderation (Free, Pro Tiers 1-3, Super Admin), problem inventory audits, and system toggles.",
        },
        {
            icon: <FaDesktop className="text-violet-400" />,
            title: "Multi-Platform Native Delivery",
            tag: "Pillar X",
            desc: "Single codebase delivering an edge-rendered Next.js 16 Web App, an installable Progressive Web App (PWA) with Workbox offline caching, and native Electron 33 desktop builds for macOS & Windows.",
        },
    ];

    const executionSteps = [
        {
            step: "01",
            title: "Client Submission & Token Injection",
            desc: "The client dispatches the Python code solution along with the Supabase HS256 JWT access token via an HTTP POST request to the FastAPI judge endpoint.",
        },
        {
            step: "02",
            title: "AST Security Scanner & Sandboxing",
            desc: "The backend statically inspects the Abstract Syntax Tree (AST) for banned system calls, prohibited imports (os, sys, socket), and executes pre-run validation checks.",
        },
        {
            step: "03",
            title: "Supervisor & Watchdog Allocation",
            desc: "The runner supervisor thread pool allocates a watchdog timer enforcing strict per-testcase execution timeouts and memory limit watchdogs via psutil.",
        },
        {
            step: "04",
            title: "Warm Worker JSON IPC Execution",
            desc: "A pre-warmed worker process in the persistent worker pool compiles the user code once and evaluates 100+ test cases sequentially through high-throughput stdin/stdout JSON IPC.",
        },
        {
            step: "05",
            title: "Verdict Generation & Telemetry Return",
            desc: "Execution metrics (wall time, memory footprint, sub-case outputs) are aggregated into a standardized verdict and streamed back to the client.",
        },
    ];

    const techStack = [
        { category: "Frontend Core", items: ["Next.js 16 (App Router)", "React 19", "TypeScript 5", "Tailwind CSS v4", "Monaco Editor"] },
        { category: "Backend Engine", items: ["Python 3.10+", "FastAPI", "Persistent Worker IPC", "AST Static Scanner", "psutil Watchdogs"] },
        { category: "AI Inference", items: ["Groq SDK (Qwen 2.5 32B)", "Google GenAI (Gemini 2.5 Flash / Pro)", "Edge API Handlers"] },
        { category: "Persistence & Cloud", items: ["Supabase PostgreSQL 15", "Supabase Auth (JWT)", "Row-Level Security (RLS)", "Realtime WebSockets"] },
        { category: "Client Sandbox", items: ["Pyodide (WebAssembly)", "CPython 3.11 Runtime", "Web Worker Thread", "Zero-Latency Local Execution"] },
        { category: "Desktop & PWA", items: ["Electron 33", "Electron Builder", "Next-PWA / Workbox", "macOS Universal & Windows NSIS"] },
    ];

    const verdicts = [
        { code: "AC", title: "Accepted", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", icon: <FaCheckCircle />, desc: "All test cases passed within allocated time and memory constraints." },
        { code: "WA", title: "Wrong Answer", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30", icon: <FaTimesCircle />, desc: "The generated standard output did not match expected solution output." },
        { code: "TLE", title: "Time Limit Exceeded", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", icon: <FaClock />, desc: "The execution time exceeded the problem's strict sub-second threshold." },
        { code: "RE", title: "Runtime Error", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", icon: <FaExclamationTriangle />, desc: "Code terminated abnormally due to an unhandled exception or crash." },
    ];

    return (
        <motion.div 
            className="container mx-auto px-4 sm:px-6 py-10 text-white space-y-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            {/* Hero Header */}
            <motion.div 
                className="text-center bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-purple-500/30"
                variants={headerVariants}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Version 7.3.20 &bull; Industrial-Grade Coding Platform
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight font-sans">
                    <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                        Vlyxir
                    </span>
                    <span className="text-sm sm:text-lg block font-normal text-purple-300/80 mt-2 font-mono">
                        pronounced /vlɪk-sɪər/
                    </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-sans mb-8">
                    An industrial-grade, full-lifecycle coding ecosystem and cloud development environment engineered for competitive programmers, interviewers, and students. Fusing a sub-millisecond Python judging engine with WebAssembly client-side execution, real-time 1v1 duels, live mock interviews, and multi-model AI code intelligence.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="https://github.com/DakshSingh-GitHub/CodeJudge"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(147,51,234,0.6)]"
                    >
                        <FaGithub className="text-lg" />
                        View Source Repository
                    </a>
                    <Link
                        href="/DOCUMENTATION.md"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:border-purple-500/40"
                    >
                        Read Full Architecture (2,100+ lines)
                        <FaArrowRight className="text-xs text-purple-400" />
                    </Link>
                </div>
            </motion.div>

            {/* Metrics Strip */}
            <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
                {metrics.map((m, idx) => (
                    <div 
                        key={idx}
                        className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:border-purple-500/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                    >
                        <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                            {m.value}
                        </div>
                        <div className="text-sm font-semibold text-white">{m.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{m.detail}</div>
                    </div>
                ))}
            </motion.div>

            {/* Platform Preview Showcase */}
            <motion.div variants={itemVariants} className="flex justify-center">
                <motion.div 
                    className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-[0_0_50px_rgba(147,51,234,0.25)] w-full max-w-5xl"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={{
                        rest: { borderColor: "rgba(168, 85, 247, 0.3)" },
                        hover: { 
                            borderColor: "rgba(168, 85, 247, 0.7)",
                            transition: { duration: 0.5 }
                        }
                    }}
                >
                    <motion.div
                        variants={{
                            rest: { scale: 1 },
                            hover: { 
                                scale: 1.02,
                                transition: { duration: 0.6, ease: "easeInOut" }
                            }
                        }}
                    >
                        <Image
                            src="/projects/code_judge.png"
                            alt="Vlyxir Platform Interface"
                            height={600}
                            width={1200}
                            className="w-full object-cover"
                            priority
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none flex items-end p-6 sm:p-8">
                        <div>
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-600/80 text-white mb-2 inline-block">
                                Live Interface
                            </span>
                            <h3 className="text-lg sm:text-2xl font-bold text-white">
                                Modern Design Experience (MDE) &amp; Split Arena Layout
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mt-1">
                                Monaco code editor with sub-case execution profiling, live testcase runner, and instant pass/fail feedback.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Dual-Experience Paradigm */}
            <motion.div variants={itemVariants} className="space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                        Dual-Experience Paradigm
                    </h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        Vlyxir provides two distinct interface philosophies that users can toggle dynamically to suit their environment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black/30 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                            (web) Routes &bull; Classic View
                        </div>
                        <h3 className="text-2xl font-bold text-white">Classic Web Interface</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            A clean, functional, LeetCode-familiar presentation optimized for fast readability and standard scrolling workflows. Ideal for inspecting tabular data, reviewing submission histories, and browsing documentation.
                        </p>
                        <div className="pt-2 border-t border-white/10 text-xs text-gray-400 flex flex-wrap gap-2">
                            <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/5 font-mono">/code-judge</span>
                            <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/5 font-mono">/code-ide</span>
                            <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/5 font-mono">/code-analysis</span>
                        </div>
                    </div>

                    <div className="bg-black/30 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/30 hover:border-purple-500/60 shadow-[0_0_30px_rgba(147,51,234,0.15)] transition-all duration-300 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                            (mde) Routes &bull; Modern Design Experience
                        </div>
                        <h3 className="text-2xl font-bold text-white">Modern Design Experience (MDE)</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Strict viewport containment (<code className="text-purple-300 font-mono text-xs">h-screen overflow-hidden</code>) operating like a native desktop operating system window. Features dark glassmorphism, dockable split panels, ambient radial glows, and GPU-accelerated micro-interactions.
                        </p>
                        <div className="pt-2 border-t border-white/10 text-xs text-gray-400 flex flex-wrap gap-2">
                            <span className="bg-purple-900/30 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/20 font-mono">/arena</span>
                            <span className="bg-purple-900/30 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/20 font-mono">/forge</span>
                            <span className="bg-purple-900/30 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/20 font-mono">/duel</span>
                            <span className="bg-purple-900/30 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/20 font-mono">/interview</span>
                            <span className="bg-purple-900/30 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/20 font-mono">/learn</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 10 Pillars of Vlyxir */}
            <motion.div variants={itemVariants} className="space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
                        <span className="text-purple-400">🏛</span> The 10 Core Architectural Pillars
                    </h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        Every facet of competitive programming, real-time collaboration, and automated evaluation unified into ten interconnected subsystems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pillars.map((pillar, index) => (
                        <div 
                            key={index}
                            className="bg-black/30 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-purple-500/40 hover:bg-black/40 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {pillar.icon}
                                    </div>
                                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                                        {pillar.tag}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* How It Works: Execution Pipeline */}
            <motion.div 
                className="bg-black/30 backdrop-blur-2xl p-8 sm:p-12 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8"
                variants={itemVariants}
            >
                <div className="text-center space-y-2">
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
                        <FaMicrochip className="text-purple-400" /> High-Performance Execution Pipeline
                    </h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        Eliminating the subprocess overhead of traditional online judges through a persistent warm worker pool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {executionSteps.map((step, idx) => (
                        <div 
                            key={idx}
                            className="relative bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300"
                        >
                            <div>
                                <div className="text-3xl font-mono font-extrabold text-purple-400/40 mb-3">
                                    {step.step}
                                </div>
                                <h4 className="font-bold text-white text-base mb-2">
                                    {step.title}
                                </h4>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-2xl text-xs sm:text-sm text-purple-200 flex items-center gap-3">
                    <span className="text-xl">⚡</span>
                    <div>
                        <strong className="font-semibold text-white">Architectural Optimization:</strong> Traditional judges spawn a new process (`python solution.py`) per test case, incurring 100-200ms latency. Vlyxir compiles once into a persistent warm worker and streams all test cases over standard JSON IPC in under 5 milliseconds.
                    </div>
                </div>
            </motion.div>

            {/* Verdict System Breakdown */}
            <motion.div variants={itemVariants} className="space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                        Comprehensive Verdict System
                    </h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        Rigorous automated evaluation returning accurate verdicts across time, memory, and syntax bounds.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {verdicts.map((v, index) => (
                        <div 
                            key={index} 
                            className={`p-6 rounded-2xl border ${v.border} ${v.bg} backdrop-blur-xl transition-all duration-300 hover:scale-105 flex flex-col justify-between`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-2xl ${v.color}`}>{v.icon}</span>
                                    <span className={`font-mono font-extrabold text-sm ${v.color}`}>{v.code}</span>
                                </div>
                                <h4 className="font-bold text-white text-lg mb-2">{v.title}</h4>
                                <p className="text-gray-300 text-xs leading-relaxed">{v.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Tech Stack Matrix */}
            <motion.div 
                className="bg-black/30 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8"
                variants={itemVariants}
            >
                <div className="text-center space-y-2">
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
                        <FaCode className="text-purple-400" /> Technology Stack Matrix
                    </h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        State-of-the-art toolchain ensuring industrial reliability, edge deployment, and sub-millisecond execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techStack.map((tech, idx) => (
                        <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400">
                                {tech.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {tech.items.map((item, i) => (
                                    <span 
                                        key={i} 
                                        className="text-xs px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-gray-200 font-medium"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Final Call to Action */}
            <motion.div className="text-center pt-8 pb-4" variants={itemVariants}>
                <div className="bg-gradient-to-r from-purple-900/40 via-black/50 to-indigo-900/40 border border-purple-500/30 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-[0_0_50px_rgba(147,51,234,0.2)]">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Experience the Vlyxir Platform
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
                        Explore the monorepo codebase, review the complete 2,100+ line platform documentation, or try the judge engine.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="https://github.com/DakshSingh-GitHub/CodeJudge"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300 hover:scale-105 hover:bg-purple-700"
                        >
                            <FaGithub className="w-5 h-5" />
                            View on GitHub
                        </a>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-full border border-white/15 transition-all duration-300"
                        >
                            &larr; Back to All Projects
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

