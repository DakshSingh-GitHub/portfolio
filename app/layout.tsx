import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxanium } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const oxanium = Oxanium({
    subsets: ["latin"],
    variable: "--font-oxanium",
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Meet Daksh Singh | Student",
    description: "Portfolio Website that has been made by me, Daksh Singh, to showcase my profile",
    icons: {
        icon: "/daksh/daksh-logo.png",
        shortcut: "/daksh/daksh-logo.png",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={` ${oxanium.variable} ${geistSans.variable} ${geistMono.variable} antialiased text-sm sm:text-base pt-36 sm:pt-28`} >
                <ParticleBackground />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
