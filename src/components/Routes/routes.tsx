// import { Route } from '../types/Route';
import { Home } from "pages/Home";
import Signup from "pages/Signup";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const Protected = ({ user, children }: { user: object, children: React.ReactElement}) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="singup" element={<Signup />} />
        <Route
          path="home"
          element={
            <Protected user={{}}>
              <Home />
            </Protected>
          }
        />
      </Routes>
    </Router>
  );
};

// const routes: Array<Route> = [];

export default AppRoutes;
