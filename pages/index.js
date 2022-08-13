import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts, getCategories, getRecentPosts } from "../services";
import { Layout } from "../components";

export default function Home({ posts, categories, recentPosts }) {
  return (
    <Layout>
      <Head>
        <title>NgeHosting.id</title>
      </Head>
      <div className="container mx-auto md:px-10 md:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-9 col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
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

export async function getStaticProps() {
  const posts = await getPosts();
  const categories = await getCategories();
  const recentPosts = await getRecentPosts();

  return {
    props: {
      posts,
      categories: categories.categories,
      recentPosts: recentPosts.posts,
    },
  };
}

