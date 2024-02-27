import gql from "graphql-tag";

export const SIGN_UP_MUTATION = gql`
  mutation SignUp($authInput: AuthInput!) {
    signUp(authInput: $authInput) {
      access_token
      message
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($authInput: AuthInput!) {
    login(authInput: $authInput) {
      message
      access_token
    }
  }
`;
