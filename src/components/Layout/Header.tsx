import { Box, Typography } from "@mui/material";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import ThemeToggleButton from "./ThemeToggleButton";

interface Props {
  mode: "dark" | "light";
  setMode: (value: "dark" | "light") => void;
}

export default function Header(props: Props) {
  const { mode, setMode } = props;

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        p: { xs: 2.5, sm: 2 },
        backgroundColor: "secondary.main",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <Box
        component="header"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center" },
          color: "#fff",
          width: 960,
          m: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <HomeWorkRoundedIcon sx={{ fontSize: { xs: 36, sm: 48 } }} />
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ fontSize: { xs: 28, sm: 36 } }}
          >
            Bolånekalkyl
          </Typography>
        </Box>
        <ThemeToggleButton
          onToggle={() => setMode(mode === "light" ? "dark" : "light")}
        />
      </Box>
    </Box>
  );
}
