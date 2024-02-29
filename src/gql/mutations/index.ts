import gql from "graphql-tag";

export const SIGN_UP_MUTATION = gql`
  mutation signUp($input: SignUpInput!) {
    signUp(signUpInput: $input) {
      user {
        username
        email
      }
      token: jwt
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation signUp($input: SignInInput!) {
    signIn(signInInput: $input) {
      token: jwt
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(createPostInput: $input) {
      message
      status
      post {
        id
        title
        description
      }
    }
  }
`;

export const ADD_COMMENT_MUTATION = gql`
  mutation addComment($input: AddCommentInput!) {
    addComment(addCommentInput: $input) {
      message
      status
    }
  }
`;

export const ADD_REPLY_MUTATION = gql`
  mutation addReply($input: ReplyInput!) {
    reply(repliesInput: $input) {
      message
      status
    }
  }
`;
