'use client';

import {useTranslations} from 'next-intl';
import VimeoVideo from "@/components/VimeoVideo";
import Image from "next/image";
import {FileCheck, Film, Camera, Settings, ArrowRight} from "lucide-react"
import {ServiceCard} from "@/components/ServiceCard";
import {AboutDetailSection} from "@/components/AboutDetailSection";
import Link from "next/link";

import descriptionImage from '@/public/img/img_ph_1.png'
import projOne from '@/public/img/img_ph_2.png'
import projTwo from '@/public/img/img_ph_3.png'
import projThree from '@/public/img/img_ph_4.png'
import person from '@/public/img/img_ph_5.png'
import services from '@/public/img/img_ph_6.png'
import {ProjectGalleryCard} from "@/components/ProjectGalleryCard";

export default function HomePage() {
    const t = useTranslations('home');

    return (
        <>
            <section id={'hero'} className={'my-40'}>
                <h1 className={'px-8 py-4'}>{t('hero-title')}</h1>
                <div className={"relative"}>
                    <VimeoVideo
                        id="1126564631"
                        alt={"Hero video"}
                        aspectRatio="2.39/1"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background z-20"/>
                </div>
            </section>

            <section id={'description'}
                     className={'flex flex-row gap-20 items-center justify-center max-w-7xl mx-auto mb-40 px-6'}>
                <div className={"w-2/3"}>
                    <h2>{t('h-1')}</h2>
                    <p>{t('p-1')}</p>
                    <Link
                        href="#footer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <Image src={descriptionImage} alt={""/* TODO:: add alt text */}
                       className={"w-1/3 aspect-[3/4] object-cover rounded-xl"}/>
            </section>

            <section id={'projects'} className={'mb-40 max-w-7xl mx-auto px-6'}>
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2>{t('latest-projects')}</h2>
                    </div>
                    <Link
                        href="/projects"
                        className="hidden md:inline-flex items-center gap-2 hover:text-gray-400 transition-colors group"
                    >
                        View all projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className={"grid grid-cols-3 gap-10 my-6"}>
                    <ProjectGalleryCard src={projOne} title={"Title"} alt={""/* TODO:: add alt text */} />
                    <ProjectGalleryCard src={projTwo} title={"Title"} alt={""/* TODO:: add alt text */} />
                    <ProjectGalleryCard src={projThree} title={"Title"} alt={""/* TODO:: add alt text */} />
                </div>
            </section>

            {/* About Felix Section */}
            <section id="about" className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                    {/* Left: Image Gallery */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                            <Image
                                src={person}
                                alt="Felix with drone equipment"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:col-span-3 lg:pl-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance leading-tight">{t("h-2")}</h2>

                        <div className="space-y-6">
                            <AboutDetailSection title={t("h-vision")} description={t("p-vision")} />
                            <AboutDetailSection title={t("h-pilot")} description={t("p-pilot")} />
                            <AboutDetailSection title={t("h-approach")} description={t("p-approach")} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="max-w-7xl mx-auto px-6 py-24">
                <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-12">
                    <Image src={services} alt="Aerial cinematography" className="w-full h-full object-cover"/>
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"/>
                    <div className="absolute bottom-8 left-8 max-w-xl">
                        <h2 className="mb-2">{t("h-3")}</h2>
                        <p>{t("p-3")}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <ServiceCard Icon={FileCheck} title={t("service-h-1")} description={t("service-p-1")}/>
                    <ServiceCard Icon={Camera} title={t("service-h-2")} description={t("service-p-2")}/>
                    <ServiceCard Icon={Film} title={t("service-h-3")} description={t("service-p-3")}/>
                    <ServiceCard Icon={Settings} title={t("service-h-4")} description={t("service-p-4")}/>
                </div>
            </section>
        </>
    );
}
