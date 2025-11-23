import { Box, Chip, ListItem, Typography } from "@mui/material";

interface Props {
  label: string;
  value: string;
  chip?: string;
  emphasis?: boolean;
  odd: boolean;
}

export default function SummaryItem({
  label,
  value,
  chip,
  emphasis,
  odd,
}: Props) {
  return (
    <ListItem
      sx={{
        display: "flex",
        backgroundColor: odd ? "action.hover" : "transparent",
        p: 1.5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography>{label}</Typography>

        {chip && (
          <Chip
            label={chip}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 500, fontSize: 12 }}
          />
        )}
      </Box>

      <Typography sx={{ ml: "auto", fontWeight: emphasis ? 700 : 400 }}>
        {value}
      </Typography>
    </ListItem>
  );
}
