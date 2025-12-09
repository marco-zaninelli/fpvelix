import {Volume2, Grid3x3, Shield, Gauge, Zap, Car, Eye, Battery, Radio, Camera, Map, LucideIcon} from 'lucide-react';
import {DroneHeroSection} from '@/components/DroneHeroSection';
import React from 'react';

import DronePH from '@/public/img/drone_ph.jpg'
import HeroPH from '@/public/img/img_ph_6.png'
import Image, {StaticImageData} from "next/image";
import {useTranslations} from "next-intl";

interface Feature {
    Icon: LucideIcon;
    label: string;
}

interface DroneData {
    id: number;
    name: string;
    description: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    features: Feature[];
    strengths: string[];
    useCases: string[];
    isReversed: boolean;
    backgroundClass?: string;
}


export default function DronesPage() {
    const t = useTranslations('drones');

    const droneData: DroneData[] = [
        {
            id: 1,
            name: t('drone-1-name'),
            description: t('drone-1-description'),
            imageSrc: DronePH,
            imageAlt: 'The Quiet One - Cinewhoop drone',
            isReversed: false,
            features: [
                {Icon: Volume2, label: t('drone-1-feature-1')},
                {Icon: Grid3x3, label: t('drone-1-feature-2')},
                {Icon: Shield, label: t('drone-1-feature-3')},
                {Icon: Gauge, label: t('drone-1-feature-4')},
            ],
            strengths: [
                t('drone-1-strengths-1'),
                t('drone-1-strengths-2'),
                t('drone-1-strengths-3'),
                t('drone-1-strengths-4'),
            ],
            useCases: [
                t('drone-1-use-1'),
                t('drone-1-use-2'),
                t('drone-1-use-3'),
                t('drone-1-use-4'),
            ],
        },
        {
            id: 2,
            name: t('drone-2-name'),
            description: t('drone-2-description'),
            imageSrc: DronePH,
            imageAlt: 'The Action Freak - Freestyle drone',
            isReversed: true,
            features: [
                {Icon: Zap, label: t('drone-2-feature-1')},
                {Icon: Car, label: t('drone-2-feature-2')},
                {Icon: Eye, label: t('drone-2-feature-3')},
                {Icon: Gauge, label: t('drone-2-feature-4')},
            ],
            strengths: [
                t('drone-2-strengths-1'),
                t('drone-2-strengths-2'),
                t('drone-2-strengths-3'),
                t('drone-2-strengths-4'),
            ],
            useCases: [
                t('drone-2-use-1'),
                t('drone-2-use-2'),
                t('drone-2-use-3'),
            ],
        },
        {
            id: 3,
            name: t('drone-3-name'),
            description: t('drone-3-description'),
            imageSrc: DronePH,
            imageAlt: 'The Traveller - Long range drone',
            isReversed: false,
            features: [
                {Icon: Battery, label: t('drone-3-feature-1')},
                {Icon: Radio, label: t('drone-3-feature-2')},
                {Icon: Camera, label: t('drone-3-feature-3')},
                {Icon: Map, label: t('drone-3-feature-4')},
            ],
            strengths: [
                t('drone-3-strengths-1'),
                t('drone-3-strengths-2'),
                t('drone-3-strengths-3'),
                t('drone-3-strengths-4'),
            ],
            useCases: [
                t('drone-3-use-1'),
                t('drone-3-use-2'),
                t('drone-3-use-3'),
            ],
        },
    ];

    return (
        <main>
            {/* Hero Section with Background */}
            <section className="relative overflow-hidden pt-24">
                {/* Background Image and Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src={HeroPH}
                        alt="Mountain biker"
                        className="h-full w-full object-cover opacity-40"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background"></div>
                </div>

                {/* Hero Content */}
                <div className="relative container mx-auto max-w-4xl px-6 pb-32 pt-16">
                    <h1 className="mb-6">{t("title")}</h1>
                    <p>
                        {t("description")}
                    </p>
                </div>
            </section>

            {/* Drone Sections - Unified by DroneHeroSection */}
            {droneData.map((drone) => (
                <DroneHeroSection key={drone.id} data={drone}/>
            ))}
        </main>
    );
}