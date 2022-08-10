import { getServerSideSitemap } from "next-sitemap";
import { getAllSlug } from "../../services";

export async function getServerSideProps(ctx) {
    const data = await getAllSlug();
    const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const fields = data.posts.map((post) => ({
        url: `${siteUrl}/posts/${post.slug}`,
        changefreq: "daily",
        priority: 0.5,
    }));
    return getServerSideSitemap(ctx, fields);
}

export default function Sitemap() {}
