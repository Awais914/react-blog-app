import { Box } from "@mui/material";
import Header from "components/Header";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
