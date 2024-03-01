import { useContext, useEffect } from "react";
import RegisterForm from "components/Registration";
import AuthContext from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const { isAuth, storeAuth } = useContext(AuthContext);

  useEffect(() => {
    if (isAuth) navigate("/");
  }, []);

  return (
    <RegisterForm storeAuth={storeAuth} />
  );
};