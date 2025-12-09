import { Check } from 'lucide-react';
import React from 'react';

interface DroneStrengthItemProps {
    text: string;
}

export const DroneStrengthItem: React.FC<DroneStrengthItemProps> = ({ text }) => {
    return (
        <li className="flex items-start gap-3">
            <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-500" />
            <span>{text}</span>
        </li>
    );
};