import './globals.css';
import {Jura} from 'next/font/google';
import React from 'react';
import {CookieBanner} from "@/components/CookieBanner";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const jura = Jura({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
});

export default async function RootLayout({
                                             children,
                                             params: { locale }
                                         }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Fetch translations on the server side
    const messages = await getMessages();

    return (
        <html lang={locale || "de"}>
        <body className={jura.className}>
        {/* Wrap the application in the provider so Client Components can access translations */}
        <NextIntlClientProvider messages={messages}>
            <LayoutContent>{children}</LayoutContent>
            <CookieBanner />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

function LayoutContent({children}: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}