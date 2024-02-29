import { Box, Typography } from "@mui/material";
import { Comment } from "types";

interface RepliesProps extends Comment {
  display: boolean;
}

const Replies: React.FC<RepliesProps> = ({ display, ...props }) => {
  return (
    display && 
    <Box
      className="flex border-solid border-l-1 pl-3 border-r-0 border-y-0"
      sx={{ borderLeftColor: "info.light" }}
    >
      <img
        src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?"
        className="size-[32px] rounded-full mr-4"
      />

      <Box>
        <Box className="flex">
          <Typography color="primary.main">{props.user.name}</Typography>

          <Typography className="ml-2">3 mins ago</Typography>
        </Box>

        <Typography>
          {props.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Replies;
