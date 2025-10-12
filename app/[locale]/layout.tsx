import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {setRequestLocale} from "next-intl/server";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function LangLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    const messages = (await import(`@/locales/${locale}.json`)).default;

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <Header lang={locale} />
            {children}
            <Footer />
        </NextIntlClientProvider>
    );
}
