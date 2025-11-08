"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/gtag";

export const usePageview = (enabled: boolean, excludedPages: string[] = []) => {
    const pathname = usePathname();

    useEffect(() => {
        if (!enabled) return;
        if (excludedPages.includes(pathname)) return;

        pageview(pathname);
    }, [pathname, enabled, excludedPages]);
};
