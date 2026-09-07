"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function CodeCartofyPage() {
    return (
        <div className="container mx-auto px-4 py-16 text-center text-white">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-white via-purple-200 to-purple-400">
                CodeCartofy
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto mb-8">
                Interactive Codebase Cartography, Abstract Syntax Tree Dependency Graphing & Architectural Copilot. Documentation coming soon.
            </p>
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
                <FaArrowLeft className="text-sm" />
                Back to Projects
            </Link>
        </div>
    );
}

