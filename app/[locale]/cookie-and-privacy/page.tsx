'use client';

import React from 'react';
import {Shield} from 'lucide-react';
import {useTranslations} from "next-intl";

export default function PrivacyPolicyPage() {
    const t = useTranslations('privacy');

    const companyAddress = "Grünbaumgasse 13, 87435 Kempten, Germany";
    const privacyContactEmail = "info@fpvelix.de";

    const removeCookiesAction = (e: React.MouseEvent) => {
        e.preventDefault()
        window.dispatchEvent(new Event("remove-all-cookies"))
    }

    return (
        <main className="mx-auto max-w-4xl px-4 py-16 md:py-24">
            <header className="mb-12 space-y-4 text-center">
                <Shield className="size-12 mx-auto text-white" aria-hidden="true"/>
                <h1 className="text-4xl font-bold text-primary md:text-5xl">
                    {t("title")}
                </h1>
                <p className="text-secondary">
                    {t("last-updated")}
                </p>
            </header>

            <div className="space-y-12">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">{t("h-1")}</h2>
                    <p className="text-secondary leading-relaxed">{t("p-1")}</p>
                </section>

                <hr className="border-secondary/20"/>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">{t("h-2")}</h2>
                    <p className="text-secondary leading-relaxed">{t("p-2")}</p>
                </section>

                <hr className="border-secondary/20"/>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-primary">{t("h-3")}</h2>
                    <p className="text-secondary leading-relaxed">{t("p-3")}</p>
                    <h3 className="text-xl font-semibold text-primary mt-4">{t("h-3-a")}</h3>
                    <p className="text-secondary leading-relaxed">{t("p-3-a")}</p>
                    <h3 className="text-xl font-semibold text-primary mt-4">{t("h-3-b")}</h3>
                    <ul className="list-disc ml-6 space-y-2 text-secondary">
                        <li>{t("li-3-b-1")}</li>
                        <li>{t("li-3-b-2")}</li>
                    </ul>
                </section>

                <hr className="border-secondary/20"/>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">{t("h-4")}</h2>
                    <p className="text-secondary leading-relaxed">{t("p-4")}</p>
                </section>

                <hr className="border-secondary/20"/>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-primary">{t("h-5")}</h2>
                    <p className="text-secondary leading-relaxed">{t("p-5")}</p>
                    <ul className="list-disc ml-6 space-y-2 text-secondary">
                        <li>{t("li-5-1")}</li>
                        <li>{t("li-5-2")}</li>
                    </ul>

                    <h3 id="cookie-settings-section" className="text-xl font-semibold text-primary mt-4">
                        {t("h-5-control")}
                    </h3>
                    <p className="text-secondary leading-relaxed">
                        {t("p-5-control")}{' '}
                        <button onClick={removeCookiesAction}
                                className="text-white hover:underline font-medium cursor-pointer bg-transparent border-none p-0">
                            {t("manage-cookies")}
                        </button>
                        .
                    </p>
                </section>

                <hr className="border-secondary/20"/>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">{t("h-6")}</h2>
                    <p className="text-secondary leading-relaxed">{t("p-6")}</p>
                    <ul className="list-disc ml-6 space-y-1 text-secondary">
                        <li>
                            {t("email-label")}{' '}
                            <a href={`mailto:${privacyContactEmail}`} className="text-white hover:underline">
                                {privacyContactEmail}
                            </a>
                        </li>
                        <li>{t("address-label")} {companyAddress}</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}