import { ChangeEvent } from "react";
import { Box, Typography, TextField } from "@mui/material";

interface InputFieldProps {
  type: string;
  title: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText?: string | undefined;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <>
      <Box>
        <Box className="flex justify-between items-center">
          <Typography>{props.title}</Typography>
        </Box>

        <TextField
          name={props.name}
          fullWidth
          type={props.type ?? "text"}
          placeholder={props.placeholder || ""}
          value={props.value}
          onChange={props.onChange}
          error={props.error}
          helperText={props.helperText}
        />
      </Box>
    </>
  );
};

export default InputField;
