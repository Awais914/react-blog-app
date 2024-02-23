// import { Route } from '../types/Route';
import { Home } from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const Protected = ({
  user,
  children,
}: {
  user: object;
  children: React.ReactElement;
}) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route
        path="home"
        element={
          <Protected user={{}}>
            <Home />
          </Protected>
        }
      />
    </Routes>
  );
};

// const routes: Array<Route> = [];

export default AppRoutes;
