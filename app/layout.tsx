import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxanium } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";
import RouteContainer from "@/components/global/RouteContainer";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const oxanium = Oxanium({
    subsets: ["latin"],
    variable: "--font-oxanium",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Daksh Singh | Software Engineer & Systems Builder",
    description: "Personal portfolio of Daksh Singh. Computer Science & AI, full-stack systems engineering, interactive platforms, and algorithms.",
    icons: {
        icon: "/daksh/daksh-logo.png",
        shortcut: "/daksh/daksh-logo.png",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="dark">
            <body className={`${oxanium.variable} ${geistSans.variable} ${geistMono.variable} antialiased text-neutral-200 bg-[#080808] min-h-screen selection:bg-neutral-800 selection:text-white`}>
                <ParticleBackground />
                <Navbar />
                <RouteContainer>
                    {children}
                </RouteContainer>
                <Footer />
            </body>
        </html>
    );
}
