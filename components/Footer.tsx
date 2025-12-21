// import {useTranslations} from 'next-intl';
import {Link} from "@/i18n/navigation";

export default function Footer() {
    // const t = useTranslations('common');

    return (
        <footer className="border-t border-white/10 py-12 px-6" id={"footer"}>
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <h2 className="=mb-2">FPVELIX</h2>
                        <p>Elevate Your Perspective</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                        <a href="mailto:info@fpvelix.de" className="text-xl hover:text-white/80 transition-colors">
                            info@fpvelix.de
                        </a>
                        <a href="tel:+4904618584665" className="text-xl hover:text-white/80 transition-colors">
                            (+49) 0461 858 465
                        </a>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p className={"text-sm"}>©2025 all rights reserved / Built by Marco Zanninelli</p>
                    <div className="flex gap-4">
                        <Link href="/impressum" className="hover:text-white/60 transition-colors">
                            Impressum
                        </Link>
                        <Link href="/cookie-and-privacy" className="hover:text-white/60 transition-colors">
                            Privacy Policy & Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}