import React from "react";
import VimeoVideo from "@/components/VimeoVideo";
import { X } from "lucide-react";

interface VideoModalProps {
    videoId: string;
    description: string;
    setIsOpen: (value: boolean) => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoId, description, setIsOpen }) => {
    return (
        <div
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
        >
            {/* Close Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false)
                }}
                className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors cursor-pointer z-[1001]"
                aria-label="Close modal"
            >
                <X size={40} strokeWidth={1.5} />
            </button>

            {/* Video Container */}
            <div
                className="w-full max-w-6xl aspect-video bg-black shadow-2xl rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <VimeoVideo id={videoId} alt={description} aspectRatio={"16/9"}/>
            </div>
        </div>
    );
};

export default VideoModal;