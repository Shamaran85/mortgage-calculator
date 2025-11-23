import { useEffect } from "react";
import useLocalStorageState from "./useLocalStorageState";

export default function useThemeMode() {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [mode, setMode] = useLocalStorageState<"light" | "dark">(
    "mortgage-calculator-theme",
    systemPrefersDark ? "dark" : "light"
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const listener = (e: MediaQueryListEvent) => {
      setMode(e.matches ? "dark" : "light");
    };

    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, [setMode]);

  return [mode, setMode] as const;
}
