import { ChangeEvent, Fragment, useState } from "react";
import { VisibilityRounded, VisibilityOffRounded } from "@mui/icons-material";
import { Box, Typography, IconButton, TextField } from "@mui/material";

interface PasswordFieldProps {
  title: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText: string | undefined;
}

const PasswordField: React.FC<PasswordFieldProps> = (props) => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  return (
    <Fragment>
      <Box>
        <Box className="flex justify-between items-center">
          <Typography>{props.title}</Typography>

          <Box className="flex items-center">
            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <VisibilityRounded /> : <VisibilityOffRounded />}
            </IconButton>

            <Typography className="text-lg">
              {showPassword ? "show" : "Hide"}
            </Typography>
          </Box>
        </Box>

        <TextField
          name={props.name}
          fullWidth
          type={showPassword ? "text" : "password"}
          placeholder={props.placeholder || "*******************"}
          value={props.value}
          onChange={props.onChange}
          error={props.error}
          helperText={props.helperText}
        />
      </Box>

      <Typography className="mt-1">
        Use 8 or more characters with a mix of letters, numbers & symbols
      </Typography>
    </Fragment>
  );
};

export default PasswordField;
