import {defineQuery} from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import HomeClient from "@/components/clients/HomeClient";

const PROJECTS_QUERY = defineQuery(`*[_type == "post"] | order(_createdAt desc)[0...3] {
    _id,
    title,
    mainImage,
    thumbnailVideoId,
    videoId,
    _createdAt
}`);

export default async function HomePage() {
    const { data: posts } = await sanityFetch({ query: PROJECTS_QUERY });

    return (
        <HomeClient posts={posts} />
    );
}
