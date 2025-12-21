'use client';

import {useTranslations} from 'next-intl';
import VimeoVideo from "@/components/VimeoVideo";
import Image from "next/image";
import {FileCheck, Film, Camera, Settings, ArrowRight} from "lucide-react"
import {ServiceCard} from "@/components/ServiceCard";
import {AboutDetailSection} from "@/components/AboutDetailSection";
import Link from "next/link";

import descriptionImage from '@/public/img/img_ph_1.png'
import person from '@/public/img/img_ph_5.png'
import services from '@/public/img/img_ph_6.png'
import ProjectCard from "@/components/ProjectCard";

export default function HomeClient({posts}: { posts: any[] }) {
    const t = useTranslations('home');

    return (
        <>
            <section id={'hero'} className={'mb-20 sm:mb-40 mt-80'}>
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

            <section className="py-24 sm:py-32 container mx-auto px-6 lg:px-12 max-w-screen-2xl" id={'description'}>
                <div className="grid sm:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className={'mb-4'}>{t('h-1')}</h2>
                        <p>{t('p-1')}</p>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                        <Image src={descriptionImage} alt={""/* TODO:: add alt text */} fill className="object-cover"/>
                    </div>
                </div>
            </section>

            <section id={'projects'} className={'mb-40 max-w-7xl mx-auto px-6'}>
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2>{t('latest-projects')}</h2>
                    </div>
                    <Link
                        href="/projects"
                        className="hidden sm:inline-flex items-center gap-2 hover:text-white transition-colors group"
                    >
                        View all projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                    </Link>
                </div>

                <div className={"grid sm:grid-cols-3 gap-6 my-6"}>
                    {posts.map((post) => (
                        <ProjectCard
                            key={post._id}
                            title={post.title}
                            alt={post.title}
                            videoId={post.videoId}
                            thumbnailVideoId={post.thumbnailVideoId}
                        />
                    ))}
                </div>
            </section>

            {/* About Felix Section */}
            <section id="about" className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid sm:grid-cols-5 gap-8 items-center">

                    <h2 className="sm:hidden mb-8">
                        {t("h-2")}
                    </h2>

                    <div className="sm:col-span-2 space-y-4">
                        <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                            <Image
                                src={person}
                                alt="Felix with drone equipment"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        </div>
                    </div>

                    <div className="sm:col-span-3 sm:pl-8">
                        <h2 className="hidden sm:block mb-8">
                            {t("h-2")}
                        </h2>

                        <div className="space-y-6">
                            <AboutDetailSection title={t("h-vision")} description={t("p-vision")}/>
                            <AboutDetailSection title={t("h-pilot")} description={t("p-pilot")}/>
                            <AboutDetailSection title={t("h-approach")} description={t("p-approach")}/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 sm:py-32 max-w-screen-2xl mx-auto px-6 lg:px-12">
                <div className="container mx-auto">
                    <h2 className="mb-6">Services</h2>

                    <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-12">
                        <Image
                            src={services}
                            alt={""/* TODO:: add alt text */}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
                        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 max-w-xl">
                            <p className={"text-white"}>{t("p-3")}</p>
                        </div>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <ServiceCard Icon={FileCheck} title={t("service-h-1")} description={t("service-p-1")}/>
                    <ServiceCard Icon={Camera} title={t("service-h-2")} description={t("service-p-2")}/>
                    <ServiceCard Icon={Film} title={t("service-h-3")} description={t("service-p-3")}/>
                    <ServiceCard Icon={Settings} title={t("service-h-4")} description={t("service-p-4")}/>
                </div>
            </section>
        </>
    );
}
