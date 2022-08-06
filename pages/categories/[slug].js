import Head from "next/head";
import Link from "next/link";
import { PostCard, Categories, PostWidget } from "../../components";
import {
	getCategories,
	getCategoryDetails,
	getPostCategories,
} from "../../services";

export default function PostCategory(props) {
	const { posts, category } = props;

	return (
		<>
			<Head>
				<title>Halo Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container mx-auto px-4 md:px-10 mb-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					<div className="lg:col-span-8 col-span-1">
						<div className="bg-white rounded-lg mb-8 px-6 md:px-8 py-4">
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
							posts.map((post, index) => (
								<PostCard key={index} post={post} />
							))
						) : (
							<div className="bg-white text-center rounded-lg mb-8 px-6 md:px-8 py-6">
								<h2 className="text-2xl font-medium mb-8">
									Maaf, artikel untuk kategori {category.name}{" "}
									belum tersedia
								</h2>
								<Link href="/">
									<a className="px-6 py-3 bg-pink-700 text-white transition duration-300 transform hover:-translate-y-1 inline-block relative rounded-full">
										Kembali ke Home
									</a>
								</Link>
							</div>
						)}
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
	const data = await getPostCategories(slug);
	const category = await getCategoryDetails(slug);

	return {
		props: { posts: data.category.posts, category: category.category },
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
