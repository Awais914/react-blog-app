import { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AuthContext from "contexts/AuthContext";
import {
  ACCOUNT_ROUTE,
  CREATE_POST,
  LOGIN_ROUTE,
  MY_ARTICLES_ROUTE,
  SEARCH_ROUTE,
  SIGNUP_ROUTE,
} from "constant";

const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const { isAuth, removeAuth } = useContext(AuthContext);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const settings = [
    { title: "My Articles", link: MY_ARTICLES_ROUTE },
    { title: "Account", link: ACCOUNT_ROUTE },
  ];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setSearchText(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") navigate(`${SEARCH_ROUTE}?query=${searchText}`);
  };

  const handleLogout = () => {
    setAnchorElUser(null);
    removeAuth();
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      className="border-b-2 border-gray-500 shadow-none bg-white"
    >
      <Toolbar className="flex justify-between px-10">
        <Box className="flex items-center">
          <img src="/logo.png" className="mr-10" />

          <Link to="/" className="no-underline">
            Home
          </Link>
        </Box>

        <Box className="flex items-center">
          <TextField
            className="border rounded-2xl mr-4"
            size="small"
            placeholder="Search"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            sx={{ backgroundColor: "secondary.light" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {isAuth ? (
            <Fragment>
              <Button
                component={Link}
                to={CREATE_POST}
                variant="contained"
                className="rounded-lg"
              >
                Create Article
              </Button>

              <Tooltip title="Profile" className="ml-4">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/logo.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    component={Link}
                    to={setting.link}
                    key={setting.title}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                ))}
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Fragment>
          ) : (
            <Fragment>
              <Button
                component={Link}
                to={LOGIN_ROUTE}
                variant="outlined"
                className="mr-4 rounded-lg"
              >
                Log in
              </Button>

              <Button
                component={Link}
                to={SIGNUP_ROUTE}
                variant="contained"
                className="rounded-lg"
              >
                Sign up
              </Button>
            </Fragment>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
