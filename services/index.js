import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
	const query = gql`
		query MyQuery {
			postsConnection(orderBy: publishedAt_DESC) {
				edges {
					node {
						author {
							name
							bio
							id
							photo {
								url
							}
						}
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
						publishedAt
					}
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
	const query = gql`
		query MyQuery {
			posts(orderBy: publishedAt_DESC, last: 3) {
				title
				slug
				featuredImage {
					url
				}
				publishedAt
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result;
};

export const getRelatedPosts = async (categories, slug) => {
	const query = gql`
		query MyQuery {
			posts(orderBy: publishedAt_DESC, last: 3) {
				title
				slug
				featuredImage {
					url
				}
				publishedAt
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result;
};

export const getCategories = async () => {
	const query = gql`
		query MyQuery {
			categories {
				id
				name
				slug
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result;
};
