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
    FaDatabase,
    FaSatelliteDish,
    FaBrain,
    FaMicrophone,
    FaCompass,
    FaExclamationTriangle,
    FaFire,
    FaWater,
    FaCogs,
    FaCheckCircle,
    FaFileContract,
    FaLayerGroup,
    FaGithub,
    FaArrowRight,
    FaArrowLeft,
    FaFileAlt,
    FaSearch,
    FaTimesCircle,
    FaBroadcastTower,
    FaServer,
    FaBookOpen,
    FaExternalLinkAlt,
    FaDownload,
    FaTruck,
    FaWind
} from "react-icons/fa";

export default function CoalMeLaterPage() {
    const [activeTab, setActiveTab] = useState<"architecture" | "documentation">("architecture");
    const [readmeContent, setReadmeContent] = useState<string>("");
    const [readmeError, setReadmeError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Derived loading state to prevent cascading renders in effects
    const loadingReadme = activeTab === "documentation" && !readmeContent && !readmeError;

    const headerVariants: Variants = {
        hidden: { scale: 0.95, opacity: 0, y: 20 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
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

    // Load README_CML.md when user switches to documentation tab or on demand
    useEffect(() => {
        let ignore = false;
        if (activeTab === "documentation" && !readmeContent && !readmeError) {
            fetch("/README_CML.md")
                .then((res) => {
                    if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to load README_CML.md`);
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
        { label: "Mines Monitored", value: "321+", detail: "Across 6 Indian Mining States" },
        { label: "Subsidiary Reach", value: "12", detail: "CIL Subsidiaries, SCCL & NLCIL" },
        { label: "Edge Resilience", value: "100%", detail: "Zero-Latency Subterranean IndexedDB" },
        { label: "Alert Dispatch", value: "< 1s", detail: "Real-Time DGMS War Room Ingestion" },
    ];

    const pillars = [
        {
            icon: <FaDatabase className="text-amber-400" />,
            title: "Autonomous Edge Persistence (MineSafetyDB)",
            tag: "Pillar I",
            desc: "Browser-level IndexedDB engine engineered for subterranean deadzones (200-600m underground). Stores shift logs, high-res optical imagery blobs, and acoustic memos with zero network connectivity.",
        },
        {
            icon: <FaSatelliteDish className="text-emerald-400" />,
            title: "Resilient Sync Engine & Multipart Gateway",
            tag: "Pillar II",
            desc: "Automatic background synchronization runner that triggers upon pit-head surface Wi-Fi/cellular detection. Delivers sequential multipart/form-data ingestion with exponential backoff and quarantine isolation.",
        },
        {
            icon: <FaBrain className="text-cyan-400" />,
            title: "Predictive Geotechnical & Atmospheric AI",
            tag: "Pillar III",
            desc: "Mathematical risk engine computing slope Factor of Safety (FOS < 1.20) and Coward explosive gas envelopes (% Vol CH4 > 0.75%, CO > 50 ppm) to trigger automated DGMS early warning protocols.",
        },
        {
            icon: <FaMicrophone className="text-purple-400" />,
            title: "Hardware Media & Acoustic Capture Suite",
            tag: "Pillar IV",
            desc: "Industrial HUD reticle viewfinder with statutory grid alignment, native Web Audio API real-time acoustic frequency visualizer, and zero-dependency voice memo audio synthesis.",
        },
        {
            icon: <FaCompass className="text-rose-400" />,
            title: "Spatial Geolocation & Basin Presets",
            tag: "Pillar V",
            desc: "High-accuracy GPS telemetry acquisition with underground pit shadowing fallbacks, clipboard spatial sharing, and pre-calibrated benchmarks for Jharia, Raniganj, Korba, and Singrauli basins.",
        },
        {
            icon: <FaBroadcastTower className="text-indigo-400" />,
            title: "Central Command Radar & Crisis War Room",
            tag: "Pillar VI",
            desc: "Glassmorphic executive command console tracking real-time telemetry from 321+ mines, RFID HEMM fleet telemetry gates, interactive crisis scenario simulators, and cryptographic report endorsement.",
        },
    ];

    const hazards = [
        {
            code: "CMR 106",
            title: "Highwall Crack / Tension Shear",
            color: "text-rose-400",
            bg: "bg-rose-500/10",
            border: "border-rose-500/30",
            icon: <FaExclamationTriangle />,
            desc: "Detection of bench shear fractures, toe bulging, and structural slope displacement in opencast quarry walls.",
        },
        {
            code: "CMR 108",
            title: "Rockfall & Overburden Failure",
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "border-amber-500/30",
            icon: <FaLayerGroup />,
            desc: "Monitoring strata delaminations, loose bench overhangs, and dump slope failures along high-capacity haul roads.",
        },
        {
            code: "CMR 140",
            title: "Strata & Pit Water Inundation",
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/30",
            icon: <FaWater />,
            desc: "Monitoring groundwater seepage, sump pump discharge flowrates, and torrential monsoonal pit accumulation.",
        },
        {
            code: "CMR 98",
            title: "Heavy Machinery / HEMM Breakdown",
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/30",
            icon: <FaTruck />,
            desc: "Operational telemetry for draglines, hydraulic excavators, dumpers, surface miners, and RFID haulage gates.",
        },
        {
            code: "CMR 153",
            title: "Inflammable Gas & Ventilation Bleed",
            color: "text-red-400",
            bg: "bg-red-500/10",
            border: "border-red-500/30",
            icon: <FaFire />,
            desc: "Subterranean combustible gas telemetry: Methane (CH4), Carbon Monoxide (CO), and air velocity anomaly detection.",
        },
        {
            code: "CMR 143",
            title: "Respirable Dust & Blast Perimeter",
            color: "text-teal-400",
            bg: "bg-teal-500/10",
            border: "border-teal-500/30",
            icon: <FaWind />,
            desc: "Air quality particulate monitoring (PM10/PM2.5) and statutory clearance verification around active blasting zones.",
        },
    ];

    const techStack = [
        { category: "Frontend Core", items: ["React 18", "Vite 6", "TypeScript 5", "Tailwind CSS", "Framer Motion", "Three.js WebGL"] },
        { category: "Edge Offline Storage", items: ["Browser IndexedDB", "MineSafetyDB Architecture", "Zero-Overhead Blob Storage", "Local Event Bus"] },
        { category: "Cloud & Telemetry", items: ["Supabase PostgreSQL 15", "HS256 JWT Auth", "Row-Level Security (RLS)", "Realtime Change Data Capture"] },
        { category: "Hardware & Audio", items: ["Web Audio API Synthesizer", "MediaRecorder API", "HTML5 Geolocation", "Industrial HUD Canvas Viewfinder"] },
        { category: "Regulatory Alignment", items: ["Ministry of Coal Directives", "DGMS CMR 2017", "The Mines Act 1952", "DPDP Act 2023"] },
        { category: "Indian Basins", items: ["Jharia (BCCL)", "Raniganj (ECL)", "Korba (SECL)", "Singrauli (NCL)", "Talcher (MCL)", "Godavari (SCCL)"] },
    ];

    // Filtered lines for documentation preview when searching
    const filteredContent = useMemo(() => {
        if (!searchQuery.trim() || !readmeContent) return readmeContent;
        const lines = readmeContent.split("\n");
        const matchingLines: string[] = [];
        let inMatchingSection = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.startsWith("#")) {
                inMatchingSection = line.toLowerCase().includes(searchQuery.toLowerCase());
            }
            if (inMatchingSection || line.toLowerCase().includes(searchQuery.toLowerCase())) {
                matchingLines.push(line);
            }
        }
        return matchingLines.length > 0 ? matchingLines.join("\n") : `No sections found matching "${searchQuery}".`;
    }, [readmeContent, searchQuery]);

    return (
        <motion.div
            className="container mx-auto px-4 sm:px-6 py-10 text-white space-y-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            {/* Navigation Breadcrumb */}
            <div className="flex items-center justify-between">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors"
                >
                    <FaArrowLeft className="text-xs" />
                    Back to Projects
                </Link>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs text-gray-400 font-mono">DGMS CMR 2017 Compliant</span>
                </div>
            </div>

            {/* Hero Header */}
            <motion.div
                className="text-center bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-amber-500/30"
                variants={headerVariants}
            >
                <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
                    <span>🇮🇳 Make in India Initiative</span>
                    <span>&bull;</span>
                    <span>Ministry of Coal Aligned</span>
                    <span>&bull;</span>
                    <span>DGMS Technical Circulars 04/2019 & 02/2022</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight font-sans">
                    <span className="bg-gradient-to-r from-white via-amber-200 to-orange-400 bg-clip-text text-transparent">
                        DataMiners
                    </span>
                    <span className="text-lg sm:text-2xl block font-medium text-gray-300 mt-2 font-mono">
                        Coal-Me-Later Ecosystem
                    </span>
                </h1>

                <p className="text-base sm:text-xl text-amber-300/90 font-medium italic mb-6">
                    &ldquo;Every Mine. Every Compliance. One Intelligence.&rdquo;
                </p>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-sans mb-8">
                    Mission-critical, enterprise-grade autonomous governance and statutory compliance monitoring infrastructure engineered specifically for India&apos;s coal and lignite mining ecosystem. Bridges subterranean pit faces with centralized corporate command war rooms via offline-first edge persistence, predictive geotechnical AI, and DGMS CMR 2017 regulatory workflows.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                        onClick={() => setActiveTab("documentation")}
                        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] cursor-pointer"
                    >
                        <FaBookOpen className="text-lg" />
                        Read Full Specification (4,000+ Lines)
                    </button>
                    <a
                        href="/README_CML.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:border-amber-500/40"
                    >
                        Raw Markdown (README_CML.md)
                        <FaExternalLinkAlt className="text-xs text-amber-400" />
                    </a>
                </div>
            </motion.div>

            {/* Metrics Strip */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {metrics.map((m, idx) => (
                    <div
                        key={idx}
                        className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:border-amber-500/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                    >
                        <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-1">
                            {m.value}
                        </div>
                        <div className="text-sm font-semibold text-white">{m.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{m.detail}</div>
                    </div>
                ))}
            </motion.div>

            {/* Platform Preview Banner */}
            <motion.div variants={itemVariants} className="flex justify-center">
                <motion.div
                    className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.2)] w-full max-w-5xl group"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={{
                        rest: { borderColor: "rgba(245, 158, 11, 0.3)" },
                        hover: {
                            borderColor: "rgba(245, 158, 11, 0.7)",
                            transition: { duration: 0.5 },
                        },
                    }}
                >
                    <div className="relative aspect-video w-full">
                        <Image
                            src="/projects/coal_me_later.png"
                            alt="DataMiners Subterranean Telemetry & Command War Room"
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-gray-300 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                            <div className="flex items-center gap-3">
                                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                                <span className="font-semibold text-white">Live Subterranean Telemetry HUD</span>
                                <span className="text-gray-400 hidden sm:inline">| Pit Bench Elevation & Strata Risk Radar</span>
                            </div>
                            <div className="flex items-center gap-4 text-amber-300 font-mono">
                                <span>FOS: 1.42 (Stable)</span>
                                <span>CH4: 0.15% (Nominal)</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Interactive Mode Tabs */}
            <div className="flex justify-center">
                <div className="inline-flex p-1.5 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-xl shadow-lg">
                    <button
                        onClick={() => setActiveTab("architecture")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                            activeTab === "architecture"
                                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                        <FaLayerGroup />
                        Architecture & Core Pillars
                    </button>
                    <button
                        onClick={() => setActiveTab("documentation")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                            activeTab === "documentation"
                                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                        <FaFileContract />
                        Full Specification (README_CML.md)
                    </button>
                </div>
            </div>

            {/* TAB CONTENT */}
            {activeTab === "architecture" ? (
                <div className="space-y-16">
                    {/* Architectural Pillars */}
                    <div className="space-y-8">
                        <div className="text-center space-y-2">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                                Six Architectural Pillars
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                                Engineered to operate in zero-connectivity subterranean pits and scale to corporate command war rooms across Coal India Limited.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pillars.map((p, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] transition-all duration-300"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-2xl p-3 bg-white/5 rounded-xl border border-white/10">
                                                {p.icon}
                                            </div>
                                            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
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

                    {/* Statutory Hazard Classifications (CMR 2017) */}
                    <div className="space-y-8">
                        <div className="text-center space-y-2">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                                Statutory Hazard Matrix & SOPs
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                                Automated classification engine aligned with the Coal Mines Regulations (CMR) 2017 and DGMS safety directives.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {hazards.map((h, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className={`bg-black/30 backdrop-blur-xl rounded-2xl border ${h.border} p-6 space-y-3 hover:scale-101 transition-all duration-300`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className={`p-2.5 rounded-lg ${h.bg} ${h.color} text-xl`}>
                                            {h.icon}
                                        </div>
                                        <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${h.bg} ${h.color} border ${h.border}`}>
                                            {h.code}
                                        </span>
                                    </div>
                                    <h4 className="text-base font-bold text-white">
                                        {h.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {h.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack Grid */}
                    <div className="space-y-8">
                        <div className="text-center space-y-2">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                                Full Technology Ecosystem
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                                Modern high-throughput stack designed for reliability, offline data preservation, and cryptographic auditability.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {techStack.map((stack, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4 hover:border-amber-500/30 transition-all duration-300"
                                >
                                    <h4 className="text-lg font-bold text-amber-300 flex items-center gap-2 border-b border-white/10 pb-3">
                                        <FaCogs className="text-amber-400 text-sm" />
                                        {stack.category}
                                    </h4>
                                    <ul className="space-y-2">
                                        {stack.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                <FaCheckCircle className="text-emerald-400 text-xs shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                /* DOCUMENTATION TAB */
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                >
                    {/* Doc Toolbar */}
                    <div className="bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10 p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="relative w-full md:w-96">
                            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                            <input
                                type="text"
                                placeholder="Search sections, CMR regulations, or algorithms..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-colors"
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
                                {readmeContent ? "4,072 Lines Loaded" : "Loading..."}
                            </span>
                            <a
                                href="/README_CML.md"
                                download="README_CML.md"
                                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 transition-colors"
                            >
                                <FaDownload />
                                Download File
                            </a>
                            <a
                                href="/README_CML.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-colors"
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
                                <div className="w-10 h-10 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
                                <p className="text-gray-400 text-sm font-mono">
                                    Loading Coal-Me-Later comprehensive architecture specification (250KB)...
                                </p>
                            </div>
                        ) : readmeError ? (
                            <div className="text-center py-16 space-y-4">
                                <FaTimesCircle className="text-4xl text-rose-500 mx-auto" />
                                <h3 className="text-xl font-bold text-white">Failed to load specification</h3>
                                <p className="text-gray-400 text-sm">{readmeError}</p>
                                <a
                                    href="/README_CML.md"
                                    target="_blank"
                                    className="inline-block mt-4 text-amber-400 underline text-sm"
                                >
                                    Open /README_CML.md directly
                                </a>
                            </div>
                        ) : (
                            <div className="prose prose-invert max-w-none space-y-4 text-gray-200 leading-relaxed break-words">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        h1: ({ children }) => (
                                            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-10 mb-6 pb-3 border-b border-amber-500/30 tracking-tight">
                                                {children}
                                            </h1>
                                        ),
                                        h2: ({ children }) => (
                                            <h2 className="text-2xl sm:text-3xl font-bold text-amber-200 mt-8 mb-4 border-b border-white/10 pb-2">
                                                {children}
                                            </h2>
                                        ),
                                        h3: ({ children }) => (
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mt-6 mb-3">
                                                {children}
                                            </h3>
                                        ),
                                        h4: ({ children }) => (
                                            <h4 className="text-lg font-semibold text-amber-300 mt-4 mb-2">
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
                                            <blockquote className="border-l-4 border-amber-500/80 bg-amber-500/5 p-4 rounded-r-xl my-4 text-amber-200 italic">
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
                                                <code className="bg-white/10 text-amber-300 px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono">
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
                                            <thead className="bg-white/5 text-amber-300 font-semibold">
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
                                            <th className="px-4 py-3 font-semibold text-amber-200">
                                                {children}
                                            </th>
                                        ),
                                        td: ({ children }) => (
                                            <td className="px-4 py-3 text-gray-300">
                                                {children}
                                            </td>
                                        ),
                                        a: ({ href, children }) => (
                                            <a
                                                href={href}
                                                target={href?.startsWith("http") ? "_blank" : undefined}
                                                rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                                className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
                                            >
                                                {children}
                                            </a>
                                        ),
                                        hr: () => <hr className="my-8 border-white/10" />,
                                    }}
                                >
                                    {filteredContent}
                                </ReactMarkdown>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}

            {/* Bottom Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <FaArrowLeft />
                    Back to All Projects
                </Link>
                <div className="flex items-center gap-4">
                    <a
                        href="/README_CML.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                    >
                        <FaFileAlt />
                        Raw Specification
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}

