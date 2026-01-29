"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { bounceIn } from "../animations";

interface CertificateCardProps {
    title: string;
    issuer: string;
    date: string;
    pdfUrl: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
    title,
    issuer,
    date,
    pdfUrl,
}) => {
    return (
        <Link href={pdfUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
            <div className="bg-black/20 backdrop-blur-lg rounded-2xl border border-purple-700/30 p-6 shadow-lg h-full flex flex-col justify-between transition-all duration-300 hover:border-purple-500/80 hover:shadow-purple-500/20 hover:bg-black/30">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {title}
                    </h3>
                    <p className="text-purple-300 font-medium mb-1">{issuer}</p>
                    <p className="text-sm text-gray-400">{date}</p>
                </div>
                <div className="flex items-center mt-4 text-gray-200 group">
                    <Image
                        src="./file.svg"
                        alt="File Icon"
                        width={20}
                        height={20}
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="ml-2 font-semibold transition-colors duration-300 group-hover:text-purple-300">
                        View Certificate
                    </span>
                </div>
            </div>
        </Link>
    );
};

const certificates_g1 = [
    {
        title: "Roadmap To Become An AI-Powered Full Stack Developer In 2026",
        issuer: "WSCube Tech",
        date: "Issued Dec 2025",
        pdfUrl: "https://drive.google.com/file/d/1lfeFznZM7dwUKYpjuJ1atOJfzfCMwFWh/view?usp=sharing",
    },
    {
        title: "ReactJS Foundations for NextJS",
        issuer: "Vercel",
        date: "Issued Nov 2025",
        pdfUrl: "https://drive.google.com/file/d/1q4iYZ7gpiqOGCZe5T5aeVimALCx9QJcD/view?usp=sharing",
    },
    {
        title: "JavaScript for Beginners",
        issuer: "Simplilearn",
        date: "Issued Sept 2024",
        pdfUrl: "https://drive.google.com/file/d/1Iv5KWxPLjKpw2yfK56lKN6iWkrbiFony/view?usp=sharing",
    },
    {
        title: "Build A Career In Full Stack Development In GenAl Era",
        issuer: "WSCube Tech",
        date: "Issued Jan 2026",
        pdfUrl: "https://drive.google.com/file/d/1WEWspv9kzgZhPcPRLcr2c9XxXGfkAr5t/view?usp=sharing",
    },
];



const Certificate: React.FC = () => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates_g1.map((cert, index) => (
                    <motion.div key={index} variants={bounceIn} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                        <CertificateCard
                            title={cert.title}
                            issuer={cert.issuer}
                            date={cert.date}
                            pdfUrl={cert.pdfUrl}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certificate;
