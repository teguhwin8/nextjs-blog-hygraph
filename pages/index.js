import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import { Layout } from "../components";

export default function Home({ posts }) {
    return (
        <Layout>
            <Head>
                <title>NgeHosting.id</title>
            </Head>
            <div className="container mx-auto md:px-10 md:mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-8 col-span-1">
                        {posts.map((post, index) => (
                            <PostCard key={index} post={post.node} />
                        ))}
                    </div>
                    <div className="lg:col-span-4 col-span-1">
                        <div className="lg:sticky relative md:top-8">
                            <PostWidget />
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const posts = await getPosts();

    return {
        props: { posts },
    };
}
