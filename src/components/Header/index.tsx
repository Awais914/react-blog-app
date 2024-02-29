import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AuthContext from "contexts/AuthContext";
import { SEARCH_ROUTE } from "utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const { isAuth } = useContext(AuthContext);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setSearchText(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") navigate(`/${SEARCH_ROUTE}?query=${searchText}`);
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
            <>
              <Button
                component={Link}
                to="/create-post"
                variant="contained"
                className="rounded-lg"
              >
                Create Article
              </Button>

              <img src="/logo.png" className="ml-4" />
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                className="mr-4 rounded-lg"
              >
                Log in
              </Button>

              <Button
                component={Link}
                to="/signup"
                variant="contained"
                className="rounded-lg"
              >
                Sign up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
