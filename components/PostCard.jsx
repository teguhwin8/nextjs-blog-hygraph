import React from "react";

const PostCard = ({ post }) => {
	return (
		<div>
			<div>{post.title}</div>
			<div>{post.excerpt}</div>
		</div>
	);
};

export default PostCard;
