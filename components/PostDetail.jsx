import moment from "moment";
import Image from "next/image";
import React from "react";

export default function PostDetail({ post }) {
	return (
		<>
			<div className="bg-white rounded-lg mb-8 p-4 md:p-5">
				<div className="aspect-w-16 aspect-h-9 rounded-lg">
					<Image
						src={post.featuredImage.url}
						alt={post.title}
						layout="fill"
						className="rounded-lg"
					/>
				</div>
				<div className="my-5">
					<h1 className="text-2xl md:text-4xl font-medium mb-8">
						{post.title}
					</h1>
				</div>
				<div className="my-5">
					<div className="flex items-center justify-start">
						<div className="flex items-center mr-3">
							<Image
								src={post.author.photo.url}
								width="28"
								height="28"
								className="rounded-full"
								alt={post.author.name}
							/>
							<div className="ml-2 text-gray-700 text-sm">
								{post.author.name}
							</div>
						</div>
						<div className="ml-1 text-gray-700 text-sm">
							{moment(post.publishedAt).format("DD MMMM YYYY")}
						</div>
					</div>
				</div>
				<article className="my-5">
					<div dangerouslySetInnerHTML={{ __html: post.content.html }} />
				</article>
			</div>
		</>
	);
}
