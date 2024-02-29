import * as Yup from "yup";

const emailValidation = Yup.string()
  .email("Invalid email")
  .required("Email is required");
const passwordValidation = Yup.string()
  .min(8, "Password must be at least 8 characters")
  .required("Password is required")
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
    "Password must contain at least one letter, one number, and one special character"
  );

export const signupSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

export const passwordUpdateSchema = Yup.object().shape({
  password: passwordValidation,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export const createPostSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

export const createCommentSchema = Yup.object().shape({
  desc: Yup.string().required("Description is required"),
});