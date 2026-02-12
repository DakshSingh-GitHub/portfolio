"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [isDesktopProjectsDropdownOpen, setIsDesktopProjectsDropdownOpen] =
        useState(false);
    const [isMobileProjectsDropdownOpen, setIsMobileProjectsDropdownOpen] =
        useState(false);
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
    }, [dropdownRef]);

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

    const textGlowEffect =
        "transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.9)]";

    const isActive = (path: string) =>
        pathname === path || (path !== "/" && pathname.startsWith(path));

    const getLinkClass = (path: string, baseClass: string = "", isDesktop: boolean = false) => {
        const activeClass = "bg-violet-600/80 text-white";
        const inactiveClass =
            "bg-transparent hover:bg-violet-600/50 text-gray-300 hover:text-white";
        const paddingClass = isDesktop ? "px-4 py-2" : "px-4 py-3";
        return `${baseClass} ${paddingClass} rounded-full transition-all duration-300 text-base ${
            isActive(path) ? activeClass : inactiveClass
        }`;
    };

    const projectLinks = [
        {
            href: "/projects/code-judge",
            name: "Code Judge",
            description: "An online platform for compiling and running code.",
        },
        {
            href: "/projects/ai-assist",
            name: "AI Assist",
            description: "A smart, console-based personal assistant.",
        },
        {
            href: "/projects/library-management",
            name: "Library Management CLI",
            description: "A CLI for managing library records.",
        },
        {
            href: "/projects/mathematics-helper",
            name: "Mathematics Helper Java",
            description: "A Java app for solving mathematical problems.",
        },
        {
            href: "/projects/portfolio",
            name: "Portfolio (This Website)",
            description: "The portfolio you are currently viewing.",
        },
        {
            href: "/projects/hotel-management",
            name: "Hotel management (School Project)",
            description: "A school project for managing hotel operations.",
        },
    ];

    const dropdownClasses = `absolute top-full mt-4 w-72 bg-black/80 backdrop-blur-lg rounded-xl shadow-2xl border border-purple-700/60 transition-all duration-300 ease-in-out transform ${
        isDesktopProjectsDropdownOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
    }`;

    const mobileDropdownClasses = `pl-4 transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileProjectsDropdownOpen ? "max-h-96" : "max-h-0"
    }`;

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-black/70 text-white backdrop-blur-xl border-b border-purple-700/30 transition-all duration-300 ease-in-out">
            <div className="container mx-auto px-4 sm:px-6 md:py-5 py-4">
                <div className="flex justify-between items-center">
                    <Link
                        href="/"
                        className={`text-xl sm:text-2xl font-bold ${textGlowEffect} flex gap-3 sm:gap-4 items-center`}
                    >
                        <Image
                            src="https://i.pinimg.com/736x/0d/00/60/0d00602699272d50087f09e99ae8a764.jpg"
                            width={45}
                            height={45}
                            alt="Lui Shirosagi Motif"
                            className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                        />
                        Meet Daksh Singh
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-2 items-center">
                        <Link href="/about" className={getLinkClass("/about", "", true)}>
                            About
                        </Link>
                        <div className="relative" ref={dropdownRef}>
                            <div
                                className={`${getLinkClass(
                                    "/projects", "", true
                                )} flex items-center`}
                            >
                                <Link href="/projects" className="pr-2">
                                    Projects
                                 </Link>
                                <div className="h-4 w-px bg-white/30"></div>
                                <button
                                    onClick={() =>
                                        setIsDesktopProjectsDropdownOpen(
                                            !isDesktopProjectsDropdownOpen
                                        )
                                    }
                                    className="pl-2"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className={dropdownClasses}>
                                <div className="rounded-xl overflow-hidden">
                                    {projectLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`block w-full text-left px-6 py-4 hover:bg-violet-700/60 transition-colors duration-200`}
                                        >
                                            <p className="font-semibold">
                                                {link.name}
                                            </p>
                                            <p className="text-sm text-gray-300">
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

                    {/* Hamburger Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="p-2 text-white focus:outline-none transition-transform duration-150 ease-out active:scale-90"
                            type="button"
                            aria-label="Toggle mobile menu"
                        >
                            <span
                                className={`block transition-transform duration-300 ease-out ${
                                    isMobileMenuOpen
                                        ? "rotate-90 scale-105"
                                        : "rotate-0 scale-100"
                                }`}
                            >
                                {isMobileMenuOpen ? (
                                    <svg
                                        className="w-7 h-7"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-7 h-7"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        ></path>
                                    </svg>
                                )}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Sidebar Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            aria-hidden={!isMobileMenuOpen}
                            className="md:hidden fixed inset-0 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                        >
                            <button
                                type="button"
                                aria-label="Close mobile menu overlay"
                                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                            />
                            <motion.div
                                className="absolute left-0 top-0 h-screen w-full overflow-y-auto border-r border-purple-700/40 bg-linear-to-b from-black via-[#090312] to-black px-6 pb-8 pt-24"
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <button
                                    type="button"
                                    aria-label="Close mobile menu"
                                    className="absolute right-5 top-6 rounded-full border border-white/25 bg-black/40 px-3 py-2 text-sm font-semibold text-white hover:bg-black/70 transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Close
                                </button>
                                <div className="flex min-h-full flex-col">
                                    <div className="space-y-3">
                                        <Link
                                            href="/about"
                                            className={getLinkClass(
                                                "/about",
                                                "block text-center text-lg"
                                            )}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            About
                                        </Link>
                                        <div className="relative">
                                            <div
                                                className={`${getLinkClass(
                                                    "/projects",
                                                    "text-lg"
                                                )} flex items-center justify-center`}
                                            >
                                                <Link
                                                    href="/projects"
                                                    className="pr-3"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Projects
                                                </Link>
                                                <div className="h-5 w-px bg-white/30"></div>
                                                <button
                                                    onClick={() =>
                                                        setIsMobileProjectsDropdownOpen(
                                                            !isMobileProjectsDropdownOpen
                                                        )
                                                    }
                                                    className="pl-3"
                                                    type="button"
                                                    aria-label="Toggle mobile projects menu"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className={mobileDropdownClasses}>
                                                <div className="mt-2 space-y-2">
                                                    {projectLinks.map((link) => (
                                                        <Link
                                                            key={link.href}
                                                            href={link.href}
                                                            className="block text-center px-4 py-3 bg-black/50 rounded-full hover:bg-violet-700/60 transition-colors duration-200"
                                                            onClick={() => {
                                                                setIsMobileMenuOpen(false);
                                                                setIsMobileProjectsDropdownOpen(
                                                                    false
                                                                );
                                                            }}
                                                        >
                                                            <p className="font-semibold text-base">
                                                                {link.name}
                                                            </p>
                                                            <p className="text-sm text-gray-300">
                                                                {link.description}
                                                            </p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            href="/practice-codes"
                                            className={getLinkClass(
                                                "/practice-codes",
                                                "block text-center text-lg"
                                            )}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Practice Codes
                                        </Link>
                                        <Link
                                            href="/contact-me"
                                            className={getLinkClass(
                                                "/contact-me",
                                                "block text-center text-lg"
                                            )}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Contact
                                        </Link>
                                    </div>
                                    <div className="mt-auto border-t border-purple-700/40 pt-6 text-center">
                                        <h3 className="text-xl font-bold tracking-tight text-white">
                                            Daksh Singh
                                        </h3>
                                        <p className="mt-3 text-sm italic text-gray-300/90">
                                            &quot;Crafting digital experiences, one line of code at a time.&quot;
                                        </p>
                                        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-violet-300/90">
                                            Daksh Singh (c) 2026
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
