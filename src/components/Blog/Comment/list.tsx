import { Box, Button, Typography } from "@mui/material";
import Replies from "./replies";

const Commentslist = () => {
  return (
    <Box className="flex mt-8">
      <img
        src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?"
        className="size-[32px] rounded-full mr-4"
      />
      <Box>
        <Box className="flex">
          <Typography color="primary.main" className="text-base	">
            Jesica koli
          </Typography>

          <Typography className="text-base ml-2">3 mins ago</Typography>
        </Box>

        <Typography>
          Did you come here for something in particular or just general
          Riker-bashing? And blowing into maximum
        </Typography>

        <Button sx={{ color: "info.main" }}>Show replies (3)</Button>

        <Replies />
      </Box>
    </Box>
  );
};

export default Commentslist;
