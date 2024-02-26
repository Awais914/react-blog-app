import { createTheme, responsiveFontSizes, Theme } from "@mui/material";

export const getAppTheme = (): Theme => {
  let theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Poppins",
        fontSize: "15px",
      },
      h2: {
        color: "#222222",
      },
      body1: {
        color: "#666666",
      },
      button: {
        textTransform: "none",
      },
    },
    palette: {
      primary: {
        main: "#111111",
        dark: "#222222",
        light: "#333333",
      },
      secondary: {
        main: "#666666",
        dark: "#595858",
        light: "#EAEAEA",
      },
      info: {
        main: "#00A1E7",
        light: "#6666664D",
      },
    },
    components: {
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
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
};
