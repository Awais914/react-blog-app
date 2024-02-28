import PaginationBar from "components/Pagination";
import BlogCard from "../Item";
import { useLazyQuery } from "@apollo/client";
import { ALL_POSTS_QUERY } from "gql/queries";
import { useEffect, useState } from "react";
import { Post, PostsListType } from "types";

const PostsList = () => {
  const [page, setpage] = useState(1)

  const [posts, setPosts] = useState<Post[]>();
  const [getPosts, { loading, data, error }] =
    useLazyQuery<PostsListType>(ALL_POSTS_QUERY);

  useEffect(() => {
    getPosts({
      variables: { input: { page: page, limit: 2 } },
      onCompleted: (data) => {
        setPosts(data.allPosts.posts);
      },
    });
  }, [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { total, limit } = data?.allPosts || {}
  const totalPages = Math.ceil(total! / limit!);

  return (
    <>
      {posts?.map(
        ({ id, createdAt, description, imgUrl, time, title, user }: Post) => {
          return (
            <BlogCard
              id={id}
              key={id}
              title={title}
              description={description}
              time={time}
              imgUrl={imgUrl}
              createdAt={createdAt}
              user={user}
            />
          );
        }
      )}

      <PaginationBar totalPages={totalPages} setpage={setpage}/>
    </>
  );
};

export default PostsList;
