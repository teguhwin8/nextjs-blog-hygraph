import Head from "next/head";
import Link from "next/link";
import Lottie from "react-lottie-player";
import { PostCard, Categories, PostWidget } from "../../components";
import {
  getCategories,
  getCategoryDetails,
  getPostCategories,
  getRecentPosts,
} from "../../services";
import lottieJson from "../../public/not_found.json";
import { Layout } from "../../components";

export default function PostCategory(props) {
  const { posts, category } = props;
  const { categories, recentPosts } = props;

  return (
    <Layout>
      <Head>
        <title>NgeHosting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto md:px-10 md:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-9 col-span-1">
            <div className="breadcrumb">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Link href="/">
                  <a>Home</a>
                </Link>
                <div>{"/"}</div>
                <Link href={`/categories/${category.slug}`}>
                  <a>{category.name}</a>
                </Link>
              </div>
            </div>
            {posts.length > 0 ? (
              <div className="lg:col-span-9 col-span-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {posts.map((post, index) => (
                    <PostCard key={index} post={post} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="card text-center p-8">
                <div className="w-1/2 mx-auto">
                  <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    className="w-full"
                  />
                </div>
                <h2 className="text-2xl font-medium mb-8">
                  Maaf, artikel untuk kategori {category.name} belum tersedia
                </h2>
                <Link href="/">
                  <a className="px-6 py-3 bg-pink-700 text-white transition duration-300 transform hover:-translate-y-1 inline-block relative rounded-full">
                    Balik ke Home
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div className="lg:col-span-3 col-span-1">
            <div className="lg:sticky relative md:top-8">
              <PostWidget posts={recentPosts} />
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
  const data = await getPostCategories(slug);
  const category = await getCategoryDetails(slug);
  const categories = await getCategories();
  const recentPosts = await getRecentPosts();

  return {
    props: {
      posts: data.category.posts,
      category: category.category,
      categories: categories.categories,
      recentPosts: recentPosts.posts,
    },
  };
}

export async function getStaticPaths() {
  const data = await getCategories();

  const slugs = data.categories.map((cat) => ({
    params: { slug: cat.slug },
  }));

  return {
    paths: slugs,
    fallback: false,
  };
}

