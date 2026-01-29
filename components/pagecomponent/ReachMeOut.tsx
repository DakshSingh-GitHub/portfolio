import Link from "next/link";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
    FaDiscord,
} from "react-icons/fa";

const socialLinks = [
    {
        href: "https://github.com/DakshSingh-GitHub",
        icon: <FaGithub size={32} />,
        label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/daksh-singh-116566331/",
        icon: <FaLinkedin size={32} />,
        label: "LinkedIn",
    },
    {
        href: "https://www.instagram.com/dtlz_564",
        icon: <FaInstagram size={32} />,
        label: "Instagram",
    },
    {
        href: "https://wa.me/+919045390564",
        icon: <FaWhatsapp size={32} />,
        label: "WhatsApp",
    },
    {
        href: "https://discord.com/users/daksh_dtlz_465",
        icon: <FaDiscord size={32} />,
        label: "Discord",
    },
];

export default function ReachMeOut() {
    return (
        <div className="bg-black/20 backdrop-blur-lg rounded-2xl border border-purple-700/30 p-8 shadow-lg h-full flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
                Connect With Me
            </h2>
            <div className="flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-4">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-purple-600/20 border border-transparent hover:border-purple-500/50 transition-all duration-300 group"
                        >
                            <span className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                                {link.icon}
                            </span>
                            <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
