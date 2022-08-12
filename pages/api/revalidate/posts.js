import { getAllSlug } from '../../../services';

export default async function handler(req, res) {
    if (req.query.secret !== process.env.SECRET_TOKEN) {
        return res.status(401).json({ message: "Invalid token" });
    }

    try {
        const slugs = await getAllSlug();
        if (slugs && slugs.posts.length > 0) {
            slugs.posts.map(async (slug) => {
                await res.revalidate(`/posts/${slug.slug}`);
            });
            return res.json({ revalidated: true });
        } else {
            return res.status(500).send("Error revalidating");
        }
    } catch (err) {
        return res.status(500).send("Error revalidating");
    }
}
