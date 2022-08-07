import React, { useEffect, useState } from "react";
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
    }, []);

    return (
        <>
            <div className="card px-6 py-5">
                <h2 className="text-lg font-medium mb-3">Artikel Terbaru</h2>
                {relatedPosts.length > 0 &&
                    relatedPosts.map((post) => (
                        <div className="flex items-center justify-between gap-3 mt-6" key={post.slug}>
                            <div className="flex-shrink-0 flex items-center">
                                <Image
                                    src={post.featuredImage.url}
                                    className="rounded-full"
                                    width="56"
                                    height="56"
                                    alt={post.title}
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
