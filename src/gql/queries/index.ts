import gql from "graphql-tag";

export const ALL_POSTS_QUERY = gql`
  query AllPosts($input: PaginationInput!) {
    allPosts(paginationInput: $input) {
      message
      status
      posts {
        id
        title
        description
        time
        imgUrl
        user {
          username
          name
        }
        createdAt
      }
      total
      page
      limit
    }
  }
`;
