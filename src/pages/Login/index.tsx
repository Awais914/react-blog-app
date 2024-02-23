import { useState } from "react";
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
  IconButton,
} from "@mui/material";
import { VisibilityRounded, VisibilityOffRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
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

        <Box>
          <Box className="flex justify-between items-center mt-6">
            <Typography>Password</Typography>
            <Box className="flex items-center">
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (
                  <VisibilityRounded />
                ) : (
                  <VisibilityOffRounded />
                )}
              </IconButton>
              <Typography className="text-lg">
                {showPassword ? "show" : "Hide"}
              </Typography>
            </Box>
          </Box>

          <TextField
            name="password"
            fullWidth
            type={showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
        </Box>

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
          onClick={() => navigate("/signup")}
        >
          Sign up
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
