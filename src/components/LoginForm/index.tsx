import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useFormik } from "formik";
import {
  Box,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PasswordField } from "components/Input";
import { useMutation, FetchResult } from "@apollo/client";
import { LOGIN_MUTATION } from "gql/mutations";
import { AuthInput, LoggedInData } from "types";
import { signupSchema } from "utils/validations";
import toast from "react-hot-toast";
import { SIGNUP_ROUTE } from "constant";

interface LoginFormProps {
  storeAuth: (token: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ storeAuth }) => {
  const navigate = useNavigate();
  const [loginUser, { loading, error, data }] =
    useMutation<LoggedInData>(LOGIN_MUTATION);

  const { values, errors, handleChange, handleSubmit } = useFormik<AuthInput>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (): Promise<FetchResult<LoggedInData>> =>
      await loginUser({
        variables: {
          input: {
            username: values.email,
            password: values.password,
          },
        },
      }),
  });

  const isFormValid = () => {
    return !Object.keys(errors).length && values.email && values.password;
  };

  useEffect(() => {
    error && toast.error(error?.message);
  }, [error]);

  useEffect(() => {
    if (data?.signIn.token) {
      storeAuth(data.signIn.token!);
      navigate("/");
    }
  }, [data]);

  return (
    <Container className="mt-[63px] max-w-[750px]">
      <Typography variant="h2" className="font-semibold	text-4xl text-center">
        Log In
      </Typography>

      <Box component="form" onSubmit={handleSubmit} className="mt-[72px]">
        <Box>
          <Typography>Email address or user name</Typography>

          <TextField
            name="email"
            fullWidth
            margin="dense"
            value={values.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Box>

        <PasswordField
          title="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />

        <Link className="flex justify-end mt-2">Forget your password</Link>

        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
          className="mt-4 py-4"
          disabled={!isFormValid()}
        >
          Log in
        </Button>

        <Divider className="my-10" />

        <Typography
          sx={{ color: "primary.light" }}
          className="text-center text-2xl"
        >
          Don’t have an account?
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          size="large"
          fullWidth
          type="submit"
          className="mt-4 py-4"
          onClick={() => navigate(SIGNUP_ROUTE)}
        >
          Sign up
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
