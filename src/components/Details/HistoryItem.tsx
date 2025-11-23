import { Box, Chip, ListItem, Typography } from "@mui/material";
import { formatMoney } from "../../helpers/helpers";

interface Props {
  year: number;
  rate: number;
  cost: number;
  emphasis?: boolean;
  odd: boolean;
}

export default function HistoryItem({ year, rate, cost, odd }: Props) {
  return (
    <ListItem
      sx={{
        display: "flex",
        backgroundColor: odd ? "action.hover" : "transparent",
        p: 1.5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography sx={{ fontWeight: 500 }}>{year}</Typography>
        <Chip
          label={`${rate}%`}
          size="small"
          color="primary"
          variant="outlined"
          sx={{ fontWeight: 500, fontSize: 12 }}
        />
      </Box>
      <Typography sx={{ ml: "auto" }}>{formatMoney(cost)} kr/mån</Typography>
    </ListItem>
  );
}
