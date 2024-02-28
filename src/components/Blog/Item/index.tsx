import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import { AccessTime, DateRange } from "@mui/icons-material";
import { Post } from "types";
import { formatDate } from "utils/date";

const BlogCard: React.FC<Post> = (blog) => {
  const navigate = useNavigate();

  return (
    <Card className="flex mb-12 shadow-none">
      <CardMedia
        component="img"
        className="mr-[34px] w-[266px] cursor-pointer rounded-[5px]"
        image={blog.imgUrl}
        alt={blog.title}
        onClick={() => navigate(`/blogs/${blog.id}`)}
      />

      <Box className="flex flex-col px-2">
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Chip label="Travel" className="rounded-[3px]" />

          <Typography
            variant="h3"
            className="mt-2 text-[32px] font-semibold cursor-pointer"
            onClick={() => navigate(`/blogs/${blog.id}`)}
          >
            {blog.title}
          </Typography>

          <Box className="flex content-between mt-[6px] mb-4 items-center">
            <img
              src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?"
              className="size-[18px] rounded-full mr-2"
            />

            <Typography>{blog.user?.name}</Typography>

            <Divider orientation="vertical" flexItem className="mx-[10px]" />

            <DateRange />

            <Typography className="ml-2">{formatDate(blog.createdAt)}</Typography>

            <Divider orientation="vertical" flexItem className="mx-[10px]" />

            <AccessTime />

            <Typography className="ml-2">3 min. to read</Typography>
          </Box>

          <Typography variant="subtitle1" color="text.secondary">
            {blog.description.slice(0, 200)}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BlogCard;
