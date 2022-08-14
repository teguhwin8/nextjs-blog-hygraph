import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { FcCalendar } from "react-icons/fc";

export default function PostDetail({ post }) {
  const { categories } = post;

  return (
    <>
      <div className="card">
        <div className="aspect-w-16 aspect-h-9 md:rounded-lg">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout="fill"
            className="aspect-w-16 aspect-h-9 md:rounded-t-lg"
            priority
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="my-5">
            <h1 className="text-3xl md:text-6xl font-medium mb-8 text-black font-serif">
              {post.title}
            </h1>
          </div>
          <div className="my-5">
            <div className="flex items-center justify-start">
              <div className="flex items-center mr-3">
                <Image
                  src={post.author.photo.url}
                  width="24"
                  height="24"
                  className="rounded-full"
                  alt={post.author.name}
                  priority
                />
                <div className="ml-2 text-gray-500 text-sm">
                  {post.author.name}
                </div>
              </div>
              <div className="ml-1 text-gray-500 text-sm flex items-center gap-2">
                <FcCalendar className="h-6 w-6" />
                {moment(post.publishedAt).format("DD MMMM YYYY")}
              </div>
            </div>
          </div>
          <article className="my-5 pt-1 prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
            <p>
              Itulah artikel tentang
              <Link href={`/posts/${post.slug}`}>
                <a className="mx-3">{post.title}.</a>
              </Link>
              Semoga bermanfaat. Jika artikel ini membantu Anda atau Anda ada
              pertanyaan silahkan berikan komentar di bawah ini dan share kepada
              teman-teman Anda. Terima kasih.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}

