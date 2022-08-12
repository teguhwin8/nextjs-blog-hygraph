export default async function handler(req, res) {
    if (req.query.secret !== process.env.SECRET_TOKEN) {
        return res.status(401).json({ message: "Invalid token" });
    }

    const path = req.query.path;
    const slug = req.query.slug;

    try {
        const paths = `/${path ? path + (slug ? "/" + slug : "") : ""}`;
        await res.revalidate(paths);
        return res.json({ revalidated: true });
    } catch (err) {
        return res.status(500).send("Error revalidating");
    }
}
