import * as React from "react";
import * as ReactDOM from "react-dom/client";
import apolloClient from "apollo/config";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getAppTheme } from "styles/theme";
import { ApolloProvider } from "@apollo/client";
import { UserProvider } from "contexts/AuthContext";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

const theme = getAppTheme();

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <UserProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </UserProvider>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
