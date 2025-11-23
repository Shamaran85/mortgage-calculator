import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/roboto/300.css?inline";
import "@fontsource/roboto/400.css?inline";
import "@fontsource/roboto/500.css?inline";
import "@fontsource/roboto/700.css?inline";
import { registerSW } from "virtual:pwa-register";
registerSW();

// Render App
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
