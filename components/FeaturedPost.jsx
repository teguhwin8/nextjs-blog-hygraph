import React from "react";
import FeaturedPostCard from "./FeaturedPostCard";

export default function FeaturedPost({ posts }) {
  if (posts.length < 3) {
    return;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 rounded-lg overflow-hidden">
        <div className="col-span-2">
          <FeaturedPostCard post={posts[0]} />
        </div>
        <div>
          <div>
            <FeaturedPostCard post={posts[1]} />
          </div>
          <div>
            <FeaturedPostCard post={posts[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}

