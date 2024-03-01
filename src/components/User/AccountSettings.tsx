import { Box, Button, Typography } from "@mui/material";
import PageTitle from "components/Header/PageTitle";
import { PasswordField } from "components/Input";
import { useFormik } from "formik";
import { passwordUpdateSchema } from "utils/validations";

const AccountSettings = () => {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: passwordUpdateSchema,
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
  });

  const isFormValid = () => {
    return !Object.keys(errors).length && values.password;
  };

  return (
    <Box className="flex flex-col">
      <PageTitle title="Account Setting" />

      <Typography
        variant="h3"
        color="primary.dark"
        className="font-semibold	text-[32px]"
      >
        Change password
      </Typography>

      <Box component="form" onSubmit={handleSubmit} className="mt-10 w-3/4">
        <PasswordField
          title="Type new password"
          name="password"
          placeholder="Enter your new password"
          value={values.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />

        <Box className="mt-10" />

        <PasswordField
          title="Type new password again"
          name="confirmPassword"
          placeholder="Enter your new password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          className="mt-10 py-4"
          disabled={!isFormValid()}
        >
          Save changes
        </Button>
      </Box>
    </Box>
  );
};

export default AccountSettings;
