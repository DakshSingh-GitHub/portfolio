"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [isDesktopProjectsDropdownOpen, setIsDesktopProjectsDropdownOpen] = useState(false);
    const [isMobileProjectsDropdownOpen, setIsMobileProjectsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDesktopProjectsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    // Condition 1: No navbar on the landing page!
    if (pathname === "/") {
        return null;
    }

    const isActive = (path: string) =>
        pathname === path || (path !== "/" && pathname.startsWith(path));

    const getLinkClass = (path: string, baseClass: string = "", isDesktop: boolean = false) => {
        const activeClass = "bg-neutral-800 text-white border border-neutral-700 shadow-sm font-medium";
        const inactiveClass = "text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent";
        const paddingClass = isDesktop ? "px-3.5 py-1.5" : "px-4 py-3";
        return `${baseClass} ${paddingClass} rounded-full transition-all duration-200 text-xs sm:text-sm tracking-wide ${
            isActive(path) ? activeClass : inactiveClass
        }`;
    };

    const projectLinks = [
        {
            href: "/projects/code-cartofy",
            name: "CodeCartofy",
            tag: "AST & Cartography",
            description: "Interactive AST codebase cartography, force physics & AI copilot.",
        },
        {
            href: "/projects/coal-me-later",
            name: "Coal-Me-Later",
            tag: "SIH · Edge AI",
            description: "Autonomous statutory compliance & geotechnical AI for Indian coal mines.",
        },
        {
            href: "/projects/vlyxir",
            name: "Vlyxir",
            tag: "Cloud IDE & Judge",
            description: "Industrial-grade online judge, Cloud IDE & competitive ecosystem.",
        },
        {
            href: "/projects/ai-assist",
            name: "AI Assist",
            tag: "Automation",
            description: "Voice-driven desktop assistant with modular system automation.",
        },
        {
            href: "/projects/library-management",
            name: "Library Management",
            tag: "CLI Tool",
            description: "CLI and data-structure driven library records management software.",
        },
        {
            href: "/projects/mathematics-helper",
            name: "Mathematics Helper",
            tag: "Java Engine",
            description: "Java computational library for calculus, matrices, and algebra.",
        },
    ];

    const dropdownClasses = `absolute top-full right-0 mt-3 w-84 bg-neutral-950/95 backdrop-blur-2xl rounded-2xl border border-neutral-800 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-200 ease-out transform ${
        isDesktopProjectsDropdownOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
    }`;

    return (
        <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
            {/* Pill shaped navbar with 80% screen width */}
            <nav className="pointer-events-auto w-[80%] max-w-5xl bg-neutral-950/85 text-neutral-200 backdrop-blur-xl border border-neutral-800/90 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.7)] transition-all duration-300">
                <div className="px-5 py-2.5 sm:px-6 sm:py-3">
                    <div className="flex justify-between items-center">
                        {/* Brand Link */}
                        <Link
                            href="/"
                            className="flex items-center gap-2.5 text-neutral-100 hover:text-white transition-colors group"
                        >
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 group-hover:border-neutral-700 transition-colors">
                                <Image
                                    src="https://i.pinimg.com/736x/0d/00/60/0d00602699272d50087f09e99ae8a764.jpg"
                                    width={32}
                                    height={32}
                                    alt="Daksh Singh"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <span className="font-semibold text-sm tracking-tight text-white">
                                Daksh Singh
                            </span>
                        </Link>

                        {/* Desktop Menu - Grouped Buttons */}
                        <div className="hidden md:flex items-center gap-1 bg-neutral-900/60 p-1 rounded-full border border-neutral-800/80">
                            <Link href="/about" className={getLinkClass("/about", "", true)}>
                                About
                            </Link>

                            {/* Projects Dropdown Group */}
                            <div className="relative" ref={dropdownRef}>
                                <div className="flex items-center">
                                    <Link
                                        href="/projects"
                                        className={getLinkClass("/projects", "pr-2", true)}
                                    >
                                        Projects
                                    </Link>
                                    <button
                                        onClick={() =>
                                            setIsDesktopProjectsDropdownOpen(!isDesktopProjectsDropdownOpen)
                                        }
                                        className="text-neutral-400 hover:text-white px-2 py-1.5 rounded-full hover:bg-neutral-800 transition-colors"
                                        aria-label="Toggle Projects Dropdown"
                                    >
                                        <svg
                                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                                isDesktopProjectsDropdownOpen ? "rotate-180" : ""
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>

                                <div className={dropdownClasses}>
                                    <div className="px-3 py-2 border-b border-neutral-800/80 mb-1 flex justify-between items-center">
                                        <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
                                            Projects Directory
                                        </span>
                                        <Link
                                            href="/projects"
                                            onClick={() => setIsDesktopProjectsDropdownOpen(false)}
                                            className="text-[11px] text-neutral-300 hover:text-white underline underline-offset-2"
                                        >
                                            View all
                                        </Link>
                                    </div>
                                    <div className="rounded-xl max-h-72 overflow-y-auto space-y-1 pr-1 [scrollbar-width:none]">
                                        {projectLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setIsDesktopProjectsDropdownOpen(false)}
                                                className="block p-2.5 rounded-xl hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all text-left group"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium text-sm text-neutral-200 group-hover:text-white">
                                                        {link.name}
                                                    </span>
                                                    <span className="text-[10px] text-neutral-400 bg-neutral-900 border border-neutral-800 px-1.5 py-0.5 rounded-md">
                                                        {link.tag}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                                                    {link.description}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/practice-codes"
                                className={getLinkClass("/practice-codes", "", true)}
                            >
                                Practice Codes
                            </Link>
                            <Link
                                href="/contact-me"
                                className={getLinkClass("/contact-me", "", true)}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Hamburger Button for Mobile */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-1.5 text-neutral-300 hover:text-white focus:outline-none rounded-lg hover:bg-neutral-900 transition-colors"
                                type="button"
                                aria-label="Toggle navigation menu"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Drawer */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="md:hidden fixed inset-0 z-50 flex justify-end"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div
                                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                            />
                            <motion.div
                                className="relative w-72 h-full bg-neutral-950 border-l border-neutral-800 p-6 flex flex-col justify-between z-10"
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                                <div>
                                    <div className="flex justify-between items-center pb-4 border-b border-neutral-800 mb-6">
                                        <span className="font-semibold text-white text-sm">Navigation</span>
                                        <button
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-neutral-400 hover:text-white p-1"
                                            aria-label="Close menu"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="space-y-2">
                                        <Link
                                            href="/"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-4 py-2.5 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-900 border border-transparent text-sm"
                                        >
                                            Home (Landing Page)
                                        </Link>
                                        <Link
                                            href="/about"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={getLinkClass("/about", "block text-sm")}
                                        >
                                            About
                                        </Link>
                                        <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-2 space-y-1">
                                            <div className="flex justify-between items-center px-2 py-1">
                                                <Link
                                                    href="/projects"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="font-medium text-sm text-neutral-200"
                                                >
                                                    Projects
                                                </Link>
                                                <button
                                                    onClick={() => setIsMobileProjectsDropdownOpen(!isMobileProjectsDropdownOpen)}
                                                    className="text-neutral-400 p-1"
                                                    aria-label="Toggle mobile projects"
                                                >
                                                    <svg
                                                        className={`w-3.5 h-3.5 transition-transform ${isMobileProjectsDropdownOpen ? "rotate-180" : ""}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {isMobileProjectsDropdownOpen && (
                                                <div className="pl-3 pt-2 space-y-1.5 border-t border-neutral-800">
                                                    {projectLinks.map((p) => (
                                                        <Link
                                                            key={p.href}
                                                            href={p.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block text-xs text-neutral-400 hover:text-white py-1"
                                                        >
                                                            {p.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <Link
                                            href="/practice-codes"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={getLinkClass("/practice-codes", "block text-sm")}
                                        >
                                            Practice Codes
                                        </Link>
                                        <Link
                                            href="/contact-me"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={getLinkClass("/contact-me", "block text-sm")}
                                        >
                                            Contact
                                        </Link>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-500 text-center">
                                    Daksh Singh &copy; {new Date().getFullYear()}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
