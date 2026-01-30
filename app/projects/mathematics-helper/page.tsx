
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { staggerContainer } from "@/components/animations";

export default function MathematicsHelperPage() {
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
                    Mathematics Helper
                </h1>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    A comprehensive Java-based application designed to assist users in solving a wide range of mathematical problems, from arithmetic to advanced geometry and algebra.
                </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center mb-16">
                <div className="relative rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-[0_0_40px_rgba(124,58,237,0.2)] hover:border-purple-500/60 transition-all duration-500 group">
                    <Image
                        src="../projects/mathshelpjava.png"
                        alt="Mathematics Helper"
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
                    The Mathematics Helper is a robust tool built with Java that simplifies complex mathematical computations. It offers a user-friendly interface for students and professionals to perform calculations, verify results, and understand mathematical concepts through practical application.
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
                            { title: "Arithmetic Operations", desc: "Perform basic and advanced arithmetic calculations with precision." },
                            { title: "Algebra Solver", desc: "Solve algebraic equations, expressions, and find roots of polynomials." },
                            { title: "Geometry Calculator", desc: "Calculate properties of 2D and 3D shapes, including area, volume, and intersections." },
                            { title: "Trigonometry Functions", desc: "Evaluate trigonometric functions, identities, and solve triangles." }
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
                            { icon: "☕", title: "Core Java", desc: "Built entirely in Java, utilizing object-oriented principles for modularity." },
                            { icon: "🧩", title: "Modular Design", desc: "Codebase organized into distinct packages for Algebra, Geometry, and Sequences." },
                            { icon: "📚", title: "Math Libraries", desc: "Integrates standard Java Math libraries and custom algorithms for complex computations." },
                            { icon: "📐", title: "Object-Oriented", desc: "Uses classes like Point, Line, and Circle to model mathematical entities intuitively." }
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
                    Project Classes & Modules
                </h2>
                
                <div className="space-y-8">
                    {[
                        {
                            title: "Sequences & Progressions",
                            package: "sequences.progression",
                            classes: [
                                { name: "ArithmeticProgression", desc: "Handles AP sequences, sum calculations, and term prediction." },
                                { name: "GeometricProgression", desc: "Manages GP sequences, including infinite series and term prediction." }
                            ]
                        },
                        {
                            title: "Permutations & Combinations",
                            package: "pnc.base & pnc.solver",
                            classes: [
                                { name: "Factorial", desc: "Efficient calculation of factorials." },
                                { name: "Combination", desc: "Calculates nCr values." },
                                { name: "Permutation", desc: "Calculates nPr values." },
                                { name: "PncSolver", desc: "User-facing solver for PnC problems." }
                            ]
                        },
                        {
                            title: "Geometry: Base & Shapes",
                            package: "geometry.base & geometry.shapes",
                            classes: [
                                { name: "Point", desc: "Represents 2D/3D points with distance calculations." },
                                { name: "Line2D", desc: "Models lines, slopes, and intersections." },
                                { name: "Circle", desc: "Handles circle properties, tangents, and point checks." },
                                { name: "Triangle", desc: "Calculates area, centroid, and orthocenter." },
                                { name: "Parabola", desc: "Manages parabolic equations and properties." }
                            ]
                        }
                    ].map((module, index) => (
                        <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-bold text-purple-300 mb-1">{module.title}</h3>
                            <p className="text-gray-400 text-sm font-mono mb-4">{module.package}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {module.classes.map((cls, i) => (
                                    <div key={i} className="bg-black/30 p-3 rounded-lg border border-white/5">
                                        <code className="text-purple-200 font-bold block mb-1">{cls.name}</code>
                                        <span className="text-gray-400 text-sm">{cls.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div className="text-center mb-12" variants={itemVariants}>
                <a
                    href="https://github.com/DakshSingh-GitHub/MathematicsHelper"
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
