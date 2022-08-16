import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedPostCard({ post }) {
  return (
    <div className="relative">
      <Link href={`/posts/${post.slug}`}>
        <a className="relative">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              layout="fill"
              className="aspect-w-16 aspect-h-9 transition duration-300 hover:scale-110"
              priority
            />
          </div>
        </a>
      </Link>
      <div className="absolute bottom-6 left-6 text-white text-lg md:text-xl font-medium line-clamp-2 z-10">
        {post.title}
      </div>
      <div className="absolute bottom-0 left-0 top-0 right-0 bg-black opacity-50"></div>
      <div className="absolute top-1 right-1 bg-pink-700 text-white rounded-full px-3 py-1 text-xs z-10">
        {post.categories[0].name}
      </div>
    </div>
  );
}

