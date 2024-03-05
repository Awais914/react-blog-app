import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import BlogContent from "components/Blog/Content";
import { Fragment } from "react";
import { APP_TITLE } from "constant";

export const Detail = () => {
  const { postId } = useParams();

  return (
    <Fragment>
      <Helmet>
        <title>{APP_TITLE} - Detail of {postId}</title>
      </Helmet>
      <BlogContent />
    </Fragment>
  );
};
