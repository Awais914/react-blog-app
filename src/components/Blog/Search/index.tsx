import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import PageTitle from "components/Header/PageTitle";
import PostsList from "../List";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  if (!searchQuery) navigate("/");

  return (
    <Box className="flex flex-col">
      <PageTitle title={`Search results for ${searchQuery}`} />

      <PostsList category={"SEARCH"} searchQuery={searchQuery} />
    </Box>
  );
};

export default Search;
