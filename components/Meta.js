import React from "react";
import { NextSeo, NewsArticleJsonLd } from "next-seo";

export default function Meta({ post }) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    return (
        <>
            <NewsArticleJsonLd
                url={baseUrl + "/posts/" + post.slug}
                title={post.title}
                images={[post.featuredImage.url]}
                section="technology"
                keywords={post.keywords}
                datePublished={post.publishedAt}
                dateModified={post.updatedAt}
                authorName={post.author.name}
                publisherName="NgeHosting.id"
                publisherLogo={baseUrl + "/logo.png"}
                description={post.excerpt}
                body={post.content.text}
            />
            <NextSeo
                title={`NgeHosting - ${post.title}`}
                description={post.excerpt}
                canonical={baseUrl}
                openGraph={{
                    url: baseUrl + "/posts/" + post.slug,
                    title: post.title,
                    description: post.excerpt,
                    images: [
                        {
                            url: post.featuredImage.url,
                            width: 800,
                            height: 600,
                            alt: post.title,
                            type: "image/jpeg",
                        },
                        {
                            url: post.featuredImage.url,
                            width: 900,
                            height: 800,
                            alt: post.title,
                            type: "image/jpeg",
                        },
                        { url: post.featuredImage.url },
                        { url: post.featuredImage.url },
                    ],
                    site_name: "NgeHosting",
                }}
                twitter={{
                    handle: "@ms_wid",
                    site: "@ms_wid",
                    cardType: "summary_large_image",
                }}
            />
        </>
    );
}
