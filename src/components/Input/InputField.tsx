import { Box, Typography, TextField, TextFieldProps } from "@mui/material";

const InputField: React.FC<TextFieldProps> = (props) => {
  return (
    <Box>
      <Box className="flex justify-between items-center">
        <Typography>{props.title}</Typography>
      </Box>

      <TextField fullWidth {...props} />
    </Box>
  );
};

export default InputField;
