import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Desktop from "./components/Layout/Desktop";
import Header from "./components/Layout/Header";
import type { CalculatorValues } from "./helpers/mortgageCalculation";
import Mobile from "./components/Layout/Mobile";
import themeFactory from "./theme";
import Footer from "./components/Layout/Footer";
import useLocalStorageState from "./helpers/useLocalStorageState";
import useThemeMode from "./helpers/useThemeMode";

function App() {
  const [mode, setMode] = useThemeMode();
  const theme = useMemo(() => themeFactory(mode), [mode]);

  const [values, setValues] = useLocalStorageState(
    "mortgage-calculator-values",
    {
      price: 1_000_000,
      downPayment: 150_000,
      income: 0,
      maintenance: 0,
      monthlyFee: 0,
      interest: 3,
    }
  );
  // const [mode, setMode] = useState<"light" | "dark">("light");
  // const theme = useMemo(() => themeFactory(mode), [mode]);

  // const [values, setValues] = useLocalStorageState<CalculatorValues>(
  //   "mortgage-calculator-values",
  //   {
  //     price: 1_000_000,
  //     downPayment: 150_000,
  //     income: 0,
  //     maintenance: 0,
  //     monthlyFee: 0,
  //     interest: 3,
  //   }
  // );

  const updateValue = (key: keyof CalculatorValues) => (value: number) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} setMode={setMode} />
      <Desktop updateValue={updateValue} values={values} />
      <Mobile updateValue={updateValue} values={values} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
