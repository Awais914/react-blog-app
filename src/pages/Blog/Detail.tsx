import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import BlogContent from "components/Blog/Content";

const Detail = () => {
  const { postId } = useParams();

  return (
    <>
      <Helmet>
        <title>BlogApp - Detail of {postId}</title>
      </Helmet>
      <BlogContent />
    </>
  );
};

export default Detail;
