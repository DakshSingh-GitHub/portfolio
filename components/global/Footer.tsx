"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {
    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/DakshSingh-GitHub",
            icon: <FaGithub size={18} />,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/daksh-singh-116566331/",
            icon: <FaLinkedin size={18} />,
        },
        {
            name: "Discord",
            href: "https://discord.com/users/daksh_dtlz_465",
            icon: <FaDiscord size={18} />,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/dtlz_564",
            icon: <FaInstagram size={18} />,
        },
        {
            name: "Email",
            href: "mailto:daksh.singh.2407@gmail.com",
            icon: <FaEnvelope size={18} />,
        },
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Practice Codes", href: "/practice-codes" },
        { name: "Contact", href: "/contact-me" },
    ];

    return (
        <footer className="w-[90%] max-w-5xl mx-auto my-16">
            <div className="bg-neutral-950/70 text-neutral-300 backdrop-blur-xl border border-neutral-800/90 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-start">
                    {/* Brand & Philosophy */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-neutral-400"></span>
                            <h3 className="text-base font-semibold tracking-tight text-white">
                                Daksh Singh
                            </h3>
                        </div>
                        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                            Computer Science & AI student focused on systems engineering, compiler & AST tooling, and resilient web platforms.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                            Directory
                        </h4>
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-neutral-400 hover:text-white transition-colors text-xs sm:text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social & Connect */}
                    <div className="space-y-3">
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                            Connect
                        </h4>
                        <div className="flex justify-center md:justify-start gap-2">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="p-2.5 bg-neutral-900/80 hover:bg-neutral-850 text-neutral-400 hover:text-white rounded-full border border-neutral-800 transition-all hover:border-neutral-700"
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
                    <p>&copy; {new Date().getFullYear()} Daksh Singh. Designed with precision.</p>
                    <p className="font-mono text-[11px] text-neutral-500">Minimalist Dark Edition</p>
                </div>
            </div>
        </footer>
    );
}
