import { Box } from "@mui/material";
import type { CalculatorValues } from "../../helpers/mortgageCalculation";
import InputItem from "./InputItem";
import {
  formatMoney,
  getDownPaymentPercent,
  getMinDownPayment,
} from "../../helpers/helpers";

interface Props {
  updateValue: (key: keyof CalculatorValues) => (value: number) => void;
  values: CalculatorValues;
}

function InputForm({
  updateValue,
  values: { price, downPayment, income, maintenance, monthlyFee, interest },
}: Props) {
  const minDownPayment = getMinDownPayment(price);
  const downPaymentPercent = getDownPaymentPercent(downPayment, price);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <InputItem
        title="Vad kostar bostaden?"
        value={price}
        valueKey="price"
        updateValue={updateValue}
        min={100_000}
        max={10_000_000}
        step={50_000}
        adornment="kr"
        showSlider
      />

      <InputItem
        title="Kontantinsats"
        subTitle={`Minst 15% krävs (${formatMoney(minDownPayment)} kr)`}
        chip={`${downPaymentPercent}%`}
        value={downPayment}
        valueKey="downPayment"
        updateValue={updateValue}
        min={minDownPayment}
        max={price}
        step={10_000}
        adornment="kr"
        showSlider
      />

      <InputItem
        title="Vilken ränta vill du räkna på?"
        value={interest}
        valueKey="interest"
        updateValue={updateValue}
        min={0}
        max={10}
        step={0.05}
        adornment="%"
        titleWithValue
        showSlider
        readOnly
      />

      <InputItem
        title="Hushållets inkomst före skatt"
        value={income}
        valueKey="income"
        updateValue={updateValue}
        adornment="kr/mån"
      />

      <InputItem
        title="Driftskostnad"
        value={maintenance}
        valueKey="maintenance"
        updateValue={updateValue}
        adornment="kr/mån"
      />

      <InputItem
        title="Avgift"
        value={monthlyFee}
        valueKey="monthlyFee"
        updateValue={updateValue}
        adornment="kr/mån"
      />
    </Box>
  );
}

export default InputForm;
