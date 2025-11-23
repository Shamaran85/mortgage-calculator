import { IconButton, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface Props {
  onToggle: () => void;
}

export default function ThemeToggleButton(props: Props) {
  const { onToggle } = props;
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <IconButton
      onClick={onToggle}
      color="inherit"
      sx={{
        position: "absolute",
        top: { xs: 5, md: 10 },
        right: { xs: 5, md: 10 },
        transition: "0.3s",
        "&:hover": {
          backgroundColor: "action.hover",
        },

        "&:focus": { outline: "none" },
        "& .MuiTouchRipple-root": { display: "none" },
      }}
    >
      {isDark ? (
        <DarkModeIcon sx={{ transition: "0.3s", fontSize: 21 }} />
      ) : (
        <LightModeIcon sx={{ transition: "0.3s", fontSize: 21 }} />
      )}
    </IconButton>
  );
}
