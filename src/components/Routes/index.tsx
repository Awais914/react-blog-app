import { Route, Routes, Navigate } from "react-router-dom";

import AccountSettings from "pages/Account";
import Detail from "pages/Blog/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import AuthContext from "contexts/AuthContext";
import { useContext } from "react";
import NewArticle from "pages/Blog/NewArticle";

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
      <Route path="blogs/:id" element={<Detail />} />
      <Route path="account" element={<AccountSettings />} />
      <Route
        path="create-post"
        element={
          <Protected user={isAuth}>
            <NewArticle />
          </Protected>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
