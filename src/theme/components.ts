import { Components } from "@mui/material";

export const components: Components = {
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderWidth: 1,
          borderRadius: 20,
          variant: "outlined",
          margin: "normal",
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 20,
      },
    },
  },
}