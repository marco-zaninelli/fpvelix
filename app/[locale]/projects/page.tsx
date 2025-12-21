import ProjectCard from "@/components/ProjectCard";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import ProjectsClient from "@/components/clients/ProjectsClient";

const PROJECTS_QUERY = defineQuery(`*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    mainImage,
    thumbnailVideoId,
    videoId,
    _createdAt
}`);

export default async function ProjectsPage() {
    const { data: posts } = await sanityFetch({ query: PROJECTS_QUERY });

    if (!posts || posts.length === 0) {
        return <div className="mt-40 text-center">No projects found. Check if they are Published in Sanity Studio.</div>
    }

    return (
        <ProjectsClient posts={posts} />
    );
}