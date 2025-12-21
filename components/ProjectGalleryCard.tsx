import Image, {StaticImageData} from 'next/image';

interface ProjectGalleryCardProps {
    src: StaticImageData;
    alt: string;
    title: string;
}

export function ProjectGalleryCard({src, alt, title}: ProjectGalleryCardProps) {
    return (
        <div className="relative aspect-[2/3] overflow-hidden rounded-xl">
            <Image
                src={src}
                alt={alt}
                className="block w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
                sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded text-sm">
                {title}
            </div>
        </div>
    );
}