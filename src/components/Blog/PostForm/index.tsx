import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { FetchResult, useMutation } from "@apollo/client";
import { Box, Button, MenuItem, Typography } from "@mui/material";
import toast from "react-hot-toast";
import PageTitle from "components/Header/PageTitle";
import { InputField } from "components/Input";
import { CREATE_POST_MUTATION } from "gql/mutations";
import { PostData, CreatePostInput } from "types";
import { createPostSchema } from "utils/validations";
import { ALL_POSTS_QUERY } from "gql/queries";
import { BLOG_ROUTE } from "constant";

const PostArticleForm = () => {
  const navigate = useNavigate();
  const [createPostMutation, { loading, error, data }] =
    useMutation<PostData>(CREATE_POST_MUTATION);

  const { values, errors, handleChange, handleSubmit } =
    useFormik<CreatePostInput>({
      initialValues: {
        title: "",
        description: "",
        readTime: undefined,
      },
      validationSchema: createPostSchema,
      onSubmit: async (): Promise<FetchResult<PostData>> =>
        await createPostMutation({
          variables: {
            input: {
              categoryIds: 1,
              time: Date(),
              title: values.title,
              imgUrl:
                "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
              description: values.description,
            },
          },
          refetchQueries: [ALL_POSTS_QUERY]
        }),
    });

  const isFormValid = () => {
    return !Object.keys(errors).length && values.title;
  };

  useEffect(() => {
    error && toast.error(error?.message);
  }, [error]);

  useEffect(() => {
    if (data?.createPost.status === 200) {
      toast.success("Blog posted successfully!");
      navigate(`${BLOG_ROUTE}${data.createPost.post.id}`);
    }
  }, [data]);

  return (
    <Box className="flex flex-col">
      <PageTitle title="Create New Article" />

      <Box component="form" onSubmit={handleSubmit} className="mt-10 w-3/4">
        <InputField
          title="Give it a title"
          name="title"
          value={values.title}
          onChange={handleChange}
          error={!!errors.title}
          type="text"
        />

        <Box className="mt-10" />

        <InputField
          select
          label="Select"
          name="readTime"
          title="Min. to read"
          value={values.readTime}
          onChange={handleChange}
        >
          <MenuItem disabled selected value={0}>
            Select
          </MenuItem>
          <MenuItem value={3}>3 Mins. To Read</MenuItem>
          <MenuItem value={5}>5 Mins. To Read</MenuItem>
          <MenuItem value={10}>10 Mins. To Read</MenuItem>
        </InputField>

        <Box className="mt-10" />

        <InputField
          multiline
          rows={7}
          title="Write something about it"
          name="description"
          value={values.description}
          onChange={handleChange}
          error={!!errors.description}
        />

        <Box className="mt-10" />

        <Box className="flex items-center">
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
          >
            Browse
            <input type="file" accept="image/*" style={{ display: "none" }} />
          </Button>
          <Typography variant="body2" className="ml-3">
            Supports: JPG, JPEG2000, PNG
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
          className="mt-10 w-[356px] rounded-full"
          disabled={!isFormValid() || loading}
        >
          Publish Article
        </Button>
      </Box>
    </Box>
  );
};

export default PostArticleForm;
