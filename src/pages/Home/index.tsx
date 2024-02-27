import { Box } from "@mui/material";
import BlogCard from "components/Blog/Item";
import PageTitle from "components/Header/PageTitle";
import PaginationBar from "components/Pagination";

const Home = () => {
  return (
    <Box className="flex flex-col">
      <PageTitle title="Recent Posts" />

      {Array.from({ length: 10 }).map((_, index) => (
        <BlogCard key={index} />
      ))}

      <PaginationBar />
    </Box>
  );
};

export default Home;
