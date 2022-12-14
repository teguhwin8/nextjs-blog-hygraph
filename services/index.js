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
      posts(orderBy: publishedAt_DESC, first: 3) {
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

export const getRelatedPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(orderBy: publishedAt_DESC, first: 3) {
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

export const getAllSlug = async () => {
  const query = gql`
    query MyQuery {
      posts(first: 1000) {
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      post(where: { slug: $slug }) {
        title
        id
        publishedAt
        slug
        excerpt
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        content {
          html
          json
        }
        featuredImage {
          url
        }
        categories {
          id
          name
          slug
        }
        keywords
        createdAt
        updatedAt
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result;
};

export const getPostCategories = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
        posts {
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
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result;
};

export const getCategoryDetails = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
        id
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(where: { featuredPost: true }, orderBy: publishedAt_DESC, first: 3) {
        id
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
  `;

  const result = await request(graphqlAPI, query);

  return result;
};

export const getNonFeaturedPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(where: { featuredPost: false }, orderBy: publishedAt_DESC, first: 100) {
        id
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
  `;

  const result = await request(graphqlAPI, query);

  return result;
};

