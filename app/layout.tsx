'use client';

import './globals.css';
import {Jura} from 'next/font/google';
import React from 'react';

const jura = Jura({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
});

export default function RootLayout({children, params}: {
    children: React.ReactNode;
    params?: { lang?: string };
}) {

    const lang = params?.lang || 'de';

    return (
        <html lang={lang}>
        <body className={jura.className}>
        <LayoutContent>{children}</LayoutContent>
        </body>
        </html>
    );
}

// Separate component for hooks (must be inside CookiesProvider)
function LayoutContent({children}: { children: React.ReactNode }) {

    return (
        <>
            {children}
        </>
    );
}
