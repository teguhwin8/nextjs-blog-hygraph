import React from "react";
import moment from "moment";
import "moment/locale/id";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const PostCard = ({ post }) => {
	return (
		<>
			<div className="bg-white rounded-lg mb-8 p-5">
				<div className="aspect-w-16 aspect-h-9 rounded-lg">
					<Image
						src={post.featuredImage.url}
						alt={post.title}
						layout="fill"
						className="rounded-lg"
					/>
				</div>
				<div className="my-5">
					<h1 className="text-center text-xl md:text-2xl transition duration-500 hover:text-pink-700 cursor-pointer font-medium">
						{post.title}
					</h1>
				</div>
				<div className="my-5">
					<div className="flex items-center justify-center">
						<Image
							src={post.author.photo.url}
							width="28"
							height="28"
							className="rounded-full"
							alt={post.author.name}
						/>
						<div className="ml-2 text-gray-700 text-sm">{post.author.name}</div>
						<div className="ml-1 text-gray-700 text-sm">
							{moment(post.createdAt).format("DD MMMM YYYY")}
						</div>
					</div>
				</div>
				<div className="my-5">
					<p className="text-center text-gray-700">{post.excerpt}</p>
				</div>
			</div>
		</>
	);
};

export default PostCard;
