import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import { AccessTime, DateRange } from "@mui/icons-material";

const BlogCard = () => {
  return (
    <Card className="flex mb-12 shadow-none">
      <CardMedia
        component="img"
        className="mr-[34px] w-[266px]"
        image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
        alt="Live from space album cover"
      />

      <Box className="flex flex-col px-2">
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Chip label="Travel" />
          <Typography variant="h3" className="mt-2 text-[32px] font-semibold">
            Design is the Mix of emotions
          </Typography>

          <Box className="flex content-between mt-[6px] mb-4 items-center">
            <img
              src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?"
              className="size-[18px] rounded-full"
            />
            <Typography>Jesica koli</Typography>
            <Divider orientation="vertical" flexItem className="mx-[10px]" />
            <DateRange />
            <Typography>02 december 2022</Typography>
            <Divider orientation="vertical" flexItem className="mx-[10px]" />
            <AccessTime />
            <Typography>3 min. to read</Typography>
          </Box>

          <Typography variant="subtitle1" color="text.secondary">
            Did you come here for something in particular or just general
            Riker-bashing? And blowing into maximum warp
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BlogCard;
