import { createTheme } from "@mui/material/styles";

const theme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#1e4fa3" : "#b5d0e9",
      },
      // Header + Footer
      secondary: {
        main: mode === "light" ? "#1e4fa3" : "#282828",
      },
      text: {
        primary: mode === "light" ? "#2a2a2a" : "#fff",
        secondary: mode === "light" ? "#2a2a2a" : "#fff",
      },
      background: {
        default: mode === "light" ? "#F8FAFC" : "#111111",
        paper: mode === "light" ? "#ffffff" : "#282828",
      },
    },
  });

export default theme;
