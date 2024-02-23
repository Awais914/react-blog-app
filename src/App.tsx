import Container from "@mui/material/Container";
import Layout from "components/Layout";
import AppRoutes from "components/Routes";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Container>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </Container>
  );
}
