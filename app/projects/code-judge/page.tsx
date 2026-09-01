"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import VlyxirPage from "../vlyxir/page";

export default function CodeJudgeRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/projects/vlyxir");
    }, [router]);

    return <VlyxirPage />;
}
