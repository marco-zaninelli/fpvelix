import React from 'react';

interface DroneUseCaseTagProps {
    label: string;
}

export const DroneUseCaseTag: React.FC<DroneUseCaseTagProps> = ({ label }) => {
    return (
        <span className="px-4 py-2 bg-foreground/5 rounded-full border border-zinc-800">
      {label}
    </span>
    );
};