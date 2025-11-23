import { Box, Stack } from "@mui/material";
import type { CalculatorValues } from "../../helpers/mortgageCalculation";
import Summary from "../Details/Summary";
import InputForm from "../Form/InputForm";
import History from "../Details/History";
import Cost from "../Details/Cost";

interface Props {
  updateValue: (key: keyof CalculatorValues) => (value: number) => void;
  values: CalculatorValues;
}

export default function Mobile({ updateValue, values }: Props) {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        bgcolor: "background.paper",
        px: 3,
        pt: 3,
        pb: 5,
        width: "100%",
      }}
    >
      <Stack spacing={5}>
        <Cost values={values} />
        <InputForm updateValue={updateValue} values={values} />
        <Summary values={values} />
        <History values={values} />
      </Stack>
    </Box>
  );
}
