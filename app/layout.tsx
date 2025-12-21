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

// Define the type to match Next.js 15+ requirements
type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function RootLayout(props: Props) {
    // 1. Await the params to get the locale
    const params = await props.params;
    const locale = params.locale || "de";

    // 2. Fetch translations on the server side
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body className={jura.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
            <LayoutContent>{props.children}</LayoutContent>
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