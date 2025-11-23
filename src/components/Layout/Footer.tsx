import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        backgroundColor: "secondary.main",
        color: "#fff",
        py: { xs: 4 },
        borderTop: "1px solid rgba(255,255,255,0.15)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Bolånekalkyl
      </Typography>
    </Box>
  );
}
