import { Box } from "@mui/material";
import PageTitle from "components/Header/PageTitle";
import PostsList from "../List";

const UserPosts = () => {
  return (
    <Box className="flex flex-col">
      <PageTitle title="My Articles" />

      <PostsList category="MY_POSTS" />
    </Box>
  );
};

export default UserPosts;
