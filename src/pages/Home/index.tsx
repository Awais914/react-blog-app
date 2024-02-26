import { Box, Divider, Typography } from "@mui/material";
import BlogCard from "components/Blog/Item";
import PageTitle from "components/Header/PageTitle";
import PaginationBar from "components/Pagination";
import { useState } from "react";

const Home = () => {
  return (
    <Box className="flex flex-col">
      <PageTitle title="Recent Posts" />

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

      <PaginationBar />
    </Box>
  );
};

export default Home;
