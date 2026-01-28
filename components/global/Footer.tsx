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
            className="bg-black/80 text-white backdrop-blur-lg border-t border-purple-900/50 mt-20"
        >
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    {/* Left Division: Quote */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-4">
                            Daksh Singh
                        </h3>
                        <p className="text-gray-400 italic">
                            &quot;Crafting digital experiences, one line of
                            code at a time.&quot;
                        </p>
                    </motion.div>

                    {/* Middle Division: Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`text-gray-400 hover:text-white transition-colors duration-300 ${textGlowEffect}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Division: Contact */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                        <div className="flex justify-center md:justify-start gap-6">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className={`hover:text-violet-400 transition-colors duration-300 ${textGlowEffect}`}
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="mt-12 border-t border-purple-900/30 pt-8 text-center text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} Daksh Singh. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}
