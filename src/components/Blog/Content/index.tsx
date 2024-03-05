import { Fragment, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DateRange } from "@mui/icons-material";
import { Box, Chip, Divider, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_POST_BY_ID_QUERY } from "gql/queries";
import { PostDetail } from "interfaces";
import AuthContext from "contexts/AuthContext";
import AddComment from "../Comment/Add";
import Commentslist from "../Comment/List";
import { formatDate } from "utils";

const BlogContent = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  const { loading, error, data } = useQuery<PostDetail>(GET_POST_BY_ID_QUERY, {
    variables: { input: parseInt(postId!) },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const { id, createdAt, description, time, title, user, imgUrl, getComments } =
    data?.getPost.post!;

  if (!id) navigate("/");

  return (
    <Box className="flex flex-col">
      <Box className="flex items-center">
        <Chip label="Travel" className="rounded-[3px]" />

        <Typography className="border-2 bg-[#6435C81F] rounded-[3px] ml-3 px-4 py-1">
          3 min. To Read
        </Typography>
      </Box>

      <Typography
        color="primary.dark"
        variant="h3"
        className="mt-2 text-[32px] font-semibold"
      >
        {title}
      </Typography>

      <Box className="flex content-between mt-[6px] mb-4 items-center">
        <img
          src="https://tinyurl.com/y3nctk8x"
          className="size-[18px] rounded-full mr-2"
        />

        <Typography>{user?.name}</Typography>

        <Divider orientation="vertical" flexItem className="mx-[10px]" />

        <DateRange />

        <Typography>{formatDate(createdAt)}</Typography>
      </Box>

      <img src={imgUrl} className="w-[856px] mt-8 mb-10 rounded-[5px]" />

      <Typography key={id} className="whitespace-pre-line">
        {description}
      </Typography>

      <Box className="flex flex-col">
        <Box className="flex mt-12">
          <Typography color="primary.dark" className="text-[27px]">
            {getComments.count} comments
          </Typography>

          {!isAuth && (
            <Fragment>
              <Typography color="primary.dark" className="text-4xl mx-4">
                .
              </Typography>

              <Typography color="info.main" className="text-[27px]">
                Sign in to comment
              </Typography>
            </Fragment>
          )}
        </Box>

        <Divider className="mt-7 mb-4" />

        {isAuth && <AddComment postId={id} type="COMMENT" />}

        {getComments.comments?.map(({ id, description, user, getReplies }) => (
          <Commentslist
            id={id}
            description={description}
            user={user}
            getReplies={getReplies}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BlogContent;
