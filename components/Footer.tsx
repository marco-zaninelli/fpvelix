import {useTranslations} from 'next-intl';
import {Link} from "@/i18n/navigation";

export default function Footer() {
    const t = useTranslations('common');

    return (
        <footer className={'mx-40 my-10'}>
            <div className={'flex flex-row justify-between items-start'}>
                <div className={'flex flex-col justify-between'}>
                    <div>
                        <h1 className={"uppercase"}>{t("title")}</h1>
                        <p className={'font-bold'}>{t('motto')}</p>
                    </div>
                </div>
                <div className={'flex flex-col mt-10'}>
                    <div className={'text-3xl flex flex-col items-end gap-6'}>
                        <a href={`mailto:${t('email')}`} className={'w-fit'}>{t('email')}</a>
                        <a href={`tel:${t('phone')}`} className={'w-fit'}>{t('phone')}</a>
                    </div>
                </div>
            </div>

            {/* Legal */}
            <div className={'flex flex-row justify-between mt-20'}>
                <div className={'text-md'}>
                    {t('copyright')}{' '}
                    <a
                        href="https://marco.zaninelli.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={'underline'}
                    >
                        Marco Zaninelli
                    </a>
                </div>

                <div className={'text-md'}>
                    <Link href={"/impressum"}>Impressum</Link>
                    <span className="mx-8">/</span>
                    <Link href={"/privacy"}>Privacy Policy</Link>
                    <span className="mx-4">/</span>
                    <Link href={"/cookie"}>Cookie Policy</Link>
                </div>
            </div>
        </footer>
    )
}