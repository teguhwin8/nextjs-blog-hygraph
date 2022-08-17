import { getServerSideSitemap } from "next-sitemap";
import { getAllSlug } from "../../services";
import moment from "moment";

export async function getServerSideProps(ctx) {
  const data = await getAllSlug();
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const fields = data.posts.map((post) => ({
    loc: `${siteUrl}/posts/${post.slug}`,
    lastmod: moment(post.publishedAt).format("YYYY-MM-DD"),
    changefreq: "daily",
    priority: 0.5,
  }));
  return getServerSideSitemap(ctx, fields);
}

export default function Sitemap() {}

