
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { staggerContainer } from "@/components/animations";

export default function CodeJudgePage() {
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
                    Code Judge (FastAPI Backend)
                </h1>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    A lightweight Online Code Judge built using Flask, designed
                    to replicate the core functionality of platforms like
                    Codeforces or LeetCode. It executes user-submitted Python
                    code, evaluates it against predefined test cases, and
                    provides detailed verdicts. This project serves as a
                    foundational implementation to understand the intricacies of
                    automated code evaluation systems, offering a pocket-sized,
                    yet powerful, solution for competitive programming practice
                    or educational purposes.
                </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center mb-16">
                <div className="relative rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-[0_0_40px_rgba(124,58,237,0.2)] hover:border-purple-500/60 transition-all duration-500 group">
                    <Image
                        src="../projects/code_judge.png"
                        alt="Code Judge"
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
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white flex items-center gap-3">
                    <span className="text-purple-400">✨</span> Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "Execute Python code submissions", desc: "Securely runs user-provided Python scripts in an isolated environment." },
                        { title: "Accept custom input (stdin)", desc: "Allows test cases to be dynamically supplied to the executing code via standard input." },
                        { title: "Compare output with expected output", desc: "Automatically verifies the correctness of the submitted code's output against predefined correct solutions." },
                        { title: "Comprehensive Verdict System", desc: "Provides clear feedback on submission results, including Accepted, Wrong Answer, Runtime Error, and Time Limit Exceeded." },
                        { title: "Execution time limits", desc: "Enforces strict time constraints on code execution to prevent infinite loops and inefficient solutions." },
                        { title: "Clean API", desc: "Offers a well-structured and easy-to-use API endpoint for submitting code and retrieving results programmatically." },
                        { title: "JSON-based request/response", desc: "Utilizes industry-standard JSON format for seamless data exchange between clients and the judge server." },
                        { title: "Beginner-friendly but system-level logic", desc: "Designed with an approachable architecture, while incorporating fundamental system-level concepts essential for robust code execution and evaluation." }
                    ].map((feature, index) => (
                        <li key={index} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors duration-300">
                            <span className="block font-semibold text-purple-300 mb-1">✅ {feature.title}</span>
                            <span className="text-gray-400 text-sm">{feature.desc}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                    className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg hover:border-purple-500/50 transition-colors duration-300 h-full"
                    variants={itemVariants}
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-purple-400">🧠</span> How It Works
                    </h3>
                    <ul className="space-y-4 text-gray-300">
                        {[
                            "User sends Python code via API: Submissions are made through a dedicated REST API endpoint.",
                            "Code is written to a temporary file: The received code is saved to a secure, temporary location on the server filesystem.",
                            "Code is executed using `subprocess`: Python's `subprocess` module is leveraged to run the user's code as a separate process.",
                            "Input is piped through stdin: Test case inputs are redirected to the executing code's standard input stream.",
                            "Output is captured from stdout: The executed code's standard output is captured for later comparison.",
                            "Output is compared with expected output: The captured output is then meticulously compared against the known correct output.",
                            "Judge returns a detailed verdict: Based on the comparison and execution metrics, a final verdict is determined."
                        ].map((step, index) => {
                            const [title, desc] = step.split(": ");
                            return (
                                <li key={index} className="flex gap-3">
                                    <span className="text-purple-500 font-bold min-w-6">{index + 1}.</span>
                                    <div>
                                        <span className="font-semibold text-gray-200">{title}:</span> <span className="text-gray-400">{desc}</span>
                                    </div>
                                </li>
                            );
                        })}
                        <li className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-sm text-yellow-200">
                            ⚠️ <span className="font-bold">Note on Sandboxing:</span> Current implementation provides basic process isolation primarily through timeouts. Advanced security measures like Docker containerization are considered for future enhancements.
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg hover:border-purple-500/50 transition-colors duration-300 h-full"
                    variants={itemVariants}
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-purple-400">🛠</span> Tech Stack
                    </h3>
                    <ul className="space-y-4">
                        {[
                            { icon: "🐍", title: "Python", desc: "The core programming language for the backend logic and code execution." },
                            { icon: "🌶", title: "FastAPI", desc: "A lightweight web framework used to build the API for handling submissions." },
                            { icon: "⚙️", title: "subprocess module", desc: "Essential for spawning and managing external processes to execute user code." },
                            { icon: "📄", title: "tempfile module", desc: "Utilized for securely creating and managing temporary files for code storage and execution." },
                            { icon: "🧪", title: "Postman", desc: "Used extensively for API development, testing, and debugging the backend endpoints." }
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
                className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-700/30 shadow-lg mb-16 hover:border-purple-500/50 transition-colors duration-300"
                variants={itemVariants}
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">
                    Understanding the Verdict System
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { color: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10", icon: "🟢", title: "AC — Accepted", desc: "Correct output for all test cases within limits." },
                        { color: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10", icon: "🔴", title: "WA — Wrong Answer", desc: "Output did not match expected output." },
                        { color: "text-yellow-400", border: "border-yellow-500/30", bg: "bg-yellow-500/10", icon: "⚠️", title: "RE — Runtime Error", desc: "Code terminated abnormally (crash/exception)." },
                        { color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10", icon: "⏱", title: "TLE — Time Limit", desc: "Execution exceeded maximum allowed time." }
                    ].map((verdict, index) => (
                        <div key={index} className={`p-6 rounded-xl border ${verdict.border} ${verdict.bg} text-center transition-transform duration-300 hover:scale-105`}>
                            <div className="text-3xl mb-3">{verdict.icon}</div>
                            <h4 className={`font-bold mb-2 ${verdict.color}`}>{verdict.title}</h4>
                            <p className="text-gray-300 text-sm">{verdict.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div className="text-center mb-12" variants={itemVariants}>
                <a
                    href="https://github.com/DakshSingh-GitHub/CodeJudge"
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
