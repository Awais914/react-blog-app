import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { Box, Container, IconButton } from "@mui/material";
import { signupSchema } from "utils/validations";
import { Link } from "react-router-dom";
import { PasswordField } from "components/Input";

const Signup = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
  });

  const isFormValid = () => {
    return !Object.keys(errors).length && values.email && values.password;
  };

  return (
    <Container className="mt-[63px] max-w-[750px]">
      <Typography variant="h2" className="font-semibold	text-4xl text-center">
        Create An Account
      </Typography>

      <Typography className="text-center">
        Already have an account?{" "}
        <Link to="/login" className="no-underline text-inherit">
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
          disabled={!isFormValid()}
        >
          Create An Account
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
