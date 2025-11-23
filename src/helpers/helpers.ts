export const formatMoney = (value: number) =>
  value.toLocaleString("sv-SE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

export const formatPercent = (value: number) =>
  value.toLocaleString("sv-SE", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });

export const safeValue = (value: number) =>
  Number.isFinite(value) ? value : 0;

export function getMinDownPayment(housePrice: number): number {
  return Math.round(housePrice * 0.15);
}

export function getDownPaymentPercent(
  downPayment: number,
  housePrice: number
): string {
  return housePrice > 0 ? ((downPayment / housePrice) * 100).toFixed(0) : "0";
}
