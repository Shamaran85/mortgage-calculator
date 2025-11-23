import { Box, Divider, IconButton, List, Typography } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useMortgageCalculation } from "../../helpers/useMortgageCalculation";
import type { CalculatorValues } from "../../helpers/mortgageCalculation";
import HistoryItem from "./HistoryItem";
import { HistoryModal } from "./HistoryModal";
import { useState } from "react";

interface Props {
  values: CalculatorValues;
}

const HISTORICAL = [
  { year: 2022, rate: 4.27 },
  { year: 2023, rate: 5.58 },
  { year: 2024, rate: 5.24 },
];

export default function History({ values }: Props) {
  const [open, setOpen] = useState(false);
  const historyEntries = HISTORICAL.map(({ year, rate }) => {
    const { totalBeforeDeduction } = useMortgageCalculation({
      ...values,
      interest: rate,
    });

    return {
      year,
      rate,
      cost: totalBeforeDeduction,
    };
  }).filter(Boolean) as Array<{
    year: number;
    rate: number;
    cost: number;
    emphasis?: boolean;
  }>;

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <HistoryIcon color="primary" sx={{ fontSize: 32 }} />
        <Typography variant="h6" fontWeight={600}>
          Historik
        </Typography>
        <IconButton
          sx={{ ml: "auto" }}
          onClick={() => setOpen(true)}
          size="small"
        >
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {historyEntries.map((entry, i) => (
          <HistoryItem key={entry.year} {...entry} odd={i % 2 === 1} />
        ))}
      </List>
      <HistoryModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
