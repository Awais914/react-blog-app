import { Route, Routes, Navigate } from "react-router-dom";

import AccountSettings from "pages/Account";
import Detail from "pages/Blog/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import AuthContext from "contexts/AuthContext";
import { useContext } from "react";
import NewArticle from "pages/Blog/NewArticle";
import { MY_ARTICLES_ROUTE, SEARCH_ROUTE } from "utils/constants";
import SearchBlog from "pages/Blog/Search";
import UserArticles from "pages/Blog/UserArticles";

const Protected = ({
  user,
  children,
}: {
  user: string | boolean | null;
  children: React.ReactElement;
}) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="blogs/:postId" element={<Detail />} />
      <Route path={SEARCH_ROUTE} element={<SearchBlog />} />
      <Route
        path={"account"}
        element={
          <Protected user={isAuth}>
            <AccountSettings />
          </Protected>
        }
      />
      <Route
        path="create-post"
        element={
          <Protected user={isAuth}>
            <NewArticle />
          </Protected>
        }
      />
      <Route
        path={MY_ARTICLES_ROUTE}
        element={
          <Protected user={isAuth}>
            <UserArticles />
          </Protected>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
