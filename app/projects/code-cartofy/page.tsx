"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { staggerContainer, fadeInUp } from "@/components/animations";
import {
    FaProjectDiagram,
    FaSitemap,
    FaSyncAlt,
    FaBrain,
    FaShieldAlt,
    FaCode,
    FaDatabase,
    FaGithub,
    FaArrowLeft,
    FaTimesCircle,
    FaLayerGroup,
    FaMicrochip,
    FaFolderOpen,
    FaSearch,
    FaDownload,
    FaBookOpen,
    FaExternalLinkAlt
} from "react-icons/fa";

export default function CodeCartofyPage() {
    const [activeTab, setActiveTab] = useState<"architecture" | "documentation">("architecture");
    const [readmeContent, setReadmeContent] = useState<string>("");
    const [readmeError, setReadmeError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedSectionFilter, setSelectedSectionFilter] = useState<string>("all");

    // Derived loading state to prevent cascading renders in effects
    const loadingReadme = activeTab === "documentation" && !readmeContent && !readmeError;

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

    // Load README.md dynamically when user toggles documentation tab
    useEffect(() => {
        let ignore = false;
        if (activeTab === "documentation" && !readmeContent && !readmeError) {
            fetch("/README.md")
                .then((res) => {
                    if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to load CodeCartofy README.md`);
                    return res.text();
                })
                .then((data) => {
                    if (!ignore) {
                        setReadmeContent(data);
                    }
                })
                .catch((err) => {
                    if (!ignore) {
                        setReadmeError(err.message || "Failed to load README document");
                    }
                });
        }
        return () => {
            ignore = true;
        };
    }, [activeTab, readmeContent, readmeError]);

    const metrics = [
        { label: "Cycle Scan Complexity", value: "O(V + E)", detail: "Linear DFS Back-Edge Search" },
        { label: "Applied Physical Forces", value: "4 Forces", detail: "Coulomb, Spring, Center, Collide" },
        { label: "Privacy Guarantee", value: "100% Client", detail: "Zero-Server In-Browser Babel AST" },
        { label: "Architectural Health", value: "0 - 100", detail: "Coupling & Modularity Engine" },
    ];

    const pillars = [
        {
            icon: <FaCode className="text-purple-400" />,
            title: "Zero-Server AST Parsing Engine",
            tag: "Pillar I",
            desc: "Parses raw ECMAScript/TypeScript into concrete Abstract Syntax Trees directly inside the browser using @babel/parser v8 with JSX, TypeScript, and errorRecovery enabled. Zero source code is ever dispatched to external servers.",
        },
        {
            icon: <FaSyncAlt className="text-rose-400" />,
            title: "Linear O(V + E) DFS Cycle Detection",
            tag: "Pillar II",
            desc: "Depth-First Search traversal with recursion-stack back-edge tracking to pinpoint circular imports. Employs lexicographically minimal canonical signature rotation to deduplicate k-node loops into single actionable warnings.",
        },
        {
            icon: <FaProjectDiagram className="text-cyan-400" />,
            title: "Force-Directed 2D Canvas Engine",
            tag: "Pillar III",
            desc: "High-throughput HTML5 2D canvas direct rendering powered by d3-force physics. Eliminates DOM layout thrashing to sustain 60 FPS simulations across hundreds of modules with interactive pan, zoom, and freeze toggles.",
        },
        {
            icon: <FaSitemap className="text-emerald-400" />,
            title: "Dynamic Fan-In Sizing Mechanics",
            tag: "Pillar IV",
            desc: "Dynamically sizes node radii as a linear function of incoming import degree (R(v) = min(25, 5 + inDegree * 2.5)). Instantly exposes heavily coupled 'God Modules' anchoring excessive architectural gravity.",
        },
        {
            icon: <FaBrain className="text-pink-400" />,
            title: "AI Architectural Copilot & SPOFs",
            tag: "Pillar V",
            desc: "Automated architectural governance calculating codebase health (0-100), coupling density, and modularity. Flags fragile Single Points of Failure (SPOFs) exceeding dynamic threshold tau = max(2, floor(0.25 * |V|)).",
        },
        {
            icon: <FaFolderOpen className="text-amber-400" />,
            title: "Tri-Channel Repository Ingestion",
            tag: "Pillar VI",
            desc: "Ingests public GitHub repositories via REST v3 tree recursion and 8-stream batched concurrency, parses local folders via HTML5 WebKit directory entry streaming, and includes pre-configured sample testbeds.",
        },
        {
            icon: <FaDatabase className="text-teal-400" />,
            title: "Dual-Tier Scoped Persistence",
            tag: "Pillar VII",
            desc: "Account-isolated browser LocalStorage with automatic quota degradation fallback (stripping code payloads for older entries) paired with asynchronous Supabase PostgreSQL JSONB cloud backup.",
        },
        {
            icon: <FaShieldAlt className="text-indigo-400" />,
            title: "Edge Guard & Vlyxir SSO Cross-Auth",
            tag: "Pillar VIII",
            desc: "Next.js Edge Middleware protecting /cartofy route boundaries, 7-day signed session cookies, database-to-database cross-authentication with Vlyxir profiles, and a frictionless zero-login guest sandbox.",
        },
    ];

    const executionSteps = [
        {
            step: "01",
            title: "Repository Ingestion",
            desc: "Sources ingested from GitHub REST v3 Git Trees, HTML5 WebKit folder drop, or pre-built architectural testbeds into memory.",
        },
        {
            step: "02",
            title: "AST Compilation",
            desc: "Source files parsed via @babel/parser v8 with JSX and TypeScript plugins, extracting all ImportDeclaration and Export statements.",
        },
        {
            step: "03",
            title: "Path Resolution & Topology",
            desc: "resolveImportPath probes candidate extensions (.ts, .tsx, /index.ts) and path aliases (@/) to compile directed edges and in/out degrees.",
        },
        {
            step: "04",
            title: "DFS Cycle Discovery",
            desc: "Linear O(V+E) recursion-stack back-edge search identifies circular dependencies, normalized by canonical lexicographical rotation.",
        },
        {
            step: "05",
            title: "Physics & Copilot Scoring",
            desc: "d3-force converges 4 forces (Coulomb, Spring, Center, Collide) on canvas while AI Copilot computes Health, Coupling, and SPOFs.",
        },
    ];

    const techStack = [
        {
            category: "Frontend Core & Canvas",
            items: ["Next.js 16 (App Router)", "React 19", "Tailwind CSS v4", "d3-force 3.0", "react-force-graph-2d", "HTML5 Canvas 2D"],
        },
        {
            category: "AST Engine & Ingestion",
            items: ["@babel/parser 8.0+", "ESM Lexical Scope", "WebKit Directory API", "GitHub REST v3 API", "Batched Concurrency (8x)"],
        },
        {
            category: "Graph Theory & Math",
            items: ["Linear DFS (O(V+E))", "Canonical Cycle Rotation", "Inverted Index Adjacency", "Fan-In / Fan-Out Metrics", "SPOF Blast Radius"],
        },
        {
            category: "Persistence & Cloud",
            items: ["Account-Scoped LocalStorage", "Quota Degradation Engine", "Supabase PostgreSQL 15", "Row-Level Security (RLS)", "JSONB Payloads"],
        },
        {
            category: "Security & Identity",
            items: ["Next.js Edge Middleware", "Signed Session Cookies", "Vlyxir Single Sign-On (SSO)", "check_username_available RPC", "Guest Sandbox"],
        },
        {
            category: "Diagnostics & Export",
            items: ["AI Copilot Governance", "In-Browser File Inspector", "High-DPI PNG Diagram Export", "JSON Graph Export", "Monospace Visualizer"],
        },
    ];

    const taxonomy = [
        { role: "Route / Page", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/30", hex: "#6366f1", desc: "Next.js App Router pages, API endpoints, layouts, and loading boundaries." },
        { role: "UI Component", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", hex: "#10b981", desc: "Reusable React UI primitives and widgets (.tsx, .jsx, capitalized filenames)." },
        { role: "Utility / Helper", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", hex: "#f59e0b", desc: "Business logic, algorithmic parsers, API clients, and data transformation services." },
        { role: "Module / Config", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", hex: "#8b5cf6", desc: "Configuration matrices, type definitions, constant dictionaries, and schemas." },
        { role: "Circular Dependency", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30", hex: "#ef4444", desc: "Entangled modules caught in recursive import loops, rendered with a red pulsing halo." },
    ];

    const mathModels = [
        {
            name: "Coupling Score (C)",
            formula: "C = min(100, floor((|E| / |V|) * 25))",
            desc: "Quantifies average import density. Scores under 25 reflect clean decoupling; scores approaching 100 signal high coupling friction.",
        },
        {
            name: "Modularity Score (M)",
            formula: "M = max(10, min(100, 100 - floor((12 * |SPOF| + 20 * |Cycles|) / 2)))",
            desc: "Measures architectural isolation resilience. Circular loops incur high penalties (20 pts) due to runtime evaluation crash risks.",
        },
        {
            name: "Composite Health Score (H)",
            formula: "H = max(5, floor(0.6 * M + 0.4 * (100 - C)))",
            desc: "Harmonized 0-100 rating balancing modular resilience (60% weight) against inverse coupling density (40% weight).",
        },
        {
            name: "SPOF Detection Threshold (tau)",
            formula: "tau = max(2, floor(|V| * 0.25))",
            desc: "Dynamic bottleneck trigger. Any non-route node imported by more than 25% of the codebase is stratified into Medium, High, or Critical risk.",
        },
    ];

    const quickDocSections = [
        { id: "all", label: "Full Specification" },
        { id: "1. Executive Summary", label: "Executive Summary" },
        { id: "2. High-Level System Architecture", label: "System Architecture" },
        { id: "3. Abstract Syntax Tree", label: "AST Compilation Engine" },
        { id: "4. Cycle Detection", label: "DFS Cycle Algorithms" },
        { id: "5. Force-Directed 2D Graph Physics", label: "2D Force Physics" },
        { id: "6. AI Architectural Copilot", label: "AI Copilot & Scoring" },
        { id: "7. Repository Ingestion", label: "Ingestion Pipelines" },
        { id: "8. Dual-Tier Persistence", label: "Dual-Tier Storage" },
        { id: "9. Identity, Authentication", label: "Auth & Vlyxir SSO" },
        { id: "10. Database Schema", label: "SQL & Supabase Schema" },
    ];

    // Filtered markdown content for search or section filtering
    const filteredContent = useMemo(() => {
        if (!readmeContent) return "";
        let content = readmeContent;

        if (selectedSectionFilter !== "all") {
            const lines = content.split("\n");
            let capturing = false;
            const capturedLines: string[] = [];

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                if (line.startsWith("## ")) {
                    if (line.toLowerCase().includes(selectedSectionFilter.toLowerCase())) {
                        capturing = true;
                    } else if (capturing) {
                        break;
                    }
                }
                if (capturing) {
                    capturedLines.push(line);
                }
            }
            content = capturedLines.length > 0 ? capturedLines.join("\n") : content;
        }

        if (!searchQuery.trim()) return content;

        const queryLower = searchQuery.toLowerCase();
        const lines = content.split("\n");
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
            : `No architectural sections found matching "${searchQuery}". Try searching for 'AST', 'Babel', 'DFS', 'Physics', or 'SPOF'.`;
    }, [readmeContent, searchQuery, selectedSectionFilter]);

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
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors"
                >
                    <FaArrowLeft className="text-xs" />
                    Back to Projects
                </Link>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                    <span className="text-xs text-purple-300/90 font-mono">Zero-Server Client Privacy • AST Engine</span>
                </div>
            </div>

            {/* Hero Header */}
            <motion.div
                className="text-center bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-purple-500/30"
                variants={headerVariants}
            >
                <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold mb-6">
                    <span>🗺️ AST Cartography &amp; Topological Copilot</span>
                    <span className="text-purple-400/60">&bull;</span>
                    <span className="text-emerald-300">Next.js 16 &amp; React 19</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight font-sans">
                    <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-400 bg-clip-text text-transparent">
                        CodeCartofy
                    </span>
                </h1>

                <p className="text-sm sm:text-lg font-mono text-purple-300/80 mb-6 max-w-2xl mx-auto">
                    Interactive Codebase Cartography, Abstract Syntax Tree Dependency Graphing &amp; Architectural Copilot
                </p>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-sans mb-8">
                    An interactive, browser-native codebase cartography and architectural diagnostics platform. Parses raw JavaScript, TypeScript, and JSX/TSX source code directly into concrete Abstract Syntax Trees (AST) via <code className="text-purple-300 font-mono text-sm bg-purple-950/40 px-2 py-0.5 rounded border border-purple-500/20">@babel/parser</code>, constructs directed dependency graphs, executes linear <code className="text-rose-300 font-mono text-sm bg-rose-950/40 px-2 py-0.5 rounded border border-rose-500/20">O(V + E)</code> DFS circular dependency discovery, and simulates real-time 2D force-directed canvas physics with an autonomous AI Architectural Copilot.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="https://github.com/DakshSingh-GitHub/code-cartofy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(147,51,234,0.6)]"
                    >
                        <FaGithub className="text-lg" />
                        View Source Repository
                    </a>
                    <button
                        onClick={() => setActiveTab(activeTab === "architecture" ? "documentation" : "architecture")}
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:border-purple-500/40 cursor-pointer"
                    >
                        <FaBookOpen className="text-sm text-purple-400" />
                        {activeTab === "architecture" ? "Explore Full Architecture (3,400+ lines)" : "Switch to Architecture Overview"}
                    </button>
                    <a
                        href="/README.md"
                        download="CodeCartofy_Architecture_README.md"
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-semibold px-5 py-3.5 rounded-full transition-all duration-300 text-sm hover:text-white"
                        title="Download full architectural documentation markdown file"
                    >
                        <FaDownload className="text-xs text-purple-300" />
                        Download README.md
                    </a>
                </div>
            </motion.div>

            {/* Experience Navigation Tabs */}
            <div className="flex justify-center">
                <div className="bg-black/60 backdrop-blur-2xl p-1.5 rounded-full border border-white/10 flex items-center gap-1 shadow-lg">
                    <button
                        onClick={() => setActiveTab("architecture")}
                        className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                            activeTab === "architecture"
                                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                        <FaProjectDiagram className="text-xs" />
                        Architecture &amp; Systems Overview
                    </button>
                    <button
                        onClick={() => setActiveTab("documentation")}
                        className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                            activeTab === "documentation"
                                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                        <FaBookOpen className="text-xs" />
                        Interactive Documentation &amp; Search
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
                        {/* Metrics Strip */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                        >
                            {metrics.map((m, idx) => (
                                <div
                                    key={idx}
                                    className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:border-purple-500/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] group"
                                >
                                    <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform duration-300">
                                        {m.value}
                                    </div>
                                    <div className="text-sm font-semibold text-white">{m.label}</div>
                                    <div className="text-xs text-gray-400 mt-1">{m.detail}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Interactive Platform Preview Showcase */}
                        <motion.div variants={itemVariants} className="flex justify-center">
                            <motion.div
                                className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-[0_0_50px_rgba(147,51,234,0.25)] w-full max-w-5xl group"
                                whileHover={{ borderColor: "rgba(168, 85, 247, 0.6)" }}
                                transition={{ duration: 0.4 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                >
                                    <Image
                                        src="/projects/code_cartofy.png"
                                        alt="CodeCartofy 2D Force-Directed Canvas and Copilot Interface"
                                        height={675}
                                        width={1200}
                                        className="w-full object-cover"
                                        priority
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none flex items-end p-6 sm:p-8">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-600/80 text-white inline-block">
                                                Live Interactive Canvas
                                            </span>
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-600/80 text-white inline-block">
                                                DFS Cycle Spotlight
                                            </span>
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-600/80 text-white inline-block">
                                                AI Copilot Health: 84 / 100
                                            </span>
                                        </div>
                                        <h3 className="text-lg sm:text-2xl font-bold text-white">
                                            Force-Directed 2D Cartography &amp; AI Architectural Copilot
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-300 max-w-3xl mt-1">
                                            Dynamic node sizing based on inbound Fan-In imports, crimson pulsing halos highlighting circular dependency back-edges, floating HUD camera controls, and real-time modularity health scoring.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Tri-Ingestion Pipeline Modes */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="text-center space-y-2">
                                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                                    Zero-Server Ingestion Channels
                                </h2>
                                <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                                    CodeCartofy inverts traditional code analysis: proprietary source files never leave the browser sandbox.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-black/30 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl">
                                        <FaGithub />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">GitHub REST API Ingestion</h3>
                                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                                        Fetches complete Git Trees recursively in one network call. Implements 8-stream batched concurrency and directory priority scoring to retrieve up to 150 critical source files in under 2 seconds.
                                    </p>
                                    <div className="pt-2 border-t border-white/10 text-xs text-purple-300 font-mono">
                                        raw.githubusercontent.com bypass
                                    </div>
                                </div>

                                <div className="bg-black/30 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl">
                                        <FaFolderOpen />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">HTML5 Drag &amp; Drop Upload</h3>
                                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                                        Drop any local repository directly from Finder or File Explorer. Traverses directory trees with the WebKit Entry API, filters vendor paths (node_modules, .next), and reads file strings straight to heap memory.
                                    </p>
                                    <div className="pt-2 border-t border-white/10 text-xs text-emerald-300 font-mono">
                                        100% In-Memory Sandbox
                                    </div>
                                </div>

                                <div className="bg-black/30 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl">
                                        <FaLayerGroup />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Pre-Built Testbeds</h3>
                                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                                        Test drive architectural edge cases with one-click testbeds: a circular loop breeding ground (<code className="text-amber-300">circular-loop-demo</code>), a fullstack Next.js store, and an atomic UI design system.
                                    </p>
                                    <div className="pt-2 border-t border-white/10 text-xs text-amber-300 font-mono">
                                        Instant One-Click Launch
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* The 8 Core Architectural Pillars */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="text-center space-y-2">
                                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
                                    <span className="text-purple-400">🏛</span> The 8 Core Architectural Pillars
                                </h2>
                                <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                                    Engineered from the ground up to illuminate hidden coupling, cyclic traps, and architectural decay.
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

                        {/* Algorithmic Execution Pipeline */}
                        <motion.div
                            className="bg-black/30 backdrop-blur-2xl p-8 sm:p-12 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8"
                            variants={itemVariants}
                        >
                            <div className="text-center space-y-2">
                                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
                                    <FaMicrochip className="text-purple-400" /> Five-Phase Reactive Data Flow Lifecycle
                                </h2>
                                <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                                    From raw source files to a stabilized force-directed equilibrium with automated copilot diagnostics.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                {executionSteps.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="relative bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group"
                                    >
                                        <div>
                                            <div className="text-3xl font-mono font-extrabold text-purple-400/40 mb-3 group-hover:text-purple-400 transition-colors">
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
                                    <strong className="font-semibold text-white">Topological Advantage:</strong> Regex import matchers fail on multi-line statements, re-exports, and TS namespace scopes. CodeCartofy evaluates concrete AST syntax trees via <code className="text-purple-300 font-mono">@babel/parser</code>, extracting precise specifiers and module dependencies with 100% accuracy.
                                </div>
                            </div>
                        </motion.div>

                        {/* Mathematical Formulations & Graph Theory */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="text-center space-y-2">
                                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                                    Mathematical Graph Formulations &amp; Copilot Scoring
                                </h2>
                                <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                                    Translating raw topology into rigorous quantitative metrics for coupling, modularity, and systemic risk.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {mathModels.map((model, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-black/30 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 space-y-4"
                                    >
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-bold text-white">{model.name}</h3>
                                            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                                                Formula
                                            </span>
                                        </div>
                                        <div className="p-3 bg-black/60 rounded-xl border border-white/5 font-mono text-xs sm:text-sm text-purple-300 overflow-x-auto">
                                            {model.formula}
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                                            {model.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Semantic Node Taxonomy & Visual Legend */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="text-center space-y-2">
                                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                                    Semantic Node Taxonomy &amp; Canvas Legend
                                </h2>
                                <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                                    Instant visual hierarchy reflecting file purpose and architectural status across the canvas.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                {taxonomy.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-6 rounded-2xl border ${item.border} ${item.bg} backdrop-blur-xl transition-all duration-300 hover:scale-105 flex flex-col justify-between`}
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <div
                                                    className="w-4 h-4 rounded-full shadow-[0_0_10px_currentColor]"
                                                    style={{ backgroundColor: item.hex, color: item.hex }}
                                                />
                                                <span className={`font-mono font-bold text-xs ${item.color}`}>
                                                    {item.hex}
                                                </span>
                                            </div>
                                            <h4 className="font-bold text-white text-base mb-1">{item.role}</h4>
                                            <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Technology Stack Matrix */}
                        <motion.div
                            className="bg-black/30 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8"
                            variants={itemVariants}
                        >
                            <div className="text-center space-y-2">
                                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
                                    <FaCode className="text-purple-400" /> Technology Stack Matrix
                                </h2>
                                <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                                    Modern client-first architecture powered by Next.js 16, React 19, and high-performance Web APIs.
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
                    </motion.div>
                ) : (
                    /* Interactive Documentation & Search Explorer View */
                    <motion.div
                        key="documentation-view"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Search & Filter Header Bar */}
                        <div className="bg-black/40 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                                        <FaBookOpen className="text-purple-400" /> CodeCartofy Specification Explorer
                                    </h2>
                                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                                        Exhaustive 20-chapter architecture guide, algorithm proofs, database schemas, and DevOps runbooks (3,400+ lines).
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 w-full md:w-auto">
                                    <a
                                        href="/README.md"
                                        download="CodeCartofy_README.md"
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-gray-200 transition-all"
                                    >
                                        <FaDownload className="text-xs text-purple-400" />
                                        Raw Markdown
                                    </a>
                                    <a
                                        href="/README.md"
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-purple-600/80 hover:bg-purple-600 text-xs sm:text-sm font-semibold text-white transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                                    >
                                        <FaExternalLinkAlt className="text-xs" />
                                        Open Tab
                                    </a>
                                </div>
                            </div>

                            {/* Search Box */}
                            <div className="relative">
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                <input
                                    type="text"
                                    placeholder="Search architecture sections (e.g. 'Babel', 'Cycle Detection', 'd3-force', 'SPOF', 'Supabase', 'RLS')..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-11 pr-10 py-3 rounded-2xl bg-black/60 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-sm cursor-pointer"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>

                            {/* Section Quick Jump Filter Pills */}
                            <div className="flex flex-wrap items-center gap-2 pt-2">
                                <span className="text-xs text-gray-400 font-semibold mr-1">Filter by Chapter:</span>
                                {quickDocSections.map((sec) => (
                                    <button
                                        key={sec.id}
                                        onClick={() => {
                                            setSelectedSectionFilter(sec.id);
                                            setSearchQuery("");
                                        }}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                                            selectedSectionFilter === sec.id
                                                ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(147,51,234,0.4)]"
                                                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"
                                        }`}
                                    >
                                        {sec.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Markdown Document Content Pane */}
                        <div className="bg-black/30 backdrop-blur-xl p-6 sm:p-12 rounded-3xl border border-white/10 min-h-[500px]">
                            {loadingReadme ? (
                                <div className="flex flex-col items-center justify-center py-24 space-y-4">
                                    <div className="w-10 h-10 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
                                    <p className="text-gray-400 text-sm animate-pulse font-mono">
                                        Loading CodeCartofy comprehensive architecture specification (3,400+ lines)...
                                    </p>
                                </div>
                            ) : readmeError ? (
                                <div className="text-center py-16 space-y-4">
                                    <FaTimesCircle className="text-4xl text-rose-500 mx-auto" />
                                    <h3 className="text-xl font-bold text-white">Failed to load specification</h3>
                                    <p className="text-gray-400 text-sm">{readmeError}</p>
                                    <a
                                        href="/README.md"
                                        target="_blank"
                                        className="inline-block mt-4 text-purple-400 underline text-sm"
                                    >
                                        Open /README.md directly
                                    </a>
                                </div>
                            ) : (
                                <div className="prose prose-invert max-w-none space-y-4 text-gray-200 leading-relaxed break-words">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            h1: ({ children }) => (
                                                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-10 mb-6 pb-3 border-b border-purple-500/30 tracking-tight">
                                                    {children}
                                                </h1>
                                            ),
                                            h2: ({ children }) => (
                                                <h2 className="text-2xl sm:text-3xl font-bold text-purple-200 mt-8 mb-4 border-b border-white/10 pb-2">
                                                    {children}
                                                </h2>
                                            ),
                                            h3: ({ children }) => (
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mt-6 mb-3">
                                                    {children}
                                                </h3>
                                            ),
                                            h4: ({ children }) => (
                                                <h4 className="text-lg font-semibold text-purple-300 mt-4 mb-2">
                                                    {children}
                                                </h4>
                                            ),
                                            p: ({ children }) => (
                                                <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                                                    {children}
                                                </p>
                                            ),
                                            ul: ({ children }) => (
                                                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4 pl-2 text-sm sm:text-base">
                                                    {children}
                                                </ul>
                                            ),
                                            ol: ({ children }) => (
                                                <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4 pl-2 text-sm sm:text-base">
                                                    {children}
                                                </ol>
                                            ),
                                            li: ({ children }) => (
                                                <li className="text-gray-300">{children}</li>
                                            ),
                                            blockquote: ({ children }) => (
                                                <blockquote className="border-l-4 border-purple-500/80 bg-purple-500/5 p-4 rounded-r-xl my-4 text-purple-200 italic">
                                                    {children}
                                                </blockquote>
                                            ),
                                            pre: ({ children }) => (
                                                <pre className="bg-black/70 border border-white/10 rounded-2xl p-4 overflow-x-auto text-xs sm:text-sm font-mono text-gray-300 my-6 shadow-inner">
                                                    {children}
                                                </pre>
                                            ),
                                            code: ({ className, children }) => {
                                                const isInline = !className;
                                                return isInline ? (
                                                    <code className="bg-white/10 text-purple-300 px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono">
                                                        {children}
                                                    </code>
                                                ) : (
                                                    <code className={className}>{children}</code>
                                                );
                                            },
                                            table: ({ children }) => (
                                                <div className="overflow-x-auto my-6 rounded-xl border border-white/10">
                                                    <table className="min-w-full divide-y divide-white/10 text-left text-xs sm:text-sm">
                                                        {children}
                                                    </table>
                                                </div>
                                            ),
                                            thead: ({ children }) => (
                                                <thead className="bg-white/5 text-purple-300 font-semibold">
                                                    {children}
                                                </thead>
                                            ),
                                            tbody: ({ children }) => (
                                                <tbody className="divide-y divide-white/5 bg-black/20">
                                                    {children}
                                                </tbody>
                                            ),
                                            tr: ({ children }) => (
                                                <tr className="hover:bg-white/5 transition-colors">
                                                    {children}
                                                </tr>
                                            ),
                                            th: ({ children }) => (
                                                <th className="px-4 py-3 text-purple-300 font-semibold tracking-wider">
                                                    {children}
                                                </th>
                                            ),
                                            td: ({ children }) => (
                                                <td className="px-4 py-3 text-gray-300">
                                                    {children}
                                                </td>
                                            ),
                                            hr: () => (
                                                <hr className="my-8 border-white/10" />
                                            ),
                                            a: ({ href, children }) => (
                                                <a
                                                    href={href}
                                                    className="text-purple-400 hover:text-purple-300 underline underline-offset-4"
                                                    target={href?.startsWith("http") ? "_blank" : undefined}
                                                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                                >
                                                    {children}
                                                </a>
                                            ),
                                        }}
                                    >
                                        {filteredContent}
                                    </ReactMarkdown>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Final Call to Action Card */}
            <motion.div className="text-center pt-8 pb-4" variants={itemVariants}>
                <div className="bg-gradient-to-r from-purple-950/40 via-black/60 to-indigo-950/40 border border-purple-500/30 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-[0_0_50px_rgba(147,51,234,0.2)]">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Explore CodeCartofy Cartography
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
                        Inspect repository dependency graphs, diagnose recursive import loops, and review automated AI Copilot architectural health reports.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="https://github.com/DakshSingh-GitHub/code-cartofy"
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


