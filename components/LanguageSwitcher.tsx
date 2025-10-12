'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';

export default function LanguageSwitcher({className = ''}: { className?: string }) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: string) => {
        router.replace(pathname, {locale: newLocale});
    };

    const otherLocale = routing.locales.find(item => item !== locale);

    if (!otherLocale) return null;

    return (
        <button
            onClick={() => handleLanguageChange(otherLocale)}
            className={`cursor-pointer ${className}`}
        >
            {otherLocale.toUpperCase()}
        </button>
    );
}