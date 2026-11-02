"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function RouteContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <div className={isHome ? "w-full" : "w-full pt-28 sm:pt-32 min-h-[calc(100vh-200px)]"}>
            {children}
        </div>
    );
}
