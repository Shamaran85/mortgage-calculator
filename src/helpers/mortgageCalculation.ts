export interface CalculatorValues {
  price: number;
  downPayment: number;
  maintenance: number;
  monthlyFee: number;
  income: number;
  interest: number;
}

export function mortgageCalculation(values: CalculatorValues) {
  const { price, downPayment, interest, income, maintenance, monthlyFee } =
    values;

  const loanAmount = price - downPayment;
  const loanToValue = (loanAmount / price) * 100;
  const annualIncome = income * 12;
  const debtToIncome = loanAmount / annualIncome;

  let amortizationPercent = 0;
  if (loanToValue > 70) amortizationPercent = 2;
  else if (loanToValue > 50) amortizationPercent = 1;
  if (debtToIncome > 4.5) amortizationPercent += 1;

  const amortizationPerMonth = (loanAmount * (amortizationPercent / 100)) / 12;

  const interestCost = loanAmount * (interest / 100 / 12);
  const interestCostAfterDeduction = interestCost * 0.72;

  const totalBeforeDeduction =
    amortizationPerMonth + interestCost + maintenance + monthlyFee;
  const totalAfterDeduction =
    amortizationPerMonth +
    interestCostAfterDeduction +
    maintenance +
    monthlyFee;

  return {
    loanAmount,
    loanToValue,
    debtToIncome,
    amortizationPercent,
    amortizationPerMonth,
    interestCost,
    interestCostAfterDeduction,
    totalBeforeDeduction,
    totalAfterDeduction,
  };
}
