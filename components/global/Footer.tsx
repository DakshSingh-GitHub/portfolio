"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    const textGlowEffect =
        "transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.9)]";

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/DakshSingh-GitHub",
            icon: <FaGithub size={24} />,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/daksh-singh-116566331/",
            icon: <FaLinkedin size={24} />,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/dtlz_564",
            icon: <FaInstagram size={24} />,
        },
        {
            name: "Discord",
            href: "https://discord.com/users/daksh_dtlz_465",
            icon: <FaDiscord size={24} />,
        },
        {
            name: "Email",
            href: "mailto:daksh.singh.2407@gmail.com",
            icon: <FaEnvelope size={24} />,
        },
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact-me" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.footer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-[90%] max-w-6xl mx-auto mb-8 bg-black/40 text-white backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] mt-24"
        >
            <div className="container mx-auto px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    {/* Left Division: Quote */}
                    <motion.div variants={itemVariants} className="space-y-3">
                        <h3 className="text-xl font-bold font-sans tracking-wide bg-linear-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                            Daksh Singh
                        </h3>
                        <p className="text-gray-400 italic text-sm leading-relaxed">
                            &quot;Crafting digital experiences, one line of
                            code at a time.&quot;
                        </p>
                    </motion.div>
 
                    {/* Middle Division: Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-3">
                        <h3 className="text-lg font-bold font-sans tracking-wider text-purple-300">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`text-gray-400 hover:text-white transition-colors duration-300 text-sm ${textGlowEffect}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
 
                    {/* Right Division: Contact */}
                    <motion.div variants={itemVariants} className="space-y-3">
                        <h3 className="text-lg font-bold font-sans tracking-wider text-purple-300">Get in Touch</h3>
                        <div className="flex justify-center md:justify-start gap-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className={`p-3 bg-white/5 hover:bg-purple-600/20 rounded-full border border-white/10 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 ${textGlowEffect}`}
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-gray-500 font-medium tracking-widest uppercase">
                    <p>
                        &copy; {new Date().getFullYear()} Daksh Singh. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}
