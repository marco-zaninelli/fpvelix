'use client';

import { useTranslations } from 'next-intl';

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const t = useTranslations('home');

    return (
        <div>
            <h1>{t('hero-title')}</h1>
            <p>{t('h-1')}</p>
        </div>
    );
}
