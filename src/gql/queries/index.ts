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

export const GET_POST_BY_ID_QUERY = gql`
  query getPosts($input: Int!) {
    getPost(postId: $input) {
      message
      post {
        id
        createdAt
        description
        time
        title
        user {
          name
        }
        imgUrl
        getComments {
          count
          comments {
            id
            description: desc

            user {
              name
            }
            getReplies {
              count
            }
          }
        }
      }
    }
  }
`;

export const SEARCH_POST_QUERY = gql`
  query searchPosts($search: String!, $pagination: PaginationInput!) {
    searchPosts(searchInput: $search, paginationInput: $pagination) {
      posts {
        id
        time
        title
        imgUrl
        description
        createdAt
        user {
          name
        }
      }
      total
      page
      limit
    }
  }
`;

export const MY_POSTS_QUERY = gql`
  query myPosts {
    myPosts {
      posts {
        id
        time
        title
        imgUrl
        description
        createdAt
        user {
          name
        }
      }
    }
  }
`;

export const GET_COMMENT_REPLIES_QUERY = gql`
  query getReplyById($input: Int!) {
    getRepliesById(commentId: $input) {
      replies {
        id
        description: desc
        user {
          name
        }
        getReplies {
          count
        }
      }
    }
  }
`;
