import { Box, Divider, Typography } from "@mui/material";
import BlogCard from "components/Blog/Item";

export const Home = () => {
  return (
    <Box className="flex flex-col mt-12">
      <Typography variant="h2" className="text-4xl font-semibold">
        Recent Posts
      </Typography>

      <Divider className="mt-3 mb-8" />

      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </Box>
  );
};
