import { createTheme, responsiveFontSizes, Theme } from "@mui/material";
import { typography, palette, components } from "theme";

export const getAppTheme = (): Theme => {
  let theme = createTheme({
    typography,
    palette,
    components,
  });
  theme = responsiveFontSizes(theme);
  return theme;
};
