'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import Player from '@vimeo/player';
import { Play } from 'lucide-react';

/**
 * Maps the specified aspect ratio strings (2.39/1, 9/16, 16/9)
 * to their corresponding Tailwind aspect-ratio utility classes.
 */
type AspectRatioKey = '2.39/1' | '9/16' | '16/9';

const aspectRatioMap: Record<AspectRatioKey, string> = {
    '2.39/1': 'aspect-[239/100]',
    '9/16': 'aspect-[9/16]',
    '16/9': 'aspect-video',
};

// Default props for common background/hero video use cases
interface VimeoEmbedPlayerProps {
    id: string;
    alt: string;
    aspectRatio: AspectRatioKey;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    background?: boolean;
    controls?: boolean;
    className?: string;
}

export default function VimeoEmbedPlayer({
                                             id,
                                             alt = 'Video placeholder',
                                             aspectRatio,
                                             autoplay = true,
                                             loop = true,
                                             muted = true,
                                             background = false,
                                             controls = false,
                                             className = '',
                                         }: VimeoEmbedPlayerProps) {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlayerReady, setIsPlayerReady] = useState(false);

    // 1. Memoize Aspect Ratio Class for strict constraint adherence (no manual style)
    const aspectRatioClass = useMemo(() => {
        return aspectRatioMap[aspectRatio] || aspectRatioMap['16/9'];
    }, [aspectRatio]);

    // 2. Memoize Vimeo URL construction (Performance Optimization)
    const vimeoUrl = useMemo(() => {
        return (
            `https://player.vimeo.com/video/${id}?` +
            `autoplay=${autoplay ? 1 : 0}` +
            `&loop=${loop ? 1 : 0}` +
            `&muted=${muted ? 1 : 0}` +
            `&background=${background ? 1 : 0}` +
            `&controls=${controls ? 1 : 0}` +
            `&dnt=1` // Do Not Track for better privacy
        );
    }, [id, autoplay, loop, muted, background, controls]);

    // 3. Initialize Vimeo Player using the SDK
    useEffect(() => {
        if (!iframeRef.current || isPlayerReady) return;

        const player = new Player(iframeRef.current, {
            id,
            autoplay,
            muted,
            loop,
            background,
            controls: false, // Always manage controls visibility via props/URL
            transparent: true,
            // Ensure performance by only loading player once
        });

        player.on('loaded', () => {
            setIsPlayerReady(true);
        });

        // Use the 'play' event as a trigger to smoothly transition from placeholder
        player.on('play', () => {
            setIsPlaying(true);
        });

        return () => {
            // Clean up the Vimeo player instance when the component unmounts
            player.unload();
            setIsPlayerReady(false);
        };
    }, [id, autoplay, muted, loop, background, isPlayerReady]);


    // Placeholder image URL
    const placeholderSrc = `https://vumbnail.com/${id}_large.jpg`;

    // Style for the container and Iframe, enforcing Tailwind class order
    const containerClasses = `relative w-full overflow-hidden ${aspectRatioClass} ${className}`;
    const iframeClasses = `absolute inset-0 w-full h-full border-none 
                           transition-opacity duration-700 pointer-events-none z-20`;
    const placeholderClasses = `absolute inset-0 z-10 w-full h-full object-cover transition-opacity duration-700`;

    // Only render the Play button if controls are enabled AND it's not a background video
    const showControlsOverlay = controls && !background && !isPlaying;

    return (
        <div className={containerClasses}>

            {/* Image Placeholder with Blur-up Effect */}
            <Image
                src={placeholderSrc}
                alt={alt}
                fill
                className={placeholderClasses}
                priority={!isPlaying} // High priority on initial load
                style={{
                    opacity: isPlaying ? 0 : 1,
                    filter: 'blur(3px)', // Small blur for a smoother transition
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Play Button/Overlay (Design System Adherence: Accent Color) */}
            {showControlsOverlay && (
                <div
                    className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300"
                    style={{ opacity: isPlaying ? 0 : 1 }}
                >
                    <div
                        className="flex items-center justify-center p-4 rounded-full bg-foreground shadow-lg
                                   hover:bg-accent/80 hover:scale-105 transition duration-300 cursor-pointer"
                        onClick={() => {
                            if (iframeRef.current) {
                                new Player(iframeRef.current).play();
                            }
                        }}
                    >
                        <Play size={48} className="text-accent fill-accent" />
                    </div>
                </div>
            )}


            {/* Vimeo Player (iframe) */}
            <iframe
                ref={iframeRef}
                src={vimeoUrl}
                title={alt}
                allow="autoplay; fullscreen; picture-in-picture"
                className={iframeClasses}
                style={{
                    opacity: isPlaying ? 1 : 0
                }}
            />
        </div>
    );
}