import { DateRange, AccessTime } from "@mui/icons-material";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import Commentslist from "../Comment/list";
import AddComment from "../Comment/add";

const BlogContent = () => {
  return (
    <Box className="flex flex-col">
      <Box className="flex items-center">
        <Chip label="Travel" className="rounded-[3px]" />
        <Typography className="border-2 bg-[#6435C81F] rounded-[3px] ml-3 px-4 py-1">
          3 min. To Read
        </Typography>
      </Box>

      <Typography
        color="primary.dark"
        variant="h3"
        className="mt-2 text-[32px] font-semibold"
      >
        I Created a Developer Rap Video - Here's What I Learned
      </Typography>

      <Box className="flex content-between mt-[6px] mb-4 items-center">
        <img
          src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?"
          className="size-[18px] rounded-full mr-2"
        />
        <Typography>Jesica koli</Typography>
        <Divider orientation="vertical" flexItem className="mx-[10px]" />
        <DateRange />
        <Typography>02 december 2022</Typography>
      </Box>

      <img
        src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
        className="w-[856px] mt-8 mb-10 rounded-[5px]"
      />

      <Typography>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        <br />
        <br />
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur Sed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        <br />
        <br />
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
        non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
        voluptate velit esse quam nihil molestiae consequatur, vel illum qui
        dolorem eum fugiat quo voluptas nulla pariatur Sed ut perspiciatis unde
        omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        <br />
        <br />
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
        quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut
        labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
        reprehenderit qui in ea voluptate velit esse quam nihil molestiae
        consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
        pariatur Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        <br />
        <br />
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur
      </Typography>

      <Box className="flex flex-col">
        <Box className="flex mt-12">
          <Typography color="primary.dark" className="text-[27px]">
            24 comments
          </Typography>
          <Typography color="primary.dark" className="text-4xl mx-4">
            .
          </Typography>
          <Typography color="info.main" className="text-[27px]">
            Sign in to comment
          </Typography>
        </Box>
        <Divider className="mt-7 mb-4" />

        <AddComment />

        <Commentslist />
        <Commentslist />
        <Commentslist />

        <Button variant="outlined" className="w-[230px] self-center mt-8">
          Load More Comments
        </Button>
      </Box>
    </Box>
  );
};

export default BlogContent;
