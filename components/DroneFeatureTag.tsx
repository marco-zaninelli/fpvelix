import { LucideIcon } from 'lucide-react';
import React from 'react';

interface DroneFeatureTagProps {
    Icon: LucideIcon;
    label: string;
}

export const DroneFeatureTag: React.FC<DroneFeatureTagProps> = ({ Icon, label }) => {
    return (
        <div className="flex items-center gap-2 p-4 py-3 bg-foreground/5 border border-zinc-800 rounded-lg">
            <Icon className="h-5 w-5 text-white" />
            <span className="text-primary">{label}</span>
        </div>
    );
};
