import React from 'react';
import { Shield } from 'lucide-react'; // Standardized Iconography

export default function PrivacyPolicyPage() {

    const companyName = "Fpvelix";
    const privacyContactEmail = "info@fpvelix.de";
    const companyAddress = "[Your Company Name and Address]";
    const cookieSettingsLink = "#cookie-settings-section";

    const lastUpdated = "December 7, 2025";

    return (
        <main className="mx-auto max-w-4xl px-4 py-16 md:py-24">
            {/* Header Section */}
            <header className="mb-12 space-y-4 text-center">
                <Shield className="size-12 mx-auto text-accent" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-primary md:text-5xl">
                    Privacy Policy
                </h1>
                {/* Text: Uses text-secondary for descriptive text */}
                <p className="text-secondary">
                    Last Updated: {lastUpdated}
                </p>
            </header>

            <div className="space-y-12">
                {/* 1. Commitment Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">
                        1. Our Commitment to Privacy
                    </h2>
                    <p className="text-secondary leading-relaxed">
                        We, {companyName}, are committed to protecting the privacy of our users. This policy outlines our practices concerning the processing of data collected through our service, particularly focusing on our use of anonymous analytics.
                    </p>
                </section>

                <hr className="border-secondary/20" />

                {/* 2. No Personal Data Collected Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">
                        2. Data We Do NOT Collect (No Personal Data)
                    </h2>
                    <p className="text-secondary leading-relaxed">
                        Our service is designed to operate with minimal data intake. **We do not collect, process, or store any personal data** that can directly or indirectly identify you, such as names, email addresses, payment information, or unique identifiers tied to your identity.
                    </p>
                </section>

                <hr className="border-secondary/20" />

                {/* 3. Anonymous Data Collection Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-primary">
                        3. Anonymous Data Collection (Google Analytics)
                    </h2>
                    <p className="text-secondary leading-relaxed">
                        We collect non-personal, anonymous data solely for the purpose of understanding user behavior and improving our service performance.
                    </p>

                    <h3 className="text-xl font-semibold text-primary mt-4">
                        A. Data Collected
                    </h3>
                    <p className="text-secondary leading-relaxed">
                        We use Google Analytics to gather statistical data, which is aggregated and anonymized. This includes information like device type, browser information, pages viewed, time spent on pages, and navigation paths. This data cannot be traced back to an individual user.
                    </p>

                    <h3 className="text-xl font-semibold text-primary mt-4">
                        B. Legal Basis and Consent (EU/GDPR)
                    </h3>
                    <ul className="list-disc ml-6 space-y-2 text-secondary">
                        <li>
                            **Legal Basis:** Since our primary users are in the European Union, the legal basis for processing this anonymous data is **user consent**, as mandated by the GDPR and the ePrivacy Directive (Cookie Law).
                        </li>
                        <li>
                            **Consent Mechanism:** We only activate Google Analytics tracking **after you provide explicit permission** through our on-site cookie banner or consent tool.
                        </li>
                    </ul>
                </section>

                <hr className="border-secondary/20" />

                {/* 4. Data Sharing Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">
                        4. Data Sharing and Third Parties
                    </h2>
                    <p className="text-secondary leading-relaxed">
                        We **do not share or sell** the minimal anonymous data we collect with any third parties for marketing or commercial purposes. The only third party involved in processing is **Google LLC** (Google Analytics), which acts as our data processor, configured to ensure maximum data anonymization (IP anonymization is enabled).
                    </p>
                </section>

                <hr className="border-secondary/20" />

                {/* 5. Cookies Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-primary">
                        5. Cookies and Tracking Technologies
                    </h2>
                    <p className="text-secondary leading-relaxed">
                        We use cookies, which are small text files placed on your device.
                    </p>

                    <ul className="list-disc ml-6 space-y-2 text-secondary">
                        <li>
                            **Functional/Necessary Cookies:** These are essential for the basic operation of the service and do not require your consent.
                        </li>
                        <li>
                            **Analytical Cookies:** These are non-essential cookies (used for Google Analytics) and are **only deployed after we receive your explicit permission** via our consent management tool.
                        </li>
                    </ul>

                    <h3 id="cookie-settings-section" className="text-xl font-semibold text-primary mt-4">
                        Your Right to Control Cookies
                    </h3>
                    <p className="text-secondary leading-relaxed">
                        You have the right to withdraw your consent to the use of analytical cookies at any time via your browser settings or by visiting our dedicated cookie settings: <a href={cookieSettingsLink} className="text-accent underline hover:text-accent/80 font-medium">Manage Cookie Preferences</a>.
                    </p>
                </section>

                <hr className="border-secondary/20" />

                {/* 6. Contact Us Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">
                        6. Contact Us
                    </h2>
                    <p className="text-secondary leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 text-secondary">
                        <li>Email: <a href={`mailto:${privacyContactEmail}`} className="text-accent hover:underline">{privacyContactEmail}</a></li>
                        <li>Address: {companyAddress}</li>
                    </ul>
                </section>

            </div>
        </main>
    );
}