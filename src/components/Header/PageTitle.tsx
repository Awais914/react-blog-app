import { Box, Typography, Divider } from "@mui/material";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <Box className="mt-12">
      <Typography variant="h2" className="text-4xl font-semibold">
        {title}
      </Typography>

      <Divider className="mt-3 mb-8" />
    </Box>
  );
};

export default PageTitle;
