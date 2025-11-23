import { Box, Divider, List, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SummaryItem from "./SummaryItem";
import type { CalculatorValues } from "../../helpers/mortgageCalculation";
import { useMortgageCalculation } from "../../helpers/useMortgageCalculation";
import { formatMoney } from "../../helpers/helpers";

interface Props {
  values: CalculatorValues;
}

export default function Summary({ values }: Props) {
  const { maintenance, monthlyFee } = values;
  const {
    loanAmount,
    loanToValue,
    amortizationPercent,
    amortizationPerMonth,
    interestCost,
    interestCostAfterDeduction,
  } = useMortgageCalculation(values);

  const overviewEntries = [
    { label: "Lånebelopp", value: `${formatMoney(loanAmount)} kr` },
    { label: "Belåningsgrad", value: `${formatMoney(loanToValue)}%` },
    {
      label: "Amortering",
      chip: `${amortizationPercent}%`,
      value: `${formatMoney(amortizationPerMonth)} kr/mån`,
    },
    {
      label: "Räntekostnad",
      value: `${formatMoney(interestCost)} kr/mån`,
      emphasis: true,
    },
    {
      label: "Ränta efter avdrag",
      value: `${formatMoney(interestCostAfterDeduction)} kr/mån`,
    },
    maintenance && {
      label: "Driftkostnad",
      value: `${formatMoney(maintenance)} kr/mån`,
    },
    monthlyFee && {
      label: "Avgift",
      value: `${formatMoney(monthlyFee)} kr/mån`,
    },
  ].filter(Boolean) as Array<{
    label: string;
    value: string;
    chip?: string;
    emphasis?: boolean;
  }>;

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <TrendingUpIcon color="primary" sx={{ fontSize: 36 }} />
        <Typography variant="h6" fontWeight={600}>
          Bolåneöversikt
        </Typography>
      </Box>
      <Divider />
      <List>
        {overviewEntries.map((entry, i) => (
          <SummaryItem key={entry.label} {...entry} odd={i % 2 === 1} />
        ))}
      </List>
    </Box>
  );
}
