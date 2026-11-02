"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { staggerContainer, fadeInUp } from "@/components/animations";
import {
    FaShieldAlt,
    FaTerminal,
    FaRobot,
    FaGithub,
    FaArrowLeft,
    FaCheckCircle,
    FaExclamationTriangle,
    FaLayerGroup,
    FaCogs,
    FaSearch,
    FaTimesCircle,
    FaServer,
    FaBookOpen,
    FaExternalLinkAlt,
    FaDownload,
    FaCodeBranch,
    FaProjectDiagram,
    FaLaptopCode,
    FaCube,
    FaFilter,
    FaDesktop,
    FaEye
} from "react-icons/fa";

export default function DocsDrivePage() {
    const [activeTab, setActiveTab] = useState<"architecture" | "documentation">("architecture");
    const [readmeContent, setReadmeContent] = useState<string>("");
    const [readmeError, setReadmeError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const loadingReadme = activeTab === "documentation" && !readmeContent && !readmeError;

    const headerVariants: Variants = {
        hidden: { scale: 0.95, opacity: 0, y: 20 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
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

    // Load README_DOCS_DRIVE.md on demand when tab switches
    useEffect(() => {
        let ignore = false;
        if (activeTab === "documentation" && !readmeContent && !readmeError) {
            fetch("/README_DOCS_DRIVE.md")
                .then((res) => {
                    if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to load README_DOCS_DRIVE.md`);
                    return res.text();
                })
                .then((data) => {
                    if (!ignore) {
                        setReadmeContent(data);
                    }
                })
                .catch((err) => {
                    if (!ignore) {
                        setReadmeError(err.message || "Failed to load documentation file");
                    }
                });
        }
        return () => {
            ignore = true;
        };
    }, [activeTab, readmeContent, readmeError]);

    const metrics = [
        { label: "CI Test Suite", value: "75 / 75", detail: "Unit, AST & Integration Tests Passing" },
        { label: "Confidence Threshold", value: "0.75+", detail: "Calibrated Precision & Drift Gate" },
        { label: "Inference Privacy", value: "100% Local", detail: "Zero-Data-Leak via Ollama & Embeddings" },
        { label: "System Phases", value: "4 Phases", detail: "Core CLI, GitHub CI, FastAPI & 3D UI" },
    ];

    const pillars = [
        {
            icon: <FaTerminal className="text-cyan-400" />,
            title: "AST Semantic Change Extraction",
            tag: "Pillar I",
            desc: "Parses unified git diffs with tree-aware AST extractors (Python and TypeScript). Pinpoints renamed CLI flags, modified parameter defaults, and deleted public endpoints before touching prose docs.",
        },
        {
            icon: <FaLayerGroup className="text-purple-400" />,
            title: "Hybrid BM25 + Dense Retrieval",
            tag: "Pillar II",
            desc: "Fuses lexical BM25 keyword matching with dense nomic-embed-text vector embeddings via Reciprocal Rank Fusion (RRF). Detects semantic drift even when code and docs share zero common words.",
        },
        {
            icon: <FaRobot className="text-emerald-400" />,
            title: "Local LLM Drift Verification",
            tag: "Pillar III",
            desc: "Local Ollama gemma4:e4b inference verifies genuine drift, assigns severity tiers (Critical, High, Medium), scores confidence (0.0-1.0), and crafts ready-to-merge replacement sentences.",
        },
        {
            icon: <FaCodeBranch className="text-blue-400" />,
            title: "Dockerized GitHub Action CI Check",
            tag: "Pillar IV",
            desc: "Runs directly on Pull Requests. Generates idempotent PR overview summaries, posts inline suggestions directly on outdated markdown lines, and flags GitHub Check Runs with file annotations.",
        },
        {
            icon: <FaServer className="text-pink-400" />,
            title: "Async FastAPI Web Gateway",
            tag: "Pillar V",
            desc: "High-performance Python backend with SQLite persistence and background task execution. Exposes 10 REST endpoints supporting real-time PR diff analysis and downloadable git fix patches.",
        },
        {
            icon: <FaDesktop className="text-indigo-400" />,
            title: "Next.js Dashboard & Retro 3D Workstation",
            tag: "Pillar VI",
            desc: "Modern Next.js 15+ frontend featuring side-by-side diff inspectors and an explorable retro 3D CRT workstation room running the interactive DocsDrive terminal inside the CRT monitor.",
        },
    ];

    const usps = [
        {
            title: "Indirect Semantic Drift Detection",
            tag: "Dense Embeddings",
            desc: "Detects documentation drift when code changes and docs share zero common vocabulary (e.g. max_workers = 16 vs 'connections stay open for one minute') via dense vector spaces.",
        },
        {
            title: "Sentence-Level Granularity",
            tag: "Line Mapping",
            desc: "Unlike tools that flag entire chapters or files, DocsDrive pinpoints the exact out-of-date sentence within multi-line paragraphs and markdown tables, linked to the source code line.",
        },
        {
            title: "PR Doc-Update Guard",
            tag: "Suppression Guard",
            desc: "If a developer already updated the documentation within the same PR, the engine detects this and suppresses redundant warnings, eliminating reviewer alert fatigue.",
        },
        {
            title: "Internal Refactor False-Positive Shield",
            tag: "Zero Noise",
            desc: "Understands public interface boundaries. Internal refactors (e.g., renaming _internal_worker -> _process_internal) produce zero false alarms.",
        },
        {
            title: "Behavioral Change Recognition",
            tag: "LLM Reasoning",
            desc: "Catches behavioral shifts such as changing synchronous routines to asynchronous promises or altering error handling strategies even when symbol names remain identical.",
        },
        {
            title: "Markdown Table Row Awareness",
            tag: "Table Parsing",
            desc: "Parses markdown configuration tables row-by-row, binding individual table parameters and default columns to AST changes.",
        },
    ];

    const demoScenarios = [
        {
            id: "01",
            name: "Renamed Flag",
            change: "--timeout-secs → --timeout",
            docImpact: "README CLI usage snippet still references deprecated flag",
            severity: "High",
            severityColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        },
        {
            id: "02",
            name: "Changed Default",
            change: "DEFAULT_PORT = 8080 → 3000",
            docImpact: "Configuration table defaults column out of sync",
            severity: "Medium",
            severityColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
        },
        {
            id: "03",
            name: "Removed Parameter",
            change: "verify_ssl=True removed from constructor",
            docImpact: "Quickstart tutorial code snippet fails with TypeError",
            severity: "Critical",
            severityColor: "text-rose-400 bg-rose-500/10 border-rose-500/30",
        },
        {
            id: "04",
            name: "Internal Refactor",
            change: "Renamed _compute_hash() helper function",
            docImpact: "Zero public impact; properly suppressed with 0 findings",
            severity: "Suppressed",
            severityColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        },
    ];

    const techStack = [
        {
            category: "Core Analysis Engine (Python)",
            items: [
                "Python 3.9+ & Pydantic v2 schemas",
                "Tree-aware AST Extractors (Python/TS)",
                "Unidiff Git Patch & Hunk Parsing",
                "Sentence-level Markdown Tokenizer",
                "GitPython Historical Commit Replay",
            ],
        },
        {
            category: "Retrieval & Local AI Tier",
            items: [
                "Local Ollama Server (gemma4:e4b)",
                "nomic-embed-text Dense Vector Embeddings",
                "Rank-BM25 Lexical Keyword Engine",
                "Reciprocal Rank Fusion (RRF) Hybrid Ranker",
                "Offline Heuristic Rule Engine Fallback",
            ],
        },
        {
            category: "GitHub CI/CD & Actions",
            items: [
                "Dockerized GitHub Action (action.yml)",
                "Idempotent PR Summary Comments",
                "Inline PR Code Suggestion Blocks",
                "GitHub Check Runs & Annotations API",
                "Configurable --fail-on-drift Gate",
            ],
        },
        {
            category: "FastAPI Web Backend",
            items: [
                "FastAPI 0.128+ with Async Uvicorn",
                "aiosqlite Asynchronous SQLite Storage",
                "Background Task Worker Queue",
                "10 REST Endpoints (PR & Diff analysis)",
                "Downloadable Git Patch Exporter",
            ],
        },
        {
            category: "Next.js Frontend & 3D CRT",
            items: [
                "Next.js 15+ App Router & React 19",
                "Tailwind CSS v4 & Lucide React",
                "Interactive 3D Retro Workstation Room",
                "In-CRT DDBIOS & DocsDrive Terminal",
                "Side-by-Side Diff & Fix Visualizer",
            ],
        },
        {
            category: "Testing & Validation",
            items: [
                "75 Automated Unit & Integration Tests",
                "Pytest 8.4+ Test Runner",
                "Historical PR Replay Benchmark",
                "Docker Compose Full-Stack Cluster",
                "Vercel Serverless Production Config",
            ],
        },
    ];

    const teamMembers = [
        { name: "Jaydev Lamror", handle: "@jaydevLamror11", github: "https://github.com/jaydevLamror11" },
        { name: "Rushan Advani", handle: "@rushanadv", github: "https://github.com/rushanadv" },
        { name: "Daksh Singh", handle: "@DakshSingh-GitHub", github: "https://github.com/DakshSingh-GitHub" },
        { name: "Sahaj Choukhani", handle: "@sahajchoukhani", github: "https://github.com/sahajchoukhani" },
    ];

    const filteredMarkdown = useMemo(() => {
        if (!readmeContent) return "";
        if (!searchQuery.trim()) return readmeContent;

        const queryLower = searchQuery.toLowerCase();
        const lines = readmeContent.split("\n");
        const matchingLines: string[] = [];
        let inMatchingSection = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.startsWith("#")) {
                inMatchingSection = line.toLowerCase().includes(queryLower);
            }
            if (inMatchingSection || line.toLowerCase().includes(queryLower)) {
                matchingLines.push(line);
            }
        }

        return matchingLines.length > 0
            ? matchingLines.join("\n")
            : `No matching sections found for "${searchQuery}". Try searching for 'BM25', 'Ollama', 'GitHub Action', 'FastAPI', or 'Scenarios'.`;
    }, [readmeContent, searchQuery]);

    return (
        <motion.div
            className="container mx-auto px-4 sm:px-6 py-10 text-white space-y-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            {/* Breadcrumb Navigation Bar */}
            <div className="flex items-center justify-between">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-300 transition-colors"
                >
                    <FaArrowLeft className="text-xs" />
                    Back to Projects
                </Link>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-xs text-cyan-300 font-mono">
                        Hacktoberfest 2026 • Problem 05 • Team HisenBugs
                    </span>
                </div>
            </div>

            {/* Hero Header */}
            <motion.div
                className="text-center bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-cyan-500/30"
                variants={headerVariants}
            >
                <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
                    <span>⚡ Problem 05 – Hack Day Sonipat</span>
                    <span className="text-cyan-400/60">&bull;</span>
                    <span className="text-purple-300">Automated Documentation Drift Detection</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight font-sans">
                    <span className="bg-gradient-to-r from-white via-cyan-200 to-indigo-400 bg-clip-text text-transparent">
                        DocsDrive
                    </span>
                </h1>

                <p className="text-sm sm:text-lg font-mono text-cyan-300/80 mb-6 max-w-3xl mx-auto">
                    Continuous CI/CD Documentation Drift Detection Engine, Local LLM Verifier &amp; Retro 3D Workstation
                </p>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-sans mb-8">
                    An automated CI check that identifies documentation rendered incorrect by code changes in a Pull Request. Traditional tools like <code className="text-cyan-300 font-mono text-sm bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">doctest</code> only evaluate executable blocks; DocsDrive analyzes raw PR diffs, extracts semantic AST changes (renamed flags, changed defaults, deleted parameters), retrieves relevant doc sentences using hybrid <code className="text-purple-300 font-mono text-sm bg-purple-950/40 px-2 py-0.5 rounded border border-purple-500/20">BM25 + nomic-embed-text</code>, and validates drift using local <code className="text-emerald-300 font-mono text-sm bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">Ollama gemma4:e4b</code> with zero data leaks.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="https://github.com/DakshSingh-GitHub/docs-drive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]"
                    >
                        <FaGithub className="text-lg" />
                        View Source Repository
                    </a>
                    <button
                        onClick={() => setActiveTab(activeTab === "architecture" ? "documentation" : "architecture")}
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:border-cyan-500/40 cursor-pointer"
                    >
                        <FaBookOpen className="text-sm text-cyan-400" />
                        {activeTab === "architecture" ? "Explore Full Specification (README)" : "Switch to Architecture Overview"}
                    </button>
                    <a
                        href="/README_DOCS_DRIVE.md"
                        download="DocsDrive_README.md"
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-semibold px-5 py-3.5 rounded-full transition-all duration-300 text-sm hover:text-white"
                        title="Download full project README specification"
                    >
                        <FaDownload className="text-xs text-cyan-300" />
                        Download README.md
                    </a>
                </div>
            </motion.div>

            {/* Metrics Strip */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {metrics.map((m, idx) => (
                    <div
                        key={idx}
                        className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:border-cyan-500/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] group"
                    >
                        <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform duration-300">
                            {m.value}
                        </div>
                        <div className="text-sm font-semibold text-white">{m.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{m.detail}</div>
                    </div>
                ))}
            </motion.div>

            {/* Platform Preview / Image Card */}
            <motion.div variants={itemVariants} className="flex justify-center">
                <motion.div
                    className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] w-full max-w-5xl group"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={{
                        rest: { borderColor: "rgba(6, 182, 212, 0.3)" },
                        hover: {
                            borderColor: "rgba(6, 182, 212, 0.7)",
                            transition: { duration: 0.5 },
                        },
                    }}
                >
                    <div className="relative aspect-video w-full bg-black/60">
                        <Image
                            src="/projects/docs_drive.png"
                            alt="DocsDrive Documentation Drift Detection Engine & 3D CRT Workstation Dashboard"
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
                        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-gray-300 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10">
                            <div className="flex items-center gap-3">
                                <span className="inline-block w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                                <span className="font-semibold text-white">DocsDrive CI Runtime &amp; Telemetry HUD</span>
                                <span className="text-gray-400 hidden sm:inline">| AST Drift Matcher • Local Ollama Verifier</span>
                            </div>
                            <div className="flex items-center gap-3 text-cyan-300 font-mono text-xs">
                                <span className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/30">
                                    /projects/docs_drive.png
                                </span>
                                <span className="text-emerald-400">75 Tests Passing</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Experience Navigation Tabs */}
            <div className="flex justify-center">
                <div className="bg-black/60 backdrop-blur-2xl p-1.5 rounded-full border border-white/10 flex items-center gap-1 shadow-lg">
                    <button
                        onClick={() => setActiveTab("architecture")}
                        className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                            activeTab === "architecture"
                                ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                        <FaProjectDiagram className="text-xs" />
                        Architecture &amp; Core Pillars
                    </button>
                    <button
                        onClick={() => setActiveTab("documentation")}
                        className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                            activeTab === "documentation"
                                ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                        <FaBookOpen className="text-xs" />
                        Full Specification (README_DOCS_DRIVE.md)
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === "architecture" ? (
                    <motion.div
                        key="architecture-view"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-16"
                    >
                        {/* Six Architectural Pillars */}
                        <div className="space-y-8">
                            <div className="text-center space-y-2">
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                                    Six Architectural Pillars
                                </h2>
                                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                                    From local AST parsing and hybrid dense embeddings to automated GitHub Action PR suggestions and retro 3D CRT visualization.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {pillars.map((p, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-300"
                                    >
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="text-2xl p-3 bg-white/5 rounded-xl border border-white/10">
                                                    {p.icon}
                                                </div>
                                                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                                    {p.tag}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white leading-snug">
                                                {p.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {p.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Pipeline Flow Visualization */}
                        <div className="space-y-8">
                            <div className="text-center space-y-2">
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                                    Core Drift Detection Pipeline
                                </h2>
                                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                                    How a single code diff flows through AST extraction, sentence parsing, vector ranking, and LLM verification to generate pinpoint PR suggestions.
                                </p>
                            </div>

                            <div className="bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                                        <div className="text-xs font-mono text-cyan-400 font-bold">STEP 01</div>
                                        <div className="font-bold text-white text-base">Diff &amp; AST Extractor</div>
                                        <div className="text-xs text-gray-400">Classifies code vs doc, extracts renamed flags &amp; parameter shifts</div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                                        <div className="text-xs font-mono text-indigo-400 font-bold">STEP 02</div>
                                        <div className="font-bold text-white text-base">Doc Parser &amp; Splitter</div>
                                        <div className="text-xs text-gray-400">Extracts exact line-level doc sentences &amp; markdown config table rows</div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                                        <div className="text-xs font-mono text-purple-400 font-bold">STEP 03</div>
                                        <div className="font-bold text-white text-base">Hybrid Matcher (RRF)</div>
                                        <div className="text-xs text-gray-400">BM25 lexical + nomic-embed-text dense embeddings fusion</div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                                        <div className="text-xs font-mono text-emerald-400 font-bold">STEP 04</div>
                                        <div className="font-bold text-white text-base">Local LLM Verifier</div>
                                        <div className="text-xs text-gray-400">Ollama gemma4:e4b verifies drift, calculates confidence &amp; fix suggestion</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Unique Selling Propositions (USPs) */}
                        <div className="space-y-8">
                            <div className="text-center space-y-2">
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                                    Unique Selling Propositions (USPs)
                                </h2>
                                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                                    Engineered to overcome the fundamental limitations of traditional doctest and regex-based approaches.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {usps.map((usp, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-3 hover:border-cyan-500/30 transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                                {usp.tag}
                                            </span>
                                            <FaCheckCircle className="text-cyan-400 text-sm" />
                                        </div>
                                        <h4 className="text-base font-bold text-white">{usp.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{usp.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Demo Scenarios Showcase */}
                        <div className="space-y-8">
                            <div className="text-center space-y-2">
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                                    Curated Demo Scenarios
                                </h2>
                                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                                    Validated across standard code drift patterns with ground truth datasets.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {demoScenarios.map((scenario) => (
                                    <motion.div
                                        key={scenario.id}
                                        variants={itemVariants}
                                        className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4 hover:border-cyan-500/30 transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-xs text-gray-500">#{scenario.id}</span>
                                                <h4 className="text-base font-bold text-white">{scenario.name}</h4>
                                            </div>
                                            <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${scenario.severityColor}`}>
                                                {scenario.severity}
                                            </span>
                                        </div>
                                        <div className="space-y-2 font-mono text-xs">
                                            <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 text-gray-300">
                                                <span className="text-cyan-400 font-semibold">Change:</span> {scenario.change}
                                            </div>
                                            <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 text-gray-300">
                                                <span className="text-purple-400 font-semibold">Doc Impact:</span> {scenario.docImpact}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Technology Stack Grid */}
                        <div className="space-y-8">
                            <div className="text-center space-y-2">
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                                    Complete Technology Stack
                                </h2>
                                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                                    End-to-end architecture pairing local Python AI with Dockerized CI pipelines and a modern Next.js 15+ frontend.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {techStack.map((stack, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4 hover:border-cyan-500/30 transition-all duration-300"
                                    >
                                        <h4 className="text-lg font-bold text-cyan-300 flex items-center gap-2 border-b border-white/10 pb-3">
                                            <FaCogs className="text-cyan-400 text-sm" />
                                            {stack.category}
                                        </h4>
                                        <ul className="space-y-2">
                                            {stack.items.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                    <FaCheckCircle className="text-cyan-400 text-xs shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Team Section */}
                        <div className="space-y-8">
                            <div className="text-center space-y-2">
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                                    Team HisenBugs
                                </h2>
                                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                                    Built for Hacktoberfest 2026 – Hack Day Sonipat (Problem 05 – Automated Documentation Drift Detection).
                                </p>
                            </div>

                            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {teamMembers.map((member, idx) => (
                                    <a
                                        key={idx}
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-7 flex flex-col items-center justify-center text-center hover:border-cyan-500/40 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] hover:-translate-y-1 transition-all duration-300 group space-y-3"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors">
                                            <FaGithub className="text-2xl text-gray-400 group-hover:text-cyan-300 transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                                                {member.name}
                                            </div>
                                            <div className="text-xs text-cyan-400 font-mono">
                                                {member.handle}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    /* DOCUMENTATION TAB */
                    <motion.div
                        key="documentation-view"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Doc Search Toolbar */}
                        <div className="bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10 p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="relative w-full md:w-96">
                                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                <input
                                    type="text"
                                    placeholder="Search AST, BM25, Ollama, API endpoints, or CI actions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>

                            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
                                <span className="text-xs text-gray-400 font-mono">
                                    {readmeContent ? "Specification Active" : "Loading..."}
                                </span>
                                <a
                                    href="/README_DOCS_DRIVE.md"
                                    download="README_DOCS_DRIVE.md"
                                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 transition-colors"
                                >
                                    <FaDownload />
                                    Download File
                                </a>
                                <a
                                    href="/README_DOCS_DRIVE.md"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors"
                                >
                                    <FaExternalLinkAlt />
                                    Open Raw
                                </a>
                            </div>
                        </div>

                        {/* Markdown Reader Body */}
                        <div className="bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 sm:p-10 md:p-12 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            {loadingReadme ? (
                                <div className="flex flex-col items-center justify-center py-24 space-y-4">
                                    <div className="w-10 h-10 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
                                    <p className="text-gray-400 text-sm font-mono">
                                        Loading DocsDrive comprehensive specification (README_DOCS_DRIVE.md)...
                                    </p>
                                </div>
                            ) : readmeError ? (
                                <div className="text-center py-16 space-y-4">
                                    <FaTimesCircle className="text-4xl text-rose-500 mx-auto" />
                                    <h3 className="text-xl font-bold text-white">Failed to load specification</h3>
                                    <p className="text-gray-400 text-sm">{readmeError}</p>
                                    <a
                                        href="/README_DOCS_DRIVE.md"
                                        target="_blank"
                                        className="inline-block mt-4 text-cyan-400 underline text-sm"
                                    >
                                        Open /README_DOCS_DRIVE.md directly
                                    </a>
                                </div>
                            ) : (
                                <div className="prose prose-invert max-w-none space-y-4 text-gray-200 leading-relaxed break-words">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            h1: ({ children }) => (
                                                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-10 mb-6 pb-3 border-b border-cyan-500/30 tracking-tight">
                                                    {children}
                                                </h1>
                                            ),
                                            h2: ({ children }) => (
                                                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-200 mt-8 mb-4 border-b border-white/10 pb-2">
                                                    {children}
                                                </h2>
                                            ),
                                            h3: ({ children }) => (
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mt-6 mb-3">
                                                    {children}
                                                </h3>
                                            ),
                                            h4: ({ children }) => (
                                                <h4 className="text-lg font-semibold text-cyan-300 mt-4 mb-2">
                                                    {children}
                                                </h4>
                                            ),
                                            p: ({ children }) => (
                                                <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                                                    {children}
                                                </p>
                                            ),
                                            ul: ({ children }) => (
                                                <ul className="list-disc list-inside space-y-1.5 my-4 text-gray-300 text-sm sm:text-base">
                                                    {children}
                                                </ul>
                                            ),
                                            ol: ({ children }) => (
                                                <ol className="list-decimal list-inside space-y-1.5 my-4 text-gray-300 text-sm sm:text-base">
                                                    {children}
                                                </ol>
                                            ),
                                            li: ({ children }) => (
                                                <li className="text-gray-300 leading-relaxed">
                                                    {children}
                                                </li>
                                            ),
                                            code: ({ children, className }) => {
                                                const isInline = !className;
                                                return isInline ? (
                                                    <code className="bg-cyan-950/40 text-cyan-200 font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded border border-cyan-500/20">
                                                        {children}
                                                    </code>
                                                ) : (
                                                    <code className="block bg-black/60 text-gray-200 font-mono text-xs sm:text-sm p-4 rounded-xl border border-white/10 overflow-x-auto my-4">
                                                        {children}
                                                    </code>
                                                );
                                            },
                                            pre: ({ children }) => (
                                                <pre className="bg-black/60 border border-white/10 rounded-xl overflow-x-auto my-4">
                                                    {children}
                                                </pre>
                                            ),
                                            table: ({ children }) => (
                                                <div className="overflow-x-auto my-6">
                                                    <table className="w-full text-left border-collapse border border-white/10 text-xs sm:text-sm">
                                                        {children}
                                                    </table>
                                                </div>
                                            ),
                                            th: ({ children }) => (
                                                <th className="bg-white/5 border border-white/10 p-3 font-semibold text-cyan-300">
                                                    {children}
                                                </th>
                                            ),
                                            td: ({ children }) => (
                                                <td className="border border-white/10 p-3 text-gray-300">
                                                    {children}
                                                </td>
                                            ),
                                            blockquote: ({ children }) => (
                                                <blockquote className="border-l-4 border-cyan-500 pl-4 py-1 my-4 text-gray-400 italic bg-white/5 rounded-r">
                                                    {children}
                                                </blockquote>
                                            ),
                                        }}
                                    >
                                        {filteredMarkdown}
                                    </ReactMarkdown>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

