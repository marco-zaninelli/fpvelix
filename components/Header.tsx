'use client';

import Image from "next/image";
import Logo from "@/public/img/fpvelix_logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import {Link} from "@/i18n/navigation";
import {useState, useEffect} from "react";
import { useTranslations } from 'next-intl';

import BurgerIcon from "@/public/icons/burger-icon.svg";
import CloseIcon from "@/public/icons/close-icon.svg"

const PagesLinks = [
    { key: "projects", href: "/projects",},
    { key: "drones", href: "/drones",},
    { key: "contact", href: "/#footer",}
];


export default function Header({lang = 'de'}) {
    const t = useTranslations('nav');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-white/10">
                <div className={"flex items-center justify-between my-8 mx-10"}>

                    {/* Logo */}
                    <Link href={"/"}>
                        <div className="w-40 z-50">
                            <Image
                                src={Logo}
                                alt="Fpvelix logo"
                                className="h-auto w-full"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center text-lg tracking-wide font-bold">
                        <nav>
                            <ul className="flex items-center lowercase">
                                {PagesLinks.map((item, index) => (
                                    <li key={item.key} className="flex items-center">
                                        <Link
                                            href={item.href}
                                        >
                                            {t(item.key)}
                                        </Link>
                                        {index < PagesLinks.length && (
                                            <span className="mx-8">/</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <LanguageSwitcher/>
                    </div>

                    {/* Mobile */}
                    <div className="flex md:hidden items-center z-50">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
                            {isMenuOpen ? (
                                <Image src={CloseIcon} alt="Close menu" className="w-8 h-8 text-white" priority/>
                            ) : (
                                <Image src={BurgerIcon} alt="Open menu" className="w-8 h-8 text-white" priority/>
                            )}
                        </button>
                    </div>
                </div>


            </header>

            {/* Mobile Menu Modal */}
            <div
                className={`
                    fixed inset-0 z-40 bg-[#0a0a0a]
                    transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="flex flex-col h-full p-10 pt-32 text-3xl font-bold text-white">
                    <nav>
                        <ul className="flex flex-col items-center space-y-8 lowercase">
                            {PagesLinks.map((item) => (
                                <li key={item.key}>
                                    <Link
                                        href={item.href}
                                        onClick={closeMenu}
                                    >
                                        {item.key}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="mt-12 flex justify-center">
                        <LanguageSwitcher/>
                    </div>
                </div>
            </div>
        </>
    );
}