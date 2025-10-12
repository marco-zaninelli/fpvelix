import Image from "next/image";
import Logo from "@/public/img/fpvelix_logo.svg";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

const PagesLinks = [
    {label: "projects", href: "/",},
    {label: "drones", href: "/",},
    {label: "get in touch", href: "/",}
];

export default function Header({lang = 'de'}) {
    return (
        <header className="flex items-center justify-between my-8 mx-10">
            {/* Logo */}
            <div className="w-40">
                <Image
                    src={Logo}
                    alt="Fpvelix logo"
                    className="h-auto w-full"
                    priority
                />
            </div>

            {/* Navigation */}
            <div className="flex items-center text-lg tracking-wide font-bold">
                <nav>
                    <ul className="flex items-center lowercase">
                        {PagesLinks.map((item, index) => (
                            <li key={item.label} className="flex items-center">
                                <Link
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                                {index < PagesLinks.length && (
                                    <span className="mx-8">/</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <LanguageSwitcher />
            </div>
        </header>
    )
        ;
}
