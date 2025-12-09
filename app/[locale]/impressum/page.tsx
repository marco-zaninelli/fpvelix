'use client';

import {useTranslations} from "next-intl";

export default function ImpressumPage() {
    const tCommon = useTranslations('common');
    const tImpressum = useTranslations('impressum');

    const cleanedPhone = tCommon("phone").replace(/[\s\(\)+]/g, '');

    return (
        <div className="container mx-auto mt-18 px-6 py-16 max-w-4xl">
            <h1 className="mb-12">{tImpressum("title")}</h1>

            <div className="space-y-8">
                <section>
                    <h2 className="mb-4">{tImpressum("section-h-1")}</h2>
                    <p>
                        {tCommon("title")}
                        <br/>
                        {tCommon("name")}
                        <br/>
                        {tCommon("address.street")}
                        <br/>
                        {tCommon("address.postalCode")}, {tCommon("address.city")}
                        <br/>
                        ({tCommon("address.state")}) {tCommon("address.country")}
                    </p>
                </section>

                <section>
                    <h2 className="mb-4">{tImpressum("section-h-2")}</h2>
                    <p>
                        E-Mail:{" "}
                        <a href={`mailto:${tCommon("email")}`} className="hover:underline">
                            {tCommon("email")}
                        </a>
                        <br/>
                        Telefon:{" "}
                        <a href={`tel:+${cleanedPhone}`} className="hover:underline">
                            {tCommon("phone")}
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="mb-4">
                        {tImpressum("section-h-3")}
                    </h2>
                    <p>
                        {tCommon("name")}
                        <br/>
                        {tCommon("address.street")}
                        <br/>
                        {tCommon("address.postalCode")}, {tCommon("address.city")}
                        <br/>
                        ({tCommon("address.state")}) {tCommon("address.country")}
                    </p>
                </section>

                <section>
                    <h2 className="mb-4">{tImpressum("disclaimer-h")}</h2>

                    <h3 className="mb-2">{tImpressum("disclaimer-h-1")}</h3>
                    <p className="mb-4">
                        {tImpressum("disclaimer-p-1")}
                    </p>

                    <h3 className="mb-2">{tImpressum("disclaimer-h-2")}</h3>
                    <p className="mb-4">
                        {tImpressum("disclaimer-p-2")}
                    </p>

                    <h3 className="mb-2">{tImpressum("disclaimer-h-3")}</h3>
                    <p>
                        {tImpressum("disclaimer-p-3")}
                    </p>
                </section>
            </div>
        </div>
    );
}