'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Player from '@vimeo/player';

type AspectRatio = `${number}/${number}`;

interface VimeoVideoProps {
    id: string;
    alt: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    background?: boolean;
    aspectRatio?: AspectRatio;
    controls?: boolean;
}

export default function VimeoVideo({
                                       id,
                                       alt = 'Video thumbnail',
                                       autoplay = true,
                                       loop = true,
                                       muted = true,
                                       background = false,
                                       aspectRatio = '16/9',
                                       controls = false,
                                   }: VimeoVideoProps) {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Parse aspect ratio for padding calculation
    const [width, height] = aspectRatio.split('/').map(Number);
    const paddingBottom = `${(height / width) * 100}%`;

    useEffect(() => {
        if (!iframeRef.current) return;

        const player = new Player(iframeRef.current, {
            id,
            autoplay,
            muted,
            loop,
            background,
            controls: false,
            transparent: true,
        });

        // Use the 'play' event as trigger for smooth transition
        player.on('play', () => {
            setIsPlaying(true);
        });

        return () => {
            // Clean up the Vimeo player instance when the component unmounts
            player.unload();
        };
    }, [id, autoplay, muted, loop, background]);

    // Construct iframe URL
    const vimeoUrl = `https://player.vimeo.com/video/${id}?` +
        `autoplay=${autoplay ? 1 : 0}` +
        `&loop=${loop ? 1 : 0}` +
        `&muted=${muted ? 1 : 0}` +
        `&background=${background ? 1 : 0}` +
        `&controls=${controls ? 1 : 0}` +
        `&title=0&byline=0&portrait=0&dnt=1`;

    return (
        <div className="relative w-full overflow-hidden" style={{ paddingBottom }}>
            
            {/* Image Placeholder */}
            <Image
                src={`https://vumbnail.com/${id}_large.jpg`}
                alt={alt}
                fill
                className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 blur-xs"
                priority
                style={{
                    opacity: isPlaying ? 0 : 1
                }}
            />

            {/* Vimeo Player */}
            <iframe
                ref={iframeRef}
                src={vimeoUrl}
                title={alt}
                allow="autoplay; fullscreen"
                className="absolute inset-0 w-full h-full pointer-events-none z-20 transition-opacity duration-700"
                style={{
                    border: 'none',
                    opacity: isPlaying ? 1 : 0
                }}
            />
        </div>
    );
}