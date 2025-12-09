import React from 'react';
import {LucideIcon} from 'lucide-react';
import {DroneFeatureTag} from './DroneFeatureTag';
import {DroneStrengthItem} from './DroneStrengthItem';
import {DroneUseCaseTag} from './DroneUseCaseTag';
import Image, {StaticImageData} from "next/image";

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
}

interface DroneHeroSectionProps {
    data: DroneData;
}

export const DroneHeroSection: React.FC<DroneHeroSectionProps> = ({data}) => {
    const {
        name,
        description,
        imageSrc,
        imageAlt,
        features,
        strengths,
        useCases,
        isReversed,
    } = data;

    const sectionClasses = `relative overflow-hidden py-24 px-6`;

    const flexClasses = `flex flex-col items-center gap-16 ${
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
    }`;

    return (
        <section className={sectionClasses}>
            <div className="container mx-auto max-w-7xl">
                <div className={flexClasses}>
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <Image src={imageSrc} alt={imageAlt} className="w-full"/>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <h2 className="mb-6">{name}</h2>
                        <p className='mb-8'>{description}</p>

                        {/* Feature Tags */}
                        <div className="grid grid-cols-2 gap-3">
                            {features.map((feature, index) => (
                                <DroneFeatureTag key={index} Icon={feature.Icon} label={feature.label}/>
                            ))}
                        </div>

                        {/* Strengths */}
                        <div>
                            <h3 className="mb-4">Strengths</h3>
                            <ul className="space-y-3">
                                {strengths.map((strength, index) => (
                                    <DroneStrengthItem key={index} text={strength}/>
                                ))}
                            </ul>
                        </div>

                        {/* Use Cases */}
                        <div>
                            <h3 className="mb-4">Use Cases</h3>
                            <div className="flex flex-wrap gap-2">
                                {useCases.map((useCase, index) => (
                                    <DroneUseCaseTag key={index} label={useCase}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};