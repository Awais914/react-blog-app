import { useEffect } from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { FetchResult, useMutation } from "@apollo/client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ADD_COMMENT_MUTATION, ADD_REPLY_MUTATION } from "gql/mutations";
import { GET_COMMENT_REPLIES_QUERY, GET_POST_BY_ID_QUERY } from "gql/queries";
import { AddCommentInput, PostCommentData } from "types";
import { createCommentSchema } from "utils/validations";

interface AddCommentProps {
  postId: number;
  type: "COMMENT" | "REPLY";
}

const AddComment: React.FC<AddCommentProps> = ({ postId, type }) => {
  const [postCommentMutation, { loading, error, data }] =
    useMutation<PostCommentData>(ADD_COMMENT_MUTATION, {
      refetchQueries: [
        { query: GET_POST_BY_ID_QUERY, variables: { input: postId } },
      ],
    });

  const [postReplyMutation] = useMutation<PostCommentData>(ADD_REPLY_MUTATION, {
    refetchQueries: [
      { query: GET_COMMENT_REPLIES_QUERY, variables: { input: postId } },
    ],

    onCompleted: () => {
      toast.success("Reply posted successfully!");
      resetForm();
    },
    onError: () => toast.error(error?.message!),
  });

  const { values, errors, handleChange, handleSubmit, resetForm } =
    useFormik<AddCommentInput>({
      initialValues: {
        desc: "",
      },
      validationSchema: createCommentSchema,
      onSubmit: async () =>
        type === "COMMENT" ? await postComment() : await postReply(),
    });

  const postComment = async (): Promise<FetchResult<PostCommentData>> => {
    return await postCommentMutation({
      variables: {
        input: {
          postId: postId,
          desc: values.desc,
        },
      },
    });
  };

  const postReply = async (): Promise<FetchResult<PostCommentData>> => {
    return await postReplyMutation({
      variables: { input: { parentCommentId: postId, desc: values.desc } },
    });
  };

  const isFormValid = () => {
    return !Object.keys(errors).length && values.desc;
  };

  useEffect(() => {
    error && toast.error(error?.message);
  }, [error]);

  useEffect(() => {
    if (data?.addComment.status === 200) {
      resetForm();
      toast.success("Comment posted successfully!");
    }
  }, [data]);

  return (
    <Box>
      <Typography>Add comment</Typography>

      <Box component="form" onSubmit={handleSubmit} className="flex">
        <TextField
          fullWidth
          value={values.desc}
          onChange={handleChange}
          name="desc"
          className="border rounded-[16px] mr-4 h-14"
        />

        <Button
          type="submit"
          variant="contained"
          className="rounded-lg h-14 w-[98px]"
          disabled={!isFormValid() || loading}
        >
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default AddComment;
