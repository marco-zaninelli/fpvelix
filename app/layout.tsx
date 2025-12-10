import './globals.css';
import {Jura} from 'next/font/google';
import React from 'react';

const jura = Jura({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
});

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
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