import moment from "moment";
import "moment/locale/id";
import Link from "next/link";
import Image from "next/image";
import { FcCalendar } from "react-icons/fc";

const PostCard = ({ post }) => {
  return (
    <div className="card">
      <Link href={`/posts/${post.slug}`}>
        <a className="relative">
          <div className="aspect-w-16 aspect-h-9 md:rounded-t-lg overflow-hidden">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              layout="fill"
              className="md:rounded-t-lg aspect-w-16 aspect-h-9 transition duration-300 hover:scale-110"
              priority
            />
          </div>
          <div className="absolute top-1 right-1 bg-pink-700 text-white rounded-full px-3 py-1 text-xs">
            {post.categories[0].name}
          </div>
        </a>
      </Link>
      <div className="px-6 py-3">
        <div className="my-5">
          <Link href={`/posts/${post.slug}`}>
            <a>
              <h1
                className="md:min-h-[84px] font-medium text-black md:text-xl transition duration-500 hover:text-pink-700 cursor-pointer line-clamp-3"
                title={post.title}
              >
                {post.title}
              </h1>
            </a>
          </Link>
        </div>
        <div className="my-5 text-xs">
          <div className="flex items-center">
            <div className="h-6 w-6 relative">
              <Image
                src={post.author.photo.url}
                className="rounded-full"
                layout="fill"
                alt={post.author.name}
                priority
              />
            </div>
            <div className="ml-1 text-gray-500">{post.author.name}</div>
            <div className="ml-4 text-gray-500 flex items-center gap-1">
              <FcCalendar className="h-6 w-6" />
              {moment(post.publishedAt).format("DD MMMM YYYY")}
            </div>
          </div>
        </div>
        <div className="my-5">
          <p className="text-gray-600 line-clamp-3 md:min-h-[72px]">
            {post.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

