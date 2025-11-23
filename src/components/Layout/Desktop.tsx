import { Box, Grid, Stack } from "@mui/material";
import type { CalculatorValues } from "../../helpers/mortgageCalculation";
import Summary from "../Details/Summary";
import InputForm from "../Form/InputForm";
import History from "../Details/History";
import Cost from "../Details/Cost";

interface Props {
  updateValue: (key: keyof CalculatorValues) => (value: number) => void;
  values: CalculatorValues;
}

export default function Desktop({ updateValue, values }: Props) {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        bgcolor: "background.default",
        pt: 6,
        pb: 12,
        maxWidth: 960,
        margin: "0 auto",
      }}
    >
      <Grid container spacing={6}>
        <Grid size={6}>
          <Box
            sx={{
              p: 4,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <InputForm updateValue={updateValue} values={values} />
          </Box>
        </Grid>

        <Grid size={6}>
          <Cost values={values} />
          <Box
            sx={{
              p: 4,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <Stack spacing={3}>
              <Summary values={values} />
              <History values={values} />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
