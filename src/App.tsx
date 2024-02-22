import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function App() {
  return (
    <Container maxWidth="sm">
      <div className="my-4">
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          React Blog App
        </Typography>
      </div>
    </Container>
  );
}
