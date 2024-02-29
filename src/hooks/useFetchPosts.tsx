import { useLazyQuery } from "@apollo/client";
import { ALL_POSTS_QUERY, MY_POSTS_QUERY, SEARCH_POST_QUERY } from "gql/queries";
import { POSTS_LIST_TYPE } from "types";

export const useFetchPosts = (queryType: POSTS_LIST_TYPE) => {
  let QUERY;
  switch (queryType) {
    case "RECENT":
      QUERY = ALL_POSTS_QUERY;
      break;
    case "SEARCH":
      QUERY = SEARCH_POST_QUERY;
      break;
    case "MY_POSTS":
      QUERY = MY_POSTS_QUERY;
      break;

    default:
      QUERY = ALL_POSTS_QUERY;
      break;
  }

  const [fetchPosts, { data, loading, error }] = useLazyQuery(QUERY);

  return { fetchPosts, data: data, loading: loading, error: error };
};
