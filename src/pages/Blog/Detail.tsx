import BlogContent from "components/Blog/Content";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <>
      <Helmet>
        <title>BlogApp - Detail of {id}</title>
      </Helmet>
      <BlogContent />
    </>
  );
};

export default Detail;
