import React from 'react';

interface AboutDetailSectionProps {
    title: string;
    description: string;
}

export function AboutDetailSection({ title, description }: AboutDetailSectionProps) {
    return (
        <div className="border-l-2 border-primary/20 pl-6">
            <h3 className="font-semibold mb-3">{title}</h3>
            <p>{description}</p>
        </div>
    );
}