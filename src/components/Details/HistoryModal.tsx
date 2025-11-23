import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HistoryIcon from "@mui/icons-material/History";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const HistoryModal = ({ open, onClose }: Props) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight: 600,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <HistoryIcon sx={{ fontSize: 36 }} color="primary" />
        <Typography variant="h6">Om historik</Typography>
      </Box>
      <IconButton onClick={onClose} size="small">
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent sx={{ pt: 1 }}>
      <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
        Här visas hur samma bolån skulle ha kostat med genomsnittliga räntor
        under respektive år. Det hjälper dig förstå hur förändringar i
        ränteläget påverkar månadskostnaden.
      </Typography>
      <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
        Räntorna baseras på årliga historiska snitträntor från bankernas
        rapporterade värden (Swedbank, SEB, Handelsbanken etc.).
      </Typography>
    </DialogContent>
  </Dialog>
);
