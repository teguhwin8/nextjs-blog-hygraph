import Link from "next/link";
import { Categories, PostWidget, PostDetail, Meta } from "../../components";
import { getAllSlug, getPostDetails } from "../../services";
import { FcHome } from "react-icons/fc";

export default function PostDetails(props) {
	const { post } = props.post;

	return (
		<>
			<Meta post={post} />
			<div className="container mx-auto px-4 md:px-10 mb-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					<div className="lg:col-span-8 col-span-1">
						<div className="bg-white rounded-lg mb-8 px-6 md:px-8 py-4">
							<div className="flex items-center gap-3 text-sm text-gray-500">
								<Link href="/">
									<a className="flex items-center gap-2">
										<FcHome className="w-4 h-4" />
										Home
									</a>
								</Link>
								<div>{"/"}</div>
								<Link href={`/posts/${post.slug}`}>
									<a className="line-clamp-1">{post.title} {post.title} {post.title} {post.title}</a>
								</Link>
							</div>
						</div>
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
