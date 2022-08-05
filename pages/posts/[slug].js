import Head from "next/head";
import { PostCard, Categories, PostWidget, PostDetail } from "../../components";
import { getAllSlug, getPostDetails } from "../../services";

export default function Home(props) {
	let { post } = props.post;
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<link rel="icon" href="/favicon.ico" />
                <meta name="description" content={post.excerpt} />
			</Head>
			<div className="container mx-auto px-4 md:px-10 mb-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					<div className="lg:col-span-8 col-span-1">
						<PostDetail post={post} />
					</div>
					<div className="lg:col-span-4 col-span-1">
						<div className="lg:sticky relative top-8">
							<PostWidget />
							<Categories />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps({ params }) {
	const slug = params.slug;
	const data = await getPostDetails(slug);

	return {
		props: { post: data },
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
