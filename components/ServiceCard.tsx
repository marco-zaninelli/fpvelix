import React from 'react';
import {LucideIcon} from 'lucide-react';

interface ServiceCardProps {
    Icon: LucideIcon;
    title: string;
    description: string;
}

export function ServiceCard({ Icon, title, description }: ServiceCardProps) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 p-8 hover:bg-zinc-800/50 transition-all duration-300 group rounded-xl">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                    <Icon className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                    <h3>{title}</h3>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}