import { useContext, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Comment } from "interfaces";
import { useQuery } from "@apollo/client";
import { GET_COMMENT_REPLIES_QUERY } from "gql/queries";
import AuthContext from "contexts/AuthContext";
import AddComment from "./Add";
import Replies from "./Replies";

const Commentslist: React.FC<Comment> = (props) => {
  const [showComment, setShowComment] = useState(false);
  const { isAuth } = useContext(AuthContext);

  const { loading, error, data } = useQuery(GET_COMMENT_REPLIES_QUERY, {
    variables: { input: props.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const commentReplies: Comment[] = data?.getRepliesById?.replies;

  return (
    <Box className="flex mt-8">
      <img
        key={props.id}
        src="https://tinyurl.com/y3nctk8x"
        className="size-[32px] rounded-full mr-4"
      />
      <Box className="w-full">
        <Box className="flex">
          <Typography color="primary.main" className="text-base	">
            {props.user.name}
          </Typography>

          <Typography className="text-base ml-2">3 mins ago</Typography>
        </Box>

        <Typography>{props.description}</Typography>

        {props.getReplies.count > 0 && (
          <Button
            sx={{ color: "info.main" }}
            onClick={() => setShowComment(!showComment)}
          >
            {showComment ? "Hide" : "Show"} replies ({props.getReplies.count})
          </Button>
        )}

        {commentReplies?.map((comment) => (
          <Replies
            display={showComment}
            id={comment.id}
            description={comment.description}
            user={comment.user}
            getReplies={{
              count: comment.getReplies.count,
            }}
          />
        ))}

        {isAuth && <AddComment postId={props.id} type="REPLY" />}
      </Box>
    </Box>
  );
};

export default Commentslist;
