import { Suspense, lazy, useState } from "react";
import { POSTS_LIST_TYPE } from "types";
import PaginationBar from "components/Pagination";
import Loader from "components/Loader";
const PostsListing = lazy(() => import("./listing"));

interface PostListProps {
  category: POSTS_LIST_TYPE;
  searchQuery?: string | null;
}

const PostsList: React.FC<PostListProps> = ({ category, searchQuery }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  return (
    <Suspense fallback={<Loader />}>
      <PostsListing
        category={category}
        searchQuery={searchQuery}
        page={page}
        setTotalPages={setTotalPages}
      />

      <PaginationBar totalPages={totalPages} setPage={setPage} />
    </Suspense>
  );
};

export default PostsList;
