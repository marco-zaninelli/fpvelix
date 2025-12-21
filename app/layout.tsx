// app/layout.tsx
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

// Use an optional property for locale to satisfy Next.js internal types
type Props = {
    children: React.ReactNode;
    params: Promise<{ locale?: string }>; // Made locale optional
};

export default async function RootLayout(props: Props) {
    // 1. Await the params
    const params = await props.params;

    // 2. Fallback to 'de' if locale is not provided
    const locale = params.locale || "de";

    // 3. Fetch translations
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body className={jura.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
            {props.children}
            <CookieBanner />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}