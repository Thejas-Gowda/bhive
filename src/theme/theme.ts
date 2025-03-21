import { createTheme } from "@mui/material/styles";
import "@fontsource/inter";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFBB00", 
      dark: "#27AE60", 
      contrastText: "#000000",
    },
    secondary: {
      main: "#000000",
      dark: "#CECECE", 
      contrastText: "#263238",
    },
    text: {
      primary: "#263238", 
      secondary: "#65624C", 
    },
    grey: {
      100: "#E0E0E0",
      200: "#B7B6B8",
      300: "#828282",
      400: "#4F4F4F",
      500: "#333333",
    },
    background: {
      default: "#F9FAFF",
      paper: "#F9F9F9",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: "58px",
      fontWeight: 700,
      lineHeight: "1.1",
      color: "#263238",
    },
    h2: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "1.1",
      color: "#263238",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "1.1",
      color: "#263238",
    },
    h4: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "1.1",
      color: "#263238",
    },
    h5: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "1.1",
      color: "#263238",
    },
    h6: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "1.1",
      color: "#263238",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "1.5",
      color: "#65624C",
    },
    body2: {
      fontSize: "8px",
      fontWeight: 500,
      lineHeight: "1.5",
      color: "#263238"
    },
  },
});

export default theme;
