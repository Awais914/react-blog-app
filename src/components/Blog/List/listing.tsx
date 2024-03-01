import { useEffect, useState } from "react";
import { POSTS_LIST_TYPE, Post } from "types";
import { useFetchPosts } from "hooks/useFetchPosts";
import { PAGE_LIMIT } from "utils/constants";
import BlogCard from "../Item";

interface PostListProps {
  category: POSTS_LIST_TYPE;
  searchQuery?: string | null;
  page: number;
  setTotalPages: any;
}

const PostsListing: React.FC<PostListProps> = ({ category, searchQuery, page, setTotalPages }) => {
  const [posts, setPosts] = useState<Post[]>();
  const { fetchPosts, loading, error } = useFetchPosts(category);

  useEffect(() => {
    if (category === "SEARCH") {
      fetchPosts({
        variables: {
          search: searchQuery,
          pagination: { page: page, limit: PAGE_LIMIT },
        },
        onCompleted: (data) => {
          setPosts(data?.searchPosts?.posts);
          const { total, limit } = data?.searchPosts || {};
          setTotalPages(Math.ceil(total! / limit!));
        },
      });
    } else if (category === "MY_POSTS") {
      fetchPosts({
        variables: { input: { page: page, limit: PAGE_LIMIT } },
        onCompleted: (data) => {
          setPosts(data.myPosts.posts);
        },
      });
    } else {
      fetchPosts({
        variables: { input: { page: page, limit: PAGE_LIMIT } },
        onCompleted: (data) => {
          setPosts(data.allPosts.posts);
          const { total, limit } = data?.allPosts || {};
          setTotalPages(Math.ceil(total! / limit!));
        },
      });
    }

  }, [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

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
    </>
  );
};

export default PostsListing;
