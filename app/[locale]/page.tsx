'use client';

import {useTranslations} from 'next-intl';
import VimeoVideo from "@/components/VimeoVideo";
import Image from "next/image";

import descriptionImage from '@/public/img/img_ph_1.png'
import projOne from '@/public/img/img_ph_2.png'
import projTwo from '@/public/img/img_ph_3.png'
import projThree from '@/public/img/img_ph_4.png'
import person from '@/public/img/img_ph_5.png'
import services from '@/public/img/img_ph_6.png'

export default function HomePage() {
    const t = useTranslations('home');

    return (
        <>
            <section id={'hero'} className={'my-40'}>
                <h1 className={'px-8 py-4'}>{t('hero-title')}</h1>
                <VimeoVideo
                    id="1126564631"
                    alt={"Hero video"}
                    aspectRatio="2.39/1"
                />
            </section>

            <section id={'description'}
                     className={'flex flex-row gap-20 items-center justify-center max-w-7xl mx-auto mb-40 px-6'}>
                <div className={"w-2/3"}>
                    <h2>{t('h-1')}</h2>
                    <p>{t('p-1')}</p>
                </div>
                <Image src={descriptionImage} alt={""/* TODO:: add alt text */}
                       className={"w-1/3 aspect-[3/4] object-cover"}/>
            </section>

            <section id={'projects'} className={'mb-40 max-w-7xl mx-auto px-6'}>
                <h2>{t('latest-projects')}</h2>
                <div className={"grid grid-cols-3 gap-10 my-6"}>
                    <Image src={projOne} alt={""/* TODO:: add alt text */}
                           className="aspect-[9/16] object-cover w-full"/>
                    <Image src={projTwo} alt={""/* TODO:: add alt text */}
                           className="aspect-[9/16] object-cover w-full"/>
                    <Image src={projThree} alt={""/* TODO:: add alt text */}
                           className="aspect-[9/16] object-cover w-full"/>
                </div>
                <p>View all projects →</p>
            </section>

            <section id={'about'}
                     className={"flex flex-row gap-20 items-center justify-center max-w-7xl mx-auto mb-40 px-6"}>
                <div className={"w-2/3"}>
                    <h2 className={"mb-6"}>{t("h-2")}</h2>
                    <p>{t("p-2_1")}</p>
                    <p className={"!text-4xl px-6 py-10"}>{t("quote")}</p>
                    <p>{t("p-2_2")}</p>
                </div>
                <div className={"w-1/3"}>
                    <Image src={person} alt={""/* TODO:: add alt text */}/>
                </div>
            </section>

            <section id={'services'} className={'mb-40 max-w-7xl mx-auto px-6'}>
                <h2>{t('h-3')}</h2>
                <Image src={services} alt={""/* TODO:: add alt text */} className={'my-6'}/>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <h3>{t('service-h-1')}</h3>
                        <p>{t('service-p-1')}</p>
                    </div>
                    <div>
                        <h3>{t('service-h-2')}</h3>
                        <p>{t('service-p-2')}</p>
                    </div>
                    <div>
                        <h3>{t('service-h-3')}</h3>
                        <p>{t('service-p-3')}</p>
                    </div>
                    <div>
                        <h3>{t('service-h-4')}</h3>
                        <p>{t('service-p-4')}</p>
                    </div>
                </div>
            </section>
        </>
    );
}
