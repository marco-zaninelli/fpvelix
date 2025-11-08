'use client';

import './globals.css';
import { Jura } from 'next/font/google';
import React from 'react';
import { usePageview } from "@/lib/usePageview";
import { useCookies, CookiesProvider } from "react-cookie";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";

const jura = Jura({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
});

export default function RootLayout({ children, params }: {
    children: React.ReactNode;
    params?: { lang?: string };
}) {

    const lang = params?.lang || 'de';

    return (
        <html lang={lang}>
        <body className={jura.className}>
        <CookiesProvider>
            <LayoutContent>{children}</LayoutContent>
        </CookiesProvider>
        </body>
        </html>
    );
}

// Separate component for hooks (must be inside CookiesProvider)
function LayoutContent({ children }: { children: React.ReactNode }) {
    const [cookies] = useCookies(["ga_consent"]);
    const consent = cookies.ga_consent === "true";

    usePageview(consent, ["/privacy", "/cookies"]);

    return (
        <>
            <GoogleAnalytics consent={consent} />
            {children}
            <CookieConsent />
        </>
    );
}
