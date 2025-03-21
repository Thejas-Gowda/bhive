// src/App.tsx
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import theme from "./theme/theme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "pages/LandingPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Fixed Header */}
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <Header />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          pt: "90px", 
        }}
      >
        
        <Box  sx={{ flexGrow: 1, padding: "20px" }}>
          <LandingPage />
        </Box>

        
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
