import { useMemo } from "react";
import {
  mortgageCalculation,
  type CalculatorValues,
} from "./mortgageCalculation";

export function useMortgageCalculation(values: CalculatorValues) {
  return useMemo(
    () => mortgageCalculation(values),
    [
      values.price,
      values.downPayment,
      values.interest,
      values.income,
      values.maintenance,
      values.monthlyFee,
    ]
  );
}
