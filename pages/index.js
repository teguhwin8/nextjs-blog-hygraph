import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import {
  getCategories,
  getRecentPosts,
  getFeaturedPosts,
  getNonFeaturedPosts,
} from "../services";
import { Layout, FeaturedPost } from "../components";

export default function Home({
  posts,
  categories,
  recentPosts,
  featuredPosts,
}) {
  return (
    <Layout>
      <Head>
        <title>NgeHosting.id</title>
        <meta
          name="description"
          content="Ngehosting adalah website teknologi berbahasa Indonesia yang menyajikan informasi pemrograman, software, tips dan trik, dan informasi teknologi lainnya."
        />
        <meta property="og:url" content="https://ngehosting.id" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NgeHosting.id" />
        <meta
          property="og:description"
          content="Ngehosting adalah website teknologi berbahasa Indonesia yang menyajikan informasi pemrograman, software, tips dan trik, dan informasi teknologi lainnya."
        />
        <meta property="og:image" content={`https://ngehosting.id/ngehosting-cover.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ngehosting.id" />
        <meta property="twitter:url" content="https://ngehosting.id" />
        <meta name="twitter:title" content="NgeHosting.id" />
        <meta
          name="twitter:description"
          content="Ngehosting adalah website teknologi berbahasa Indonesia yang menyajikan informasi pemrograman, software, tips dan trik, dan informasi teknologi lainnya."
        />
        <meta name="twitter:image" content={`https://ngehosting.id/ngehosting-cover.jpg`} />
      </Head>
      <div className="container mx-auto md:px-10 md:mb-8">
        {featuredPosts && (
          <div className="mb-8">
            <FeaturedPost posts={featuredPosts} />
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-8 col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts &&
                posts.map((post, index) => (
                  <PostCard key={index} post={post} />
                ))}
            </div>
          </div>
          <div className="lg:col-span-4 col-span-1">
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
  const posts = await getNonFeaturedPosts();
  const categories = await getCategories();
  const recentPosts = await getRecentPosts();
  const featuredPosts = await getFeaturedPosts();

  return {
    props: {
      posts: posts.posts,
      categories: categories.categories,
      recentPosts: recentPosts.posts,
      featuredPosts: featuredPosts.posts,
    },
  };
}

