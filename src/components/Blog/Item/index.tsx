import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import { AccessTime, DateRange } from "@mui/icons-material";
import { Post } from "interfaces";
import { formatDate } from "utils";
import { BLOG_ROUTE } from "constant";


const BlogCard: React.FC<Post> = (blog) => {
  const navigate = useNavigate();

  return (
    <Card className="flex mb-12 shadow-none">
      <CardMedia
        component="img"
        className="mr-[34px] max-w-[266px] max-h-[180px] cursor-pointer rounded-[5px]"
        image={blog.imgUrl}
        alt={blog.title}
        onClick={() => navigate(`${BLOG_ROUTE}${blog.id}`)}
      />

      <Box className="flex flex-col px-2">
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Chip label="Travel" className="rounded-[3px]" />

          <Typography
            variant="h3"
            className="mt-2 text-[32px] font-semibold cursor-pointer"
            onClick={() => navigate(`${BLOG_ROUTE}${blog.id}`)}
          >
            {blog.title}
          </Typography>

          <Box className="flex content-between mt-[6px] mb-4 items-center flex-wrap gap-1">
            <img
              src="https://tinyurl.com/y3nctk8x"
              className="size-[18px] rounded-full mr-2"
            />

            <Typography>{blog.user?.name}</Typography>

            <Divider orientation="vertical" flexItem className="mx-[10px]" />

            <DateRange />

            <Typography className="ml-2">
              {formatDate(blog.createdAt)}
            </Typography>

            <Divider orientation="vertical" flexItem className="mx-[10px]" />

            <AccessTime />

            <Typography className="ml-2">3 min. to read</Typography>
          </Box>

          <Typography variant="subtitle1" color="text.secondary">
            {blog.description.slice(0, 100)}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BlogCard;
