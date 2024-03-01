import { useEffect } from "react";
import toast from "react-hot-toast";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { Box, Container } from "@mui/material";
import { signupSchema } from "utils/validations";
import { Link, useNavigate } from "react-router-dom";
import { PasswordField } from "components/Input";
import { FetchResult, useMutation } from "@apollo/client";
import { AuthInput, SignUpData } from "types";
import { SIGN_UP_MUTATION } from "gql/mutations";
import { LOGIN_ROUTE } from "constant";

interface RegisterFormProps {
  storeAuth: (token: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ storeAuth }) => {
  const navigate = useNavigate();
  const [registerUser, { loading, error, data }] =
    useMutation<SignUpData>(SIGN_UP_MUTATION);

  const { values, errors, handleChange, handleSubmit } = useFormik<AuthInput>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (): Promise<FetchResult<SignUpData>> =>
      await registerUser({
        variables: {
          input: {
            email: values.email,
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
    if (data?.signUp.token) {
      storeAuth(data.signUp.token);
      navigate("/");
    }
  }, [data]);

  return (
    <Container className="mt-[63px] max-w-[750px]">
      <Typography variant="h2" className="font-semibold	text-4xl text-center">
        Create An Account
      </Typography>

      <Typography className="text-center">
        Already have an account?{" "}
        <Link to={LOGIN_ROUTE} className="no-underline text-inherit">
          Log in
        </Link>
      </Typography>

      <Box component="form" onSubmit={handleSubmit} className="mt-[72px]">
        <Box>
          <Typography>What's your email?</Typography>
          <TextField
            placeholder="Enter your email address"
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
          title="Create a password"
          name="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
          className="mt-10 py-4"
          disabled={!isFormValid() || loading}
        >
          Create An Account
        </Button>
      </Box>
    </Container>
  );
};

export default RegisterForm;
