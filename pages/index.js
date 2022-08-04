import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";

const posts = [
	{
		title: "React Testing",
		excerpt:
			"React Testing is a collection of tools and techniques for testing React components.",
	},
	{
		title: "React With Tailwind",
		excerpt:
			"React With Tailwind is a collection of tools and techniques for testing React components.",
	},
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Halo Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container mx-auto px-10 mb-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					<div className="lg:col-span-8 col-span-1">
						{posts.map((post, index) => (
							<PostCard key={index} post={post} />
						))}
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
