
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { staggerContainer } from "@/components/animations";

export default function HotelManagementPage() {
    const headerVariants: Variants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
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

    return (
        <motion.div 
            className="container mx-auto px-4 sm:px-6 py-10 text-white"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            <motion.div 
                className="text-center mb-12 bg-black/20 backdrop-blur-xl rounded-3xl border border-purple-700/30 p-8 md:p-12 shadow-[0_0_30px_rgba(124,58,237,0.1)] hover:shadow-[0_0_50px_rgba(124,58,237,0.2)] transition-shadow duration-500"
                variants={headerVariants}
            >
                <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-purple-200 to-purple-400">
                    Hotel Management System
                </h1>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    A comprehensive CLI-based and Web-based hotel management system built using Python, Colorama, and MySQL. It streamlines hotel operations, from guest management to billing, with a user-friendly interface.
                </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center mb-16">
                <div className="relative rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-[0_0_40px_rgba(124,58,237,0.2)] hover:border-purple-500/60 transition-all duration-500 group">
                    <Image
                        src="../projects/hotel_management.png"
                        alt="Hotel Management"
                        height={400}
                        width={800}
                        className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </motion.div>

            <motion.div
                className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg mb-12 hover:border-purple-500/50 transition-colors duration-300"
                variants={itemVariants}
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
                    <span className="text-purple-400">✨</span> Project Overview
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    The Hotel Management System is a dual-interface application (CLI & Web) designed to modernize hotel administration. It leverages a robust MySQL database to manage guest information, room bookings, and staff details efficiently. The CLI version features a color-coded interface powered by Colorama for enhanced usability, while the Web version utilizes Flask to provide accessible management tools.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                    className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg hover:border-purple-500/50 transition-colors duration-300 h-full"
                    variants={itemVariants}
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-purple-400">⚙️</span> Core Functionalities
                    </h3>
                    <ul className="space-y-4">
                        {[
                            { title: "Guest Management", desc: "Add, update, and view guest information, including personal details and stay history." },
                            { title: "Room Booking", desc: "Check room availability, book rooms for guests, and manage check-in and check-out processes." },
                            { title: "Staff Management", desc: "Maintain a database of hotel staff, including their roles and contact information." },
                            { title: "Billing and Invoicing", desc: "Generate bills for guests based on their stay and services availed." }
                        ].map((feature, index) => (
                            <li key={index} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors duration-300">
                                <span className="block font-semibold text-purple-300 mb-1">{feature.title}</span>
                                <span className="text-gray-400 text-sm">{feature.desc}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg hover:border-purple-500/50 transition-colors duration-300 h-full"
                    variants={itemVariants}
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-purple-400">🛠</span> Technical Deep Dive
                    </h3>
                    <ul className="space-y-4">
                        {[
                            { icon: "🐍", title: "Python", desc: "The core logic of the application is written in Python." },
                            { icon: "🗄️", title: "MySQL", desc: "Used for data persistence, storing all guest, booking, and staff information." },
                            { icon: "🎨", title: "Colorama", desc: "Adds color to the command-line interface for a better user experience." },
                            { icon: "🌐", title: "Flask", desc: "Powers the web environment to manage core functionalities." },
                            { icon: "💻", title: "CLI", desc: "Lightweight command-line interface for versatile deployment." }
                        ].map((tech, index) => (
                            <li key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                                <span className="text-2xl">{tech.icon}</span>
                                <div>
                                    <span className="block font-semibold text-purple-300">{tech.title}</span>
                                    <span className="text-gray-400 text-sm">{tech.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            <motion.div
                className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg mb-12 hover:border-purple-500/50 transition-colors duration-300"
                variants={itemVariants}
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">
                    Detailed Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "User Management", items: ["Secure login for Admin & Staff", "Role-based access control", "Local credential storage", "Session timer"] },
                        { title: "Booking & Reservations", items: ["Streamlined booking process", "Automatic availability checks", "Cancellation with refund logic", "Date-range booking retrieval"] },
                        { title: "Room & Tariff Management", items: ["Inventory management", "Dynamic tariff updates", "Multiple room categories"] },
                        { title: "Billing & Finance", items: ["Automated bill generation", "Dynamic GST calculation", "Payment status tracking", "Daily financial summaries"] },
                        { title: "Reporting", items: ["Occupancy analysis", "Booking volume trends", "Customer billing status"] }
                    ].map((section, index) => (
                        <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors duration-300">
                            <h4 className="text-xl font-bold text-purple-300 mb-4">{section.title}</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {section.items.map((item, i) => (
                                    <li key={i} className="text-sm">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg mb-16 hover:border-purple-500/50 transition-colors duration-300"
                variants={itemVariants}
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">
                    Getting Started
                </h2>
                
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-purple-300 mb-3">Prerequisites</h3>
                        <ul className="list-disc list-inside text-gray-300 ml-4">
                            <li>Python 3.x</li>
                            <li>MySQL Server</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-purple-300 mb-3">Installation</h3>
                        <div className="bg-black/50 p-4 rounded-xl border border-white/10 font-mono text-sm text-gray-300 overflow-x-auto">
                            pip install mysql-connector-python colorama
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-purple-300 mb-3">Database Setup</h3>
                        <p className="text-gray-300 mb-3">Ensure a MySQL database named <strong>hotel</strong> exists with the following tables:</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["customer", "booking", "room", "bill", "av_room"].map((table, i) => (
                                <span key={i} className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-xs text-purple-200 font-mono">
                                    {table}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-300 mb-2 text-sm">Update connection parameters in <code>main.py</code>:</p>
                        <div className="bg-black/50 p-4 rounded-xl border border-white/10 font-mono text-sm text-gray-300 overflow-x-auto">
                            <pre>{`conn = sql.connect(
  host="localhost",
  user="YourUsername",
  password="YourPassword",
  database="hotel"
)`}</pre>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-purple-300 mb-3">Usage</h3>
                        <div className="bg-black/50 p-4 rounded-xl border border-white/10 font-mono text-sm text-gray-300 overflow-x-auto mb-4">
                            python main.py
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <p className="font-bold text-gray-200 mb-2">Default Admin Credentials:</p>
                            <ul className="list-disc list-inside text-gray-400 text-sm">
                                <li>User: DakshSingh</li>
                                <li>Password: dakshsingh</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div className="text-center mb-12" variants={itemVariants}>
                <a
                    href="https://github.com/DakshSingh-GitHub/HotelManagement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300 hover:scale-105 hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                </a>
            </motion.div>
        </motion.div>
    );
}
