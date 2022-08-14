import Link from "next/link";
import {
  Categories,
  PostWidget,
  PostDetail,
  Meta,
  Comment,
  Layout,
} from "../../components";
import {
  getAllSlug,
  getCategories,
  getPostDetails,
  getRelatedPosts,
} from "../../services";
import { FcHome } from "react-icons/fc";
import { motion, useScroll } from "framer-motion";

export default function PostDetails(props) {
  const { post } = props.post;
  const { categories, relatedPosts } = props;
  const { scrollYProgress } = useScroll();

  return (
    <Layout>
      <Meta post={post} />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="container mx-auto md:px-10 md:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8 col-span-1">
            <div className="breadcrumb">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Link href="/">
                  <a className="flex items-center gap-2">
                    <FcHome className="w-4 h-4" />
                    Home
                  </a>
                </Link>
                <div>{"/"}</div>
                <Link href={`/posts/${post.slug}`}>
                  <a className="line-clamp-1">
                    {post.title} {post.title} {post.title} {post.title}
                  </a>
                </Link>
              </div>
            </div>
            <PostDetail post={post} />
            <Comment />
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative md:top-8">
              <PostWidget posts={relatedPosts} />
              <Categories categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await getPostDetails(slug);
  const relatedPosts = await getRelatedPosts();
  const categories = await getCategories();

  return {
    props: {
      post: data,
      relatedPosts: relatedPosts.posts,
      categories: categories.categories,
    },
  };
}

export async function getStaticPaths() {
  const data = await getAllSlug();

  const slugs = data.posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths: slugs,
    fallback: false,
  };
}

