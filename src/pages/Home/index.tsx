import { Box } from "@mui/material";
import PostsList from "components/Blog/List";
import PageTitle from "components/Header/PageTitle";

const Home = () => {
  return (
    <Box className="flex flex-col">
      <PageTitle title="Recent Posts" />

      <PostsList />
    </Box>
  );
};

export default Home;
