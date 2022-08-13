import Link from "next/link";
import Image from "next/image";

const PostWidget = ({ posts }) => {
  return (
    <>
      <div className="card px-6 py-5">
        <h2 className="text-lg font-medium mb-3">Artikel Terbaru</h2>
        {posts.length > 0 &&
          posts.map((post) => (
            <div className="flex items-center gap-3 mt-6" key={post.slug}>
              <div className="flex-shrink-0 flex items-center w-[32px] h-[32px] relative">
                <Image
                  src={post.featuredImage.url}
                  className="rounded-full w-[32px] h-[32px]"
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

