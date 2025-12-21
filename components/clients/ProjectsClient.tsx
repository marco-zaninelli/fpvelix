'use client';

import {useTranslations} from 'next-intl';
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsClient({posts}: { posts: any[] }) {
    const t = useTranslations('projects');

    return (
        <div className="max-w-7xl mx-auto px-6 mt-40 mb-20">
            {/* Page Title */}
            <h1 className="mb-16">{t("hero-title")}</h1>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <ProjectCard
                        key={post._id}
                        alt={post.title}
                        title={post.title}
                        thumbnailVideoId={post.thumbnailVideoId}
                        videoId={post.videoId}
                    />
                ))}
            </div>
        </div>
    );
}
