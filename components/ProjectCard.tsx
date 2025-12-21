'use client'

import React, {useEffect, useState} from 'react';
import { createPortal } from 'react-dom';
import VimeoVideo from '@/components/VimeoVideo';
import VideoModal from "@/components/VideoModal";

interface ProjectCardProps {
    alt: string;
    title: string;
    videoId: string;
    thumbnailVideoId: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({alt, title, videoId, thumbnailVideoId}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Prevent scrolling when modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <div
            className="group relative overflow-hidden rounded-xl bg-gray-900 aspect-[2/3]"
            onClick={() => {
                if (!isOpen) setIsOpen(true);
            }}
        >
            {videoId && (
                <VimeoVideo
                    id={thumbnailVideoId}
                    alt={alt}
                    aspectRatio={"2/3"}
                    background={true}
                />
            )}

            <div
                className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <div
                    className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-white mb-2">{title}</h3>
                    <span
                        className="inline-block px-3 py-1 bg-background/40 backdrop-blur-sm rounded-full text-sm text-white">
                            Video Project
                        </span>
                </div>
            </div>

            {isOpen && mounted && createPortal(
                <VideoModal videoId={videoId} description={alt} setIsOpen={setIsOpen}/>,
                document.body
            )}
        </div>
    );
};

export default ProjectCard;