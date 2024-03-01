import { Fragment, useContext, useEffect } from "react";
import LoginForm from "components/LoginForm";
import AuthContext from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { isAuth, storeAuth } = useContext(AuthContext);

  useEffect(() => {
    if (isAuth) navigate("/");
  }, []);

  return (
    <Fragment>
      <LoginForm storeAuth={storeAuth} />
    </Fragment>
  );
};
