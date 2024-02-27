import { Box, Button, TextField, Typography } from "@mui/material";

const AddComment = () => {
  return (
    <Box>
      <Typography>Add comment</Typography>

      <Box className="flex">
        <TextField fullWidth className="border rounded-[16px] mr-4 h-14" />

        <Button variant="contained" className="rounded-lg h-14 w-[98px]">
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default AddComment;
