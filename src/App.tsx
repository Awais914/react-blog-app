import Container from "@mui/material/Container";
import Layout from "components/Layout";
import AppRoutes from "components/Routes";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Container>
      <HelmetProvider>
        <Router>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </HelmetProvider>
    </Container>
  );
}
