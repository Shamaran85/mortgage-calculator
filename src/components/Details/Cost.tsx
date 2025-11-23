import { Box, Typography, Paper, Divider, useTheme } from "@mui/material";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import { useMortgageCalculation } from "../../helpers/useMortgageCalculation";
import type { CalculatorValues } from "../../helpers/mortgageCalculation";
import { formatMoney } from "../../helpers/helpers";

interface Props {
  values: CalculatorValues;
}

export default function Cost({ values }: Props) {
  const theme = useTheme();
  const { totalBeforeDeduction, totalAfterDeduction } =
    useMortgageCalculation(values);

  return (
    <Paper
      elevation={0}
      sx={{
        margin: "0px 0px 24px auto",
        px: { xs: 2, sm: 3 },
        py: { xs: 3, sm: 4 },
        textAlign: "center",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box display="flex" justifyContent="center" mb={2}>
        <SavingsOutlinedIcon
          sx={{
            fontSize: 56,
            color: theme.palette.primary.main,
          }}
        />
      </Box>

      <Typography
        variant="h3"
        fontWeight={700}
        sx={{
          fontSize: { xs: 38, sm: 52 },
          color: theme.palette.primary.main,
          lineHeight: 1.1,
        }}
      >
        {formatMoney(totalBeforeDeduction)} kr/mån
      </Typography>

      <Divider sx={{ my: 2, mx: "auto", width: "60%", opacity: 0.4 }} />

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ fontSize: { xs: 14, sm: 16 } }}
      >
        Efter skatteavdrag{" "}
        <strong>{formatMoney(totalAfterDeduction)} kr/mån</strong>
      </Typography>
    </Paper>
  );
}
