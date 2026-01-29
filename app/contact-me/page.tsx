"use client";

import React, { useState } from "react";
import ReachMeOut from "@/components/pagecomponent/ReachMeOut";
import { motion, Variants } from "framer-motion";

export default function ContactMePage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const mailtoSubject = encodeURIComponent(subject);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:gnomeuser001@gmail.com?subject=${mailtoSubject}&body=${body}`;

        setStatusMessage("Please check your email client to send the message.");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
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

    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-10 text-white">
            <motion.div
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="text-center mb-12 bg-black/20 backdrop-blur-xl rounded-3xl border border-purple-700/30 p-8 md:p-12 shadow-[0_0_30px_rgba(124,58,237,0.1)] hover:shadow-[0_0_50px_rgba(124,58,237,0.2)] transition-shadow duration-500"
                    variants={headerVariants}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
                        Get in Touch
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out—my digital door is always open for good vibes!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                    <motion.div
                        className="bg-black/20 backdrop-blur-lg rounded-2xl border border-purple-700/30 p-8 shadow-lg h-full"
                        variants={itemVariants}
                    >
                        <form onSubmit={sendEmail} className="space-y-6 h-full flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="form-group">
                                    <label
                                        htmlFor="name"
                                        className="block text-lg font-medium text-gray-200 mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="mt-1 block w-full bg-black/30 border border-purple-500/50 rounded-lg shadow-sm py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 focus:bg-black/50"
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="email"
                                        className="block text-lg font-medium text-gray-200 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="mt-1 block w-full bg-black/30 border border-purple-500/50 rounded-lg shadow-sm py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 focus:bg-black/50"
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="subject"
                                        className="block text-lg font-medium text-gray-200 mb-2"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        required
                                        className="mt-1 block w-full bg-black/30 border border-purple-500/50 rounded-lg shadow-sm py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 focus:bg-black/50"
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="message"
                                        className="block text-lg font-medium text-gray-200 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={5}
                                        required
                                        className="mt-1 block w-full bg-black/30 border border-purple-500/50 rounded-lg shadow-sm py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 focus:bg-black/50"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
                                >
                                    Send Message
                                </button>
                                {statusMessage && (
                                    <p className="text-center text-green-400 mt-4">{statusMessage}</p>
                                )}
                            </div>
                        </form>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="h-full">
                        <ReachMeOut />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
