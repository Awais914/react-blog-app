import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getAppTheme } from "styles/theme";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

const theme = getAppTheme();

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

reportWebVitals();
