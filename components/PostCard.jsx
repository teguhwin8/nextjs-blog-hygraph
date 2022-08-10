import React from 'react';
import moment from 'moment';
import 'moment/locale/id';
import Link from 'next/link';
import Image from 'next/image';
import {FcCalendar} from 'react-icons/fc';

const PostCard = ({post}) => {
  return (
    <>
      <div className="card">
        <div className="aspect-w-16 aspect-h-9 md:rounded-lg">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout="fill"
            className="md:rounded-t-lg aspect-w-16 aspect-h-9"
          />
        </div>
        <div className="px-6 py-3">
          <div className="my-5">
            <Link href={`/posts/${post.slug}`}>
              <a>
                <h1
                  className="text-center text-xl md:text-2xl transition
                  duration-500 hover:text-pink-700 cursor-pointer font-medium"
                >
                  {post.title}
                </h1>
              </a>
            </Link>
          </div>
          <div className="my-5">
            <div className="flex items-center justify-center">
              <div className="h-8 w-8 relative">
                <Image
                  src={post.author.photo.url}
                  className="rounded-full"
                  width="32"
                  height="32"
                  alt={post.author.name}
                />
              </div>
              <div className="ml-2 text-gray-700 text-sm">
                {post.author.name}
              </div>
              <div
                className="ml-2 text-gray-700 text-sm flex
                items-center gap-2"
              >
                <FcCalendar className="h-6 w-6" />
                {moment(post.publishedAt).format('DD MMMM YYYY')}
              </div>
            </div>
          </div>
          <div className="my-5">
            <p className="text-center text-gray-700 line-clamp-3">
              {post.excerpt}
            </p>
          </div>
          <div className="my-5 text-center">
            <Link href={`/posts/${post.slug}`}>
              <a
                className="px-6 py-3 bg-pink-700 text-white transition
                duration-300 transform hover:-translate-y-1 inline-block
                relative rounded-full"
              >
                Baca Selengkapnya
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
