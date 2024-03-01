import { Route, Routes, Navigate } from "react-router-dom";

import AuthContext from "contexts/AuthContext";
import { useContext } from "react";
import { routes } from "constant";

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
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            route.protected ? (
              <Protected user={isAuth}>{<route.element />}</Protected>
            ) : (
              <route.element />
            )
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
