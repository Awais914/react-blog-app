import { AppBar, Toolbar } from "@mui/material";

export const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar disableGutters variant="dense">
          Header
        </Toolbar>
      </AppBar>
    </>
  );
};
