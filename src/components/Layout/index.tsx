import { ApolloProvider } from "@apollo/client";
import {
  Box,
  Container,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import apolloClient from "apollo/config";
import Header from "components/Header";
import { UserProvider } from "contexts/AuthContext";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import { getAppTheme } from "styles/theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = getAppTheme();

  return (
    <ApolloProvider client={apolloClient}>
      <UserProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
              <HelmetProvider>
                <Router>
                  <Toaster />
                  <Header />
                  <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
                    {children}
                  </Box>
                </Router>
              </HelmetProvider>
            </Container>
          </ThemeProvider>
        </StyledEngineProvider>
      </UserProvider>
    </ApolloProvider>
  );
};

export default Layout;
