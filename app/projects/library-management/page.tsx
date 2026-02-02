"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { staggerContainer } from "@/components/animations";

export default function LibraryManagementPage() {
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

    return (
        <motion.div 
            className="container mx-auto px-4 sm:px-6 py-10 text-white"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            <motion.div 
                className="text-center mb-12 bg-black/20 backdrop-blur-xl rounded-3xl border border-purple-700/30 p-8 md:p-12"
                style={{ boxShadow: "0 0 30px rgba(124,58,237,0.1)" }}
                whileHover={{ 
                    boxShadow: "0 0 50px rgba(124,58,237,0.2)",
                    transition: { duration: 0.5, ease: "easeInOut" }
                }}
                variants={headerVariants}
            >
                <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-purple-200 to-purple-400">
                    Library Management System
                </h1>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    A comprehensive CLI-based and Web-based solution for efficient library operations, designed to streamline book inventory, member management, and lending processes.
                </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center mb-16">
                <motion.div 
                    className="relative rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-[0_0_40px_rgba(124,58,237,0.2)]"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={{
                        rest: { borderColor: "rgba(168, 85, 247, 0.3)" },
                        hover: { 
                            borderColor: "rgba(168, 85, 247, 0.6)",
                            transition: { duration: 0.5 }
                        }
                    }}
                >
                    <motion.div
                        variants={{
                            rest: { scale: 1 },
                            hover: { 
                                scale: 1.05,
                                transition: { duration: 0.7, ease: "easeInOut" }
                            }
                        }}
                    >
                        <Image
                            src="../projects/library_management.png"
                            alt="Library Management"
                            height={400}
                            width={800}
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div 
                        className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"
                        variants={{
                            rest: { opacity: 0 },
                            hover: { opacity: 1, transition: { duration: 0.3 } }
                        }}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg mb-12 hover:border-purple-500/50 transition-colors duration-300"
                variants={itemVariants}
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
                    <span className="text-purple-400">✨</span> Project Overview
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    The Library Management System is a robust application developed in Python, designed to automate essential library functions. It serves as a powerful tool for librarians to manage book inventories and member activities without the need for complex graphical interfaces. Its lightweight nature ensures high performance and simplicity, making it ideal for efficient library administration.
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
                            { title: "Book Management", desc: "Add, update, search, and delete books with tracking for ID, title, author, and quantity." },
                            { title: "Member Management", desc: "Maintain a database of members, including contact info and borrowing history." },
                            { title: "Issue & Return", desc: "Seamlessly handle book lending and returns with automatic inventory updates." },
                            { title: "Inventory Control", desc: "Real-time tracking of available books with low-stock alerts." },
                            { title: "Search & Discovery", desc: "Powerful search by title or author for quick book retrieval." }
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
                            { icon: "🌐", title: "Web Application", desc: "Modern UI/UX built with Flask for intuitive management." },
                            { icon: "📊", title: "Data Structures", desc: "Efficient use of dictionaries and lists for rapid in-memory data access." },
                            { icon: "💻", title: "CLI", desc: "Intuitive command-line interface with structured menus." },
                            { icon: "🧩", title: "Modular Design", desc: "Code organized into logical functions for maintainability." },
                            { icon: "💾", title: "Data Persistence", desc: "Adaptable architecture for future database integration (MySQL, JSON)." }
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
                        { title: "Book Management", items: ["Add/Edit book details", "Search by title/author/genre", "Real-time availability updates", "Inventory auditing"] },
                        { title: "Visitor Management", items: ["Register new members", "Edit visitor details", "Search functionality", "Safe removal logic"] },
                        { title: "Book Issuance", items: ["Streamlined issuing process", "Automatic return date calculation", "Price calculation", "History tracking"] },
                        { title: "User Management (Admin)", items: ["Add/Remove system users", "Role-based access", "Secure credential storage", "User auditing"] }
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
                    API & Method Reference
                </h2>
                <div className="space-y-8">
                    {[
                        {
                            title: "Admin Controller",
                            file: "controllers/admin_controller/admin_controller.py",
                            methods: [
                                { name: "add_users(username)", desc: "Onboard new admin/staff users." },
                                { name: "view_users()", desc: "Review all registered users." },
                                { name: "delete_user(username)", desc: "Remove a user from the system." },
                                { name: "edit_user(username)", desc: "Modify existing user details." }
                            ]
                        },
                        {
                            title: "Book Controller",
                            file: "controllers/reception_controller/book_controller.py",
                            methods: [
                                { name: "add_book(...)", desc: "Add new books to inventory." },
                                { name: "edit_book(id)", desc: "Modify book details." },
                                { name: "find_book_information()", desc: "Search for books." },
                                { name: "update_book_availability(id)", desc: "Adjust stock levels." }
                            ]
                        },
                        {
                            title: "Issue Controller",
                            file: "controllers/reception_controller/issue_controller.py",
                            methods: [
                                { name: "create_issue(...)", desc: "Initiate a book loan." },
                                { name: "return_book()", desc: "Process book returns." }
                            ]
                        },
                        {
                            title: "Visitor Controller",
                            file: "controllers/visitor_controller/visitor_controller.py",
                            methods: [
                                { name: "add_visitor(...)", desc: "Register new library members." },
                                { name: "edit_visitor(id)", desc: "Update member details." },
                                { name: "find_visitor_information()", desc: "Locate member records." }
                            ]
                        }
                    ].map((controller, index) => (
                        <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-bold text-purple-300 mb-1">{controller.title}</h3>
                            <p className="text-gray-400 text-sm font-mono mb-4">{controller.file}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {controller.methods.map((method, i) => (
                                    <div key={i} className="bg-black/30 p-3 rounded-lg border border-white/5">
                                        <code className="text-purple-200 font-bold block mb-1">{method.name}</code>
                                        <span className="text-gray-400 text-sm">{method.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div className="text-center mb-12" variants={itemVariants}>
                <a
                    href="https://github.com/DakshSingh-GitHub/LibraryManagement"
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
