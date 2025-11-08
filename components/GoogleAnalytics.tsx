"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
    consent: boolean;
}

export default function GoogleAnalytics({ consent }: GoogleAnalyticsProps) {
    if (!consent) return null;

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
                id="ga-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
          `,
                }}
            />
        </>
    );
}
