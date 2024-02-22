import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useFormik } from "formik";
import { IconButton } from "@mui/material";
import { singupSchema } from "utils/validations";
import { VisibilityRounded, VisibilityOffRounded } from '@mui/icons-material';

const Signup = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: singupSchema,
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
  });

  return (
    <div className="mt-[63px]">
      <Typography variant="h2" className="font-semibold	text-4xl text-center">
        Create An Account
      </Typography>
      <Typography variant="body2" className="text-center">
        Already have an account? <Link href="#">Log in</Link>
      </Typography>
      <form onSubmit={handleSubmit} className="mt-[72px]">
        <div>
          <Typography>What's your email?</Typography>
          <TextField
            variant="outlined"
            placeholder="Enter your email address"
            margin="normal"
            fullWidth
            name="email"
            value={values.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <Typography>Create a password</Typography>
            <div className="flex items-center">
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VisibilityRounded /> : <VisibilityOffRounded />}
              </IconButton>
              <Typography sx={{ color: 'secondary.main' }} className="text-lg">{showPassword ? 'show' : 'Hide'}</Typography>
            </div>
          </div>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
        </div>
        <Typography variant="body2">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
          className="mt-10"
          disabled={!values.email || !values.password || !errors}
        >
          Create An Account
        </Button>
      </form>
    </div>
  );
};

export default Signup;
