import { useEffect, useState } from "react";
import Link from "next/link";
import { getRecentPosts, getRelatedPosts } from "../services";
import Image from "next/image";

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getRelatedPosts(categories, slug).then((res) => {
                setRelatedPosts(res.posts);
            });
        } else {
            getRecentPosts().then((res) => {
                setRelatedPosts(res.posts);
            });
        }
    }, [slug, categories]);

    return (
        <>
            <div className="card px-6 py-5">
                <h2 className="text-lg font-medium mb-3">Artikel Terbaru</h2>
                {relatedPosts.length > 0 &&
                    relatedPosts.map((post) => (
                        <div className="flex items-center gap-3 mt-6" key={post.slug}>
                            <div className="flex-shrink-0 flex items-center w-[64px] h-[64px] relative">
                                <Image
                                    src={post.featuredImage.url}
                                    className="rounded-full w-[64px] h-[64px]"
                                    layout="fill"
                                    alt={post.title}
                                    priority
                                    objectFit="cover"
                                />
                            </div>
                            <Link href={`/posts/${post.slug}`}>
                                <a
                                    className="text-gray-700 text-sm font-medium transition duration-300 hover:text-pink-700 line-clamp-2"
                                    title={post.title}
                                >
                                    {post.title}
                                </a>
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default PostWidget;
