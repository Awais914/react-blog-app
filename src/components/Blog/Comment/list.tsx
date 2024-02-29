import { Box, Button, Typography } from "@mui/material";
import Replies from "./replies";
import { Comment } from "types";
import AddComment from "./add";
import AuthContext from "contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COMMENT_REPLIES_QUERY } from "gql/queries";

const Commentslist: React.FC<Comment> = (props) => {
  const [showComment, setShowComment] = useState(false);
  const [commentReplies, setCommentReplies] = useState<Comment[]>();
  const { isAuth } = useContext(AuthContext);

  useQuery(GET_COMMENT_REPLIES_QUERY, {
    variables: { input: props.id },
    onCompleted: ({ getRepliesById }) => {
      setCommentReplies(getRepliesById.replies);
    },
  });

  useEffect(() => {console.log('Rfected...');
  }, [commentReplies])

  return (
    <Box className="flex mt-8">
      <img
        src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?"
        className="size-[32px] rounded-full mr-4"
      />
      <Box>
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
